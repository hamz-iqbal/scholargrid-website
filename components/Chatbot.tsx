"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const MAX_HISTORY = 10;
const MAX_INPUT = 1000;

// Safety net: agar model phir bhi markdown de, to saaf kar do
function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/```\w*\n?/g, ""))
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/^\s*[\*\-]\s+/gm, "• ")
    .replace(/(^|[\s(])\*(?!\s)([^*\n]+?)\*(?=[\s).,!?:;]|$)/g, "$1$2")
    .replace(/^\s*---+\s*$/gm, "")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hello! I am the AI Assistant from the ScholarGrid Team. How can I help you with your academic research, thesis, or data analysis today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Streaming ke dauran "auto" scroll taake lag na ho
    messagesEndRef.current?.scrollIntoView({
      behavior: loading ? "auto" : "smooth",
    });
  }, [messages, isOpen, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim().slice(0, MAX_INPUT);
    if (!text || loading) return;

    const userMsg: Msg = { role: "user", content: text };
    const newMessages: Msg[] = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages
            .slice(-MAX_HISTORY)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const contentType = res.headers.get("content-type") || "";

      // Error case: server ne JSON bheja
      if (!res.ok || contentType.includes("application/json")) {
        const data = await res.json().catch(() => ({}));
        const errText = data.error
          ? `Error: ${data.error}`
          : data.reply || "Something went wrong. Please try again.";
        setMessages([...newMessages, { role: "assistant", content: errText }]);
        return;
      }

      if (!res.body) throw new Error("No stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let raw = "";
      let started = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        raw += decoder.decode(value, { stream: true });
        const clean = stripMarkdown(raw);
        if (!clean) continue;

        if (!started) {
          started = true;
          setMessages([...newMessages, { role: "assistant", content: clean }]);
        } else {
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: clean };
            return copy;
          });
        }
      }

      if (!started) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: "Error: Empty response from model. Please try again.",
          },
        ]);
      }
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Server connection error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const lastIsUser =
    messages.length > 0 && messages[messages.length - 1].role === "user";

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end pointer-events-auto">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-3 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 pointer-events-auto">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <div>
                <h3 className="font-semibold text-sm">ScholarGrid Assistant</h3>
                <p className="text-[10px] text-gray-300">Online | Official Support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-lg font-bold px-2 cursor-pointer"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 text-xs sm:text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl whitespace-pre-wrap break-words ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && lastIsUser && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-3 py-2 rounded-xl text-gray-400 text-xs italic">
                  ScholarGrid Assistant is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2 bg-white border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              maxLength={MAX_INPUT}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 text-gray-800"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-slate-800 hover:scale-105 transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer pointer-events-auto"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-.816-.984 4.5 4.5 0 0 1 1.057-1.803C3.992 16.488 3 14.343 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </button>
    </div>
  );
}