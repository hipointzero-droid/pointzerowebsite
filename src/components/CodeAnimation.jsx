import React, { useState, useEffect, useRef } from "react";

const FloatingIcons = () => {
  const techIcons = [
    { name: "React", color: "#61DAFB", symbol: "R" },
    { name: "Node", color: "#68A063", symbol: "N" },
    { name: "Py", color: "#3776AB", symbol: "Py" },
    { name: "TS", color: "#3178C6", symbol: "TS" },
    { name: "AWS", color: "#FF9900", symbol: "A" },
    { name: "Go", color: "#00ADD8", symbol: "Go" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {techIcons.map((icon, index) => (
        <div
          key={icon.name}
          className="absolute animate-float"
          style={{
            left: `${10 + ((index * 15) % 75)}%`,
            top: `${5 + ((index * 18) % 65)}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${5 + index * 0.5}s`,
          }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xs font-semibold backdrop-blur-sm"
            style={{ backgroundColor: `${icon.color}15`, color: icon.color }}
          >
            {icon.symbol}
          </div>
        </div>
      ))}
    </div>
  );
};

const CodeEditor = ({ muted = false }) => {
  const [text, setText] = useState("");
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const codeContent = `const PointZero = {
 mission: "Digital Excellence",
 services: [
 "Web Development",
 "Mobile Apps",
 "Cloud Solutions"
 ],
 deliver: () => "Success"
};`;

  useEffect(() => {
    let currentIndex = 0;

    const startTyping = () => {
      currentIndex = 0;
      setText("");

      intervalRef.current = setInterval(() => {
        if (currentIndex <= codeContent.length) {
          setText(codeContent.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalRef.current);
          timeoutRef.current = setTimeout(() => {
            startTyping();
          }, 4000);
        }
      }, 50);
    };

    startTyping();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // VS Code Dark+–style tokens (same palette for hero + default)
  const getHighlightedCode = (code) => {
    const esc = (s) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return esc(code).replace(
      /(".*?")|\b(const|let|var|function|return)\b|\b(PointZero)\b|\b(mission|services|deliver)\b|(=>)|([[\]{};,:()])/g,
      (match, str, keyword, binding, property, arrow, punct) => {
        if (str) {
          return `<span class="text-[#CE9178]">${str}</span>`;
        }
        if (keyword) {
          return `<span class="text-[#C586C0]">${keyword}</span>`;
        }
        if (binding) {
          return `<span class="text-[#4EC9B0]">${binding}</span>`;
        }
        if (property) {
          return `<span class="text-[#9CDCFE]">${property}</span>`;
        }
        if (arrow) {
          return `<span class="text-[#C586C0]">${arrow}</span>`;
        }
        if (punct) {
          return `<span class="text-neutral-500">${punct}</span>`;
        }
        return match;
      },
    );
  };

  return (
    <div className="relative">
      <div
        className={`overflow-hidden border border-white/10 bg-black ${
          muted ? "rounded-xl" : "rounded-2xl shadow-2xl"
        }`}
      >
        <div
          className={`relative flex items-center border-b border-white/10 px-4 py-3 ${
            muted ? "bg-white/[0.02]" : "bg-gray-800/50"
          }`}
        >
          <div className="flex gap-2">
            {muted ? (
              <>
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </>
            ) : (
              <>
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </>
            )}
          </div>
          <span className="pointer-events-none absolute inset-x-0 text-center font-mono text-sm text-neutral-500">
            pointzero.js
          </span>
        </div>

        <div className="min-h-[280px] p-5 font-mono text-sm leading-loose sm:min-h-[300px] sm:p-6">
          <div className="flex">
            <div className="mr-4 select-none border-r border-white/10 pr-4 text-neutral-600">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="leading-loose">
                  {num}
                </div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden">
              <pre className="whitespace-pre-wrap text-[#D4D4D4]">
                <code
                  dangerouslySetInnerHTML={{ __html: getHighlightedCode(text) }}
                />
                <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse align-middle bg-[#AEAFAD]" />
              </pre>
            </div>
          </div>
        </div>
      </div>

      {!muted && (
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand/5 blur-2xl" />
      )}
    </div>
  );
};

const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const currentLineRef = useRef(0);

  const terminalCommands = [
    { text: "$ npm run build", style: "text-neutral-300" },
    { text: "✓ Compiled successfully", style: "text-green-400" },
    { text: "$ npm run deploy", style: "text-neutral-300" },
    { text: "🚀 Deploying to production...", style: "text-brand" },
    { text: "✓ Deployed successfully!", style: "text-green-400" },
  ];

  useEffect(() => {
    const startAnimation = () => {
      currentLineRef.current = 0;
      setVisibleLines([]);

      intervalRef.current = setInterval(() => {
        const lineIndex = currentLineRef.current;
        if (lineIndex < terminalCommands.length) {
          setVisibleLines((prev) => [...prev, terminalCommands[lineIndex]]);
          currentLineRef.current = lineIndex + 1;
        } else {
          clearInterval(intervalRef.current);
          timeoutRef.current = setTimeout(() => {
            startAnimation();
          }, 3000);
        }
      }, 1000);
    };

    startAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="absolute -bottom-6 -right-6 w-56 overflow-hidden rounded-xl border border-white/10 bg-gray-900/95 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-gray-800/50 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <span className="font-mono text-xs text-neutral-500">terminal</span>
      </div>
      <div className="min-h-[90px] p-3 font-mono text-xs">
        {visibleLines.map((line, index) => (
          <div key={index} className={line.style}>
            {line.text}
          </div>
        ))}
        <span className="inline-block h-3 w-1.5 animate-pulse bg-green-400" />
      </div>
    </div>
  );
};

/** @param {{ variant?: 'default' | 'hero' }} props */
export default function CodeAnimation({ variant = "default" }) {
  const muted = variant === "hero";

  // Hero: clean editor only — no floating tech icons, terminal sticker, or glow
  if (muted) {
    return (
      <div className="relative w-full max-w-lg">
        <CodeEditor muted />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center py-8">
      <FloatingIcons />
      <div className="relative w-full max-w-lg">
        <CodeEditor />
        <Terminal />
      </div>
    </div>
  );
}
