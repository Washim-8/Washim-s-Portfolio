"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What are Washim's core skills?",
  "Tell me about his AI/ML projects",
  "What internships has he done?",
  "How can I contact Washim?",
  "What is his educational background?",
  "Is he available for immediate hiring?",
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi there! 👋 I'm **Washim AI** — your virtual guide to Washim Shaikh's portfolio. Ask me anything about his skills, machine learning projects, internships, or how to get in touch!",
  timestamp: new Date(),
};

function formatContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-[#202225] dark:text-white font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("• "))
      return (
        <span key={i} className="block ml-2 my-0.5">
          • {part.slice(2)}
        </span>
      );
    return part;
  });
}

export default function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, scrollToBottom]);

  const sendMessage = useCallback(
    async (text: string) => {
      const userMsg = text.trim();
      if (!userMsg || isTyping) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: userMsg,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsTyping(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg }),
        });

        if (res.ok) {
          const data = await res.json();
          const assistantMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.reply || "I'm sorry, I couldn't process that response.",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, assistantMsg]);
        } else {
          throw new Error("Chat request failed");
        }
      } catch {
        const errorMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I encountered a temporary connection issue. You can reach out directly to Washim via email at washimshaikh33@gmail.com!",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
      }
    },
    [isTyping]
  );

  return (
    <>
      {/* Floating Trigger Button: Pure 3D Robot Image without Background or Circle */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 2, -2, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-5 z-40 pointer-events-auto"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group cursor-pointer p-0 bg-transparent border-none outline-none focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          aria-label={isOpen ? "Close AI Assistant" : "Chat with Washim AI"}
          title="Ask Washim AI"
        >
          {/* 3D Robot Asset Floating Directly without Background or Circle, Flipped to Left */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300">
            <Image
              src="/robot-assistant.webp"
              alt="Washim AI Robot"
              width={80}
              height={80}
              className="w-full h-full object-contain pointer-events-auto -scale-x-100"
              priority
            />
          </div>
        </button>
      </motion.div>

      {/* Light Liquid Glass & Robot Navy Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[410px] h-[540px] max-h-[82vh] light-glass-modal rounded-3xl z-50 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.2),0_0_30px_rgba(28,224,253,0.15)] overflow-hidden border border-white/95 dark:border-white/15"
          >
            {/* Robot Navy Header */}
            <div className="p-4 border-b border-[#1CE0FD]/20 flex items-center justify-between robot-display-bg">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#0A1320] border-2 border-[#1CE0FD] shadow-[0_0_12px_rgba(28,224,253,0.4)] p-0.5 shrink-0">
                  <Image
                    src="/robot-assistant.webp"
                    alt="Washim AI Robot"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Washim AI Assistant</span>
                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-[#1CE0FD]/20 text-[#1CE0FD] border border-[#1CE0FD]/40">
                      GPT-4o
                    </span>
                  </h4>
                  <p className="text-[10px] text-[#A5EBFB] font-semibold flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1CE0FD] shadow-[0_0_6px_#1CE0FD] animate-pulse" />
                    Neural Engine Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs leading-relaxed bg-[#F7F8F6]/60 dark:bg-[#181C24]/60 backdrop-blur-md">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {msg.role === "user" ? (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#00BFE8] text-white shrink-0 shadow-sm">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#0A1320] border border-[#1CE0FD]/50 shadow-[0_0_8px_rgba(28,224,253,0.3)] shrink-0 p-0.5">
                      <Image
                        src="/robot-assistant.webp"
                        alt="Robot AI"
                        width={28}
                        height={28}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl max-w-[82%] ${
                      msg.role === "user"
                        ? "bg-[#00BFE8] text-white rounded-tr-none shadow-[0_3px_10px_rgba(0,191,232,0.25)]"
                        : "bg-[#FDFDFD] dark:bg-[#202632] text-[#202225] dark:text-slate-200 rounded-tl-none shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_3px_8px_rgba(163,166,160,0.18)] dark:shadow-none border border-white/90 dark:border-white/10"
                    }`}
                  >
                    {formatContent(msg.content)}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#0A1320] border border-[#1CE0FD]/50 shadow-[0_0_8px_rgba(28,224,253,0.3)] shrink-0 p-0.5">
                    <Image
                      src="/robot-assistant.webp"
                      alt="Robot AI"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FDFDFD] dark:bg-[#202632] shadow-sm flex items-center gap-2 text-[#5F6368] dark:text-slate-300">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#1CE0FD]" />
                    <span className="text-[11px] font-semibold">Processing query...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggested Questions */}
            <div className="px-3 py-2 border-t border-black/5 dark:border-white/10 flex gap-1.5 overflow-x-auto no-scrollbar bg-white/70 dark:bg-darkbg-secondary/70">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-2.5 py-1 rounded-full bg-white dark:bg-darkbg-tertiary text-[10px] font-semibold text-[#5F6368] dark:text-slate-300 whitespace-nowrap shadow-sm hover:text-[#1CE0FD] hover:border-[#1CE0FD]/40 border border-black/5 dark:border-white/5 cursor-pointer shrink-0 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="p-3 border-t border-black/5 dark:border-white/10 flex items-center gap-2 bg-white/80 dark:bg-darkbg-secondary/80"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about Washim's skills, AI projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-2xl bg-[#F7F8F6] dark:bg-[#181C24] text-xs text-[#202225] dark:text-white placeholder:text-[#85898E] border border-black/5 dark:border-white/5 focus:outline-none focus:border-[#1CE0FD]/50 focus:ring-1 focus:ring-[#1CE0FD]/30 shadow-inner"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-full btn-cyan flex items-center justify-center disabled:opacity-40 cursor-pointer shrink-0 shadow-[0_0_10px_rgba(28,224,253,0.35)]"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
