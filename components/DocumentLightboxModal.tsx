"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ExternalLink, Shield, FileText } from "lucide-react";

export interface DocumentModalData {
  title: string;
  issuer: string;
  previewImage: string;
  fileUrl?: string;
  verifyUrl?: string;
  year?: string;
  credentialId?: string;
  score?: string;
  category?: string;
  skills?: string[];
  type?: string;
}

interface DocumentLightboxModalProps {
  item: DocumentModalData | null;
  onClose: () => void;
}

// React 18/19 hydration-safe mounted hook without triggering cascading setState renders
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function DocumentLightboxModal({
  item,
  onClose,
}: DocumentLightboxModalProps) {
  const isClient = useIsClient();

  // Lock scroll & handle ESC key
  useEffect(() => {
    if (!item) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!isClient || !item) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/50 animate-fadeIn transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="doc-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-[#E6ECF5] dark:bg-[#161B26] rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/80 dark:border-white/10 flex flex-col justify-between overflow-hidden text-[#2A354F] dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-3 pb-3 sm:pb-4 border-b border-black/10 dark:border-white/10 shrink-0">
          <div className="min-w-0 flex-1 pr-2">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-[#00BFE8] bg-[#CCEFF9] dark:bg-[#00BFE8]/20 px-2.5 py-0.5 rounded-full">
                {item.issuer}
              </span>
              {item.year && (
                <span className="text-xs font-semibold text-[#475569] dark:text-slate-400">
                  {item.year}
                </span>
              )}
              {item.score && (
                <span className="text-xs font-extrabold text-[#10AB7C] bg-[#D1FAE5] dark:bg-[#10AB7C]/20 px-2 py-0.5 rounded-md">
                  {item.score}
                </span>
              )}
              {item.type && (
                <span className="text-xs font-semibold text-[#475569] dark:text-slate-400">
                  • {item.type}
                </span>
              )}
            </div>
            <h3
              id="doc-modal-title"
              className="text-base sm:text-lg md:text-xl font-black text-[#2A354F] dark:text-white leading-snug line-clamp-2"
            >
              {item.title}
            </h3>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close document modal"
            className="w-9 h-9 rounded-2xl bg-[#E6ECF5] dark:bg-[#202634] text-[#475569] hover:text-[#FF6B6B] flex items-center justify-center shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-inner border border-white/80 dark:border-white/10 transition-all cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Document Preview */}
        <div className="relative my-3 sm:my-4 flex-1 max-h-[58vh] sm:max-h-[64vh] rounded-2xl bg-[#DEE5F0]/90 dark:bg-black/60 border border-white/80 dark:border-white/5 shadow-inner overflow-auto custom-scrollbar flex items-center justify-center p-2 sm:p-4">
          {item.previewImage ? (
            <div className="relative max-h-full max-w-full flex items-center justify-center">
              <Image
                src={item.previewImage}
                alt={`${item.title} document preview`}
                width={1200}
                height={850}
                className="max-h-[52vh] sm:max-h-[58vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-lg border border-white/40 dark:border-white/10 select-none"
                priority
                unoptimized
              />
            </div>
          ) : (
            <div className="text-center p-8">
              <FileText className="w-16 h-16 text-[#00BFE8] mx-auto mb-3" />
              <p className="text-sm font-bold text-[#2A354F] dark:text-white">
                Official Document Attached
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#475569] dark:text-slate-300 flex flex-wrap items-center gap-2 font-medium">
            {item.credentialId && (
              <span className="font-mono bg-white/70 dark:bg-black/40 px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/5 text-[#2A354F] dark:text-white font-bold">
                ID: {item.credentialId}
              </span>
            )}
            {item.skills && (
              <div className="hidden sm:flex items-center gap-1.5">
                {item.skills.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-[11px] bg-white/70 dark:bg-black/40 px-2 py-0.5 rounded-md text-[#475569] dark:text-slate-300 font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Open High-Res Document in New Tab */}
            {(item.fileUrl || item.previewImage) && (
              <a
                href={item.previewImage || item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#00BFE8] text-white hover:bg-[#00AEDB] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Full Document</span>
              </a>
            )}

            {/* Verify Online Button */}
            {item.verifyUrl && (
              <a
                href={item.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#E6ECF5] dark:bg-[#202634] text-[#2A354F] dark:text-slate-200 hover:text-[#00BFE8] text-xs font-bold flex items-center gap-1.5 shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] border border-white/80 dark:border-white/10 transition-all cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-[#10AB7C]" />
                <span>Verify Online</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
