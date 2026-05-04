"use client";
// components/ResumeChatbot.tsx — AI-powered floating chat widget
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What are Washim's top skills?",
  "Tell me about his projects",
  "What internships has he done?",
  "How can I contact Washim?",
  "What is his educational background?",
  "Is he open to opportunities?",
  "What certifications does he have?",
  "What makes him stand out?",
  "Which tech stack does Washim prefer?",
  "Has Washim worked with AI and Machine Learning?",
  "What is Washim's community role at BIT?",
  "Can I hire Washim for work?",
  "Does Washim have full-stack experience?",
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi! 👋 I'm **Washim AI** — your guide to Washim Shaikh's portfolio. Ask me anything about his skills, projects, internships, or how to get in touch!",
  timestamp: new Date(),
};

function formatContent(text: string) {
  // Convert **bold** and newlines to JSX
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part === "\n") return <br key={i} />;
    // Convert • bullet points
    if (part.startsWith("• ")) return <span key={i} className="block ml-2">• {part.slice(2)}</span>;
    return part;
  });
}

export default function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState<Set<string>>(new Set());
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isMinimized, scrollToBottom]);

  // Show a subtle notification pulse after 3s on first load
  useEffect(() => {
    const timer = setTimeout(() => setHasNewMessage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
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

      const data = await res.json();
      const reply = data.reply || "I couldn't find an answer. Try asking about Washim's skills, projects, or contact info!";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again or contact Washim directly at washimshaikh33@gmail.com",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping]);

  const handleSuggestedQuestion = (question: string) => {
    setAskedQuestions((prev) => new Set(prev).add(question));
    sendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasNewMessage(false);
  };

  // Available suggested questions (not yet asked)
  const availableSuggestions = SUGGESTED_QUESTIONS.filter((q) => !askedQuestions.has(q));

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
            className="fixed bottom-6 right-6 z-50 dark"
          >
            <button
              onClick={handleOpen}
              className="w-14 h-14 bg-slate-900 dark:bg-emerald-600 rounded-full flex items-center justify-center group shadow-2xl hover:scale-105 transition-all"
              aria-label="Open AI Chat Assistant"
            >
              <Bot className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              {hasNewMessage && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-darkbg-primary animate-pulse" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-[400px] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-200 dark:border-white/10"
            style={{ maxHeight: isMinimized ? "60px" : "560px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-4 bg-slate-900 text-white flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm leading-none tracking-wide">Washim AI</p>
                <p className="text-emerald-400/80 text-[10px] uppercase font-bold mt-1 tracking-tighter">AI Assistant</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body — hidden when minimized */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div
                  className="flex-1 overflow-y-auto p-4 space-y-3 bg-white dark:bg-darkbg-secondary"
                  style={{ maxHeight: "340px" }}
                  aria-live="polite"
                  aria-label="Chat messages"
                >
                  <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.22 }}
                        className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                      >
                        {/* Avatar */}
                        <div
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white ${
                            msg.role === "user"
                              ? "bg-emerald-600 shadow-sm shadow-emerald-500/20"
                              : "bg-slate-800"
                          }`}
                        >
                          {msg.role === "user" ? (
                            <User className="w-3.5 h-3.5" />
                          ) : (
                            <Bot className="w-3.5 h-3.5 text-emerald-400" />
                          )}
                        </div>

                        {/* Bubble */}
                        <div
                          className={`max-w-[78%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                            msg.role === "user"
                              ? "bg-emerald-600 text-white rounded-tr-sm"
                              : "bg-slate-100 dark:bg-darkbg-tertiary text-slate-800 dark:text-darktext-secondary rounded-tl-sm border border-slate-200 dark:border-white/5 shadow-sm"
                          }`}
                        >
                          {formatContent(msg.content)}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2 items-end"
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="bg-slate-100 dark:bg-darkbg-tertiary px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center border border-slate-200 dark:border-white/5">
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <motion.span
                            key={i}
                            className="w-2 h-2 rounded-full bg-emerald-500"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested questions */}
                {availableSuggestions.length > 0 && !isTyping && (
                  <div className="px-4 py-3 bg-slate-50 dark:bg-darkbg-secondary border-t border-slate-100 dark:border-white/5 flex overflow-x-auto gap-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                    {availableSuggestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="text-xs px-3 py-1.5 rounded-full border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 transition-all whitespace-nowrap flex-shrink-0 font-medium"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input area */}
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 px-3 py-3 bg-white dark:bg-darkbg-tertiary border-t border-slate-100 dark:border-white/10"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Washim..."
                    className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-darkbg-secondary text-slate-900 dark:text-darktext-primary placeholder:text-slate-400 dark:placeholder:text-darktext-muted focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    disabled={isTyping}
                    aria-label="Type your message"
                  />
                  <div className="flex-shrink-0">
                    <button
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-emerald-600 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg hover:scale-105 active:scale-95"
                      aria-label="Send message"
                    >
                      {isTyping ? (
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
