"use client";

import { useEffect, useState } from "react";

export default function SecurityGuard() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
      return false;
    };

    // 2. Disable Keyboard Shortcuts for Developer Tools & Source Viewing
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // F12 key
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Ctrl + Shift + I (Inspect Elements)
      if (cmdOrCtrl && e.shiftKey && (e.key === "I" || e.key === "i" || e.keyCode === 73)) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Ctrl + Shift + J (Console)
      if (cmdOrCtrl && e.shiftKey && (e.key === "J" || e.key === "j" || e.keyCode === 74)) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Ctrl + Shift + C (Element Inspector)
      if (cmdOrCtrl && e.shiftKey && (e.key === "C" || e.key === "c" || e.keyCode === 67)) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Ctrl + Shift + K (Firefox Console)
      if (cmdOrCtrl && e.shiftKey && (e.key === "K" || e.key === "k" || e.keyCode === 75)) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Ctrl + U (View Source)
      if (cmdOrCtrl && (e.key === "U" || e.key === "u" || e.keyCode === 85)) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Ctrl + S (Save Page)
      if (cmdOrCtrl && (e.key === "S" || e.key === "s" || e.keyCode === 83)) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }

      // Cmd + Option + I / J / C (Mac OS devtools)
      if (isMac && e.metaKey && e.altKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
        e.preventDefault();
        e.stopPropagation();
        triggerWarning();
        return false;
      }
    };

    // 3. Prevent Copy & Cut Outside Text Fields
    const handleCopyCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.getAttribute("contenteditable") === "true"
      ) {
        return; // Allow copying inside input fields
      }
      e.preventDefault();
      triggerWarning();
    };

    // 4. Prevent Image / Text Dragging
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      e.preventDefault();
    };

    let timer: NodeJS.Timeout;
    function triggerWarning() {
      setShowWarning(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowWarning(false);
      }, 2500);
    }

    // Attach listeners
    window.addEventListener("contextmenu", handleContextMenu, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("copy", handleCopyCut, { capture: true });
    window.addEventListener("cut", handleCopyCut, { capture: true });
    window.addEventListener("dragstart", handleDragStart, { capture: true });

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("copy", handleCopyCut, { capture: true });
      window.removeEventListener("cut", handleCopyCut, { capture: true });
      window.removeEventListener("dragstart", handleDragStart, { capture: true });
      clearTimeout(timer);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#0B132B]/95 text-white backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-xs sm:text-sm font-bold">
        <span className="w-2.5 h-2.5 rounded-full bg-[#00BFE8] animate-ping" />
        <span>Content and developer options are protected on this portfolio.</span>
      </div>
    </div>
  );
}
