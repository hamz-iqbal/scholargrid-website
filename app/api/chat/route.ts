import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT =
  "You are the official AI Assistant for ScholarGrid Support. Guide users professionally and helpfully regarding academic research, thesis writing, data analysis, and modeling.";

// Kitni pichli messages bhejni hain (free limit bachane ke liye)
const MAX_HISTORY = 20;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

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

    // Sirf valid messages lein aur Gemini ke format mein convert karein
    let contents = messages
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
      },
    });

    const reply = response.text ?? "";

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

    // Free limit khatam hone par user-friendly message
    if (error?.status === 429 || msg.includes("429")) {
      return NextResponse.json(
        { error: "Bohot zyada requests aa rahi hain. Thodi der baad try karein." },
        { status: 429 }
      );
    }

    // Model retire/not found hone par
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