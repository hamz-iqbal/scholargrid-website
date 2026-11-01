import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the official AI Assistant for ScholarGrid Support. Guide users professionally and helpfully regarding academic research, thesis writing, data analysis, and modeling.

Formatting rules (strictly follow):
- Reply in plain text only. Do NOT use markdown symbols such as **, *, _, #, ---, or backticks.
- Do not use bold or italics.
- Keep answers short and clear (under 150 words unless the user asks for detail).
- For lists, use simple numbering like "1." and "2." on new lines, or short sentences.
- Do not end every reply with a long list of follow-up questions. Ask at most one short question.
- Use a polite, professional tone.
- Reply in the same language the user writes in.`;

// Free quota bachane ke liye sirf last N messages bhejte hain
const MAX_HISTORY = 20;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

// Safety net: agar model phir bhi markdown de, to saaf kar do
function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/```\w*\n?/g, "")) // code fences
    .replace(/^#{1,6}\s*/gm, "")                                    // headings
    .replace(/\*\*(.*?)\*\*/g, "$1")                                // **bold**
    .replace(/__(.*?)__/g, "$1")                                    // __bold__
    .replace(/^\s*[\*\-]\s+/gm, "• ")                               // bullets
    .replace(/(^|[\s(])\*(?!\s)([^*\n]+?)\*(?=[\s).,!?:;]|$)/g, "$1$2") // *italic*
    .replace(/^\s*---+\s*$/gm, "")                                  // horizontal lines
    .replace(/`([^`]*)`/g, "$1")                                    // inline code
    .replace(/\n{3,}/g, "\n\n")                                     // extra blank lines
    .trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const modelName = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
    const ai = new GoogleGenAI({ apiKey });

    // Valid messages ko Gemini format mein convert karein
    const contents = messages
      .filter((m) => m && typeof m.content === "string" && m.content.trim())
      .slice(-MAX_HISTORY)
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    // Conversation hamesha "user" message se shuru honi chahiye
    while (contents.length > 0 && contents[0].role !== "user") {
      contents.shift();
    }

    if (contents.length === 0) {
      return NextResponse.json(
        { error: "No valid user message found" },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.6,
        maxOutputTokens: 800,
      },
    });

    const reply = stripMarkdown(response.text ?? "");

    if (!reply) {
      return NextResponse.json(
        { error: "Empty response from model" },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error?.message || error);

    const msg = String(error?.message || "");

    // Free limit khatam
    if (error?.status === 429 || msg.includes("429")) {
      return NextResponse.json(
        { error: "Bohot zyada requests aa rahi hain. Thodi der baad try karein." },
        { status: 429 }
      );
    }

    // Model retire ho gaya
    if (error?.status === 404 || msg.includes("404")) {
      return NextResponse.json(
        { error: "AI model available nahi hai. Admin ko GEMINI_MODEL update karna hoga." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Response laane mein problem aayi. Dobara try karein." },
      { status: 500 }
    );
  }
}