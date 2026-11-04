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

// Model code mein fix hai, Vercel ke GEMINI_MODEL se koi farq nahi parta
const MODEL_NAME = "gemini-3.5-flash-lite";

// Free quota bachane ke liye sirf last N messages bhejte hain
const MAX_HISTORY = 10;
const MAX_CHARS_PER_MESSAGE = 2000;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const t0 = Date.now();
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

    const ai = new GoogleGenAI({ apiKey });

    // Valid messages ko Gemini format mein convert karein
    const contents = messages
      .filter((m) => m && typeof m.content === "string" && m.content.trim())
      .slice(-MAX_HISTORY)
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content.slice(0, MAX_CHARS_PER_MESSAGE) }],
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

    // Streaming: jawab chunks mein foran aana shuru ho jata hai
    const stream = await ai.models.generateContentStream({
      model: MODEL_NAME,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.6,
        maxOutputTokens: 500,
      },
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        let first = true;
        try {
          for await (const chunk of stream) {
            if (first) {
              console.log("First chunk ms:", Date.now() - t0);
              first = false;
            }
            const text = chunk.text;
            if (text) controller.enqueue(encoder.encode(text));
          }
        } catch (err: any) {
          console.error("Gemini stream error:", err?.message || err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
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
        { error: "AI model available nahi hai. Admin ko model name update karna hoga." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Response laane mein problem aayi. Dobara try karein." },
      { status: 500 }
    );
  }
}