import { useEffect, useState } from "react";

export function TerminalMockup() {
  const lines = [
    "npm run start:agent",
    "> Launching Meareg AI Agent...",
    "Status: Active 🟢",
    "Specialties: Backend, AI Agents, APIs",
    "Skills: Python · Go · Node.js · React",
    "Current: Architecting scalable systems.",
    "Ready to collaborate!"
  ];

  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const line = lines[currentLineIndex];
    const isCommand = line.startsWith("npm") || line.startsWith(">");
    const speed = isCommand ? 40 : 15;

    const timer = setTimeout(() => {
      if (currentCharIndex < line.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setTypedLines((prev) => [...prev, line]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex]);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      const restartTimer = setTimeout(() => {
        setTypedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 8000);
      return () => clearTimeout(restartTimer);
    }
  }, [currentLineIndex]);

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-border bg-black/50 backdrop-blur-md overflow-hidden shadow-2xl font-mono text-left text-xs sm:text-sm">
      {/* Top window control bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50 bg-white/[0.01]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="text-[10px] text-muted-foreground/40 ml-3">meareg@agent: ~</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 sm:p-5 min-h-[190px] space-y-2 text-muted-foreground/70 select-none">
        {typedLines.map((line, i) => (
          <div key={i} className={line.startsWith("npm") ? "text-foreground font-medium" : line.startsWith("Status") ? "text-emerald-400/80" : "text-muted-foreground/60"}>
            {line.startsWith("npm") ? "$ " : ""}{line}
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className={lines[currentLineIndex].startsWith("npm") ? "text-foreground font-medium" : "text-muted-foreground/60"}>
            {lines[currentLineIndex].startsWith("npm") ? "$ " : ""}
            {lines[currentLineIndex].slice(0, currentCharIndex)}
            <span className="inline-block w-1.5 h-3.5 bg-foreground/60 ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
