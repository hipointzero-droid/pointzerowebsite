import React, { useState, useEffect, useRef } from 'react';

// Floating tech icons component
const FloatingIcons = () => {
  const techIcons = [
    { name: 'React', color: '#61DAFB', symbol: 'R' },
    { name: 'Node', color: '#68A063', symbol: 'N' },
    { name: 'Py', color: '#3776AB', symbol: 'Py' },
    { name: 'TS', color: '#3178C6', symbol: 'TS' },
    { name: 'AWS', color: '#FF9900', symbol: 'A' },
    { name: 'Go', color: '#00ADD8', symbol: 'Go' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((icon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${10 + (index * 15) % 75}%`,
            top: `${5 + (index * 18) % 65}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${5 + index * 0.5}s`,
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs backdrop-blur-sm border border-white/10 shadow-lg transition-transform hover:scale-110"
            style={{ backgroundColor: `${icon.color}15`, color: icon.color }}
          >
            {icon.symbol}
          </div>
        </div>
      ))}
    </div>
  );
};

// Code editor component with typing animation
const CodeEditor = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
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
      setIsTyping(true);
      currentIndex = 0;
      setText('');

      intervalRef.current = setInterval(() => {
        if (currentIndex <= codeContent.length) {
          setText(codeContent.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalRef.current);
          setIsTyping(false);
          // Reset after delay
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

  // Single-pass tokenizer: chained .replace() calls would re-match the
  // class names and quotes inside already-injected <span> markup and render
  // raw HTML as visible text.
  const getHighlightedCode = (code) => {
    return code.replace(
      /(".*?")|\b(const|let|var|function|return)\b|\b(PointZero|mission|services|deliver)\b|(=>|[[\]{};,:()])/g,
      (match, str, keyword, identifier) => {
        if (str) return `<span class="text-green-400">${str}</span>`;
        if (keyword) return `<span class="text-purple-400">${keyword}</span>`;
        if (identifier) return `<span class="text-cyan-400">${identifier}</span>`;
        return `<span class="text-gray-500">${match}</span>`;
      },
    );
  };

  return (
    <div className="relative">
      {/* Editor window */}
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="ml-4 text-gray-500 text-sm font-mono">pointzero.js</span>
        </div>

        {/* Code area */}
        <div className="p-6 font-mono text-sm leading-loose min-h-[300px]">
          <div className="flex">
            {/* Line numbers */}
            <div className="pr-4 text-gray-600 select-none border-r border-white/5 mr-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="leading-loose">{num}</div>
              ))}
            </div>

            {/* Code content */}
            <div className="flex-1 overflow-hidden">
              <pre className="whitespace-pre-wrap text-white">
                <code className="text-white" dangerouslySetInnerHTML={{ __html: getHighlightedCode(text) }} />
                <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse ml-0.5 align-middle"></span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10"></div>
    </div>
  );
};

// Terminal component
const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const currentLineRef = useRef(0);

  const terminalCommands = [
    { text: '$ npm run build', style: 'text-gray-300' },
    { text: '✓ Compiled successfully', style: 'text-green-400' },
    { text: '$ npm run deploy', style: 'text-gray-300' },
    { text: '🚀 Deploying to production...', style: 'text-cyan-400' },
    { text: '✓ Deployed successfully!', style: 'text-green-400' },
  ];

  useEffect(() => {
    const startAnimation = () => {
      currentLineRef.current = 0;
      setVisibleLines([]);

      intervalRef.current = setInterval(() => {
        const lineIndex = currentLineRef.current;
        if (lineIndex < terminalCommands.length) {
          const command = terminalCommands[lineIndex];
          setVisibleLines((prev) => [...prev, command]);
          currentLineRef.current = lineIndex + 1;
        } else {
          clearInterval(intervalRef.current);
          // Reset after delay
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
    <div className="absolute -bottom-6 -right-6 w-56 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border-b border-white/5">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-gray-500 text-xs font-mono">terminal</span>
      </div>
      <div className="p-3 font-mono text-xs min-h-[90px]">
        {visibleLines.map((line, index) => (
          <div key={index} className={line.style}>
            {line.text}
          </div>
        ))}
        <span className="inline-block w-1.5 h-3 bg-green-400 animate-pulse"></span>
      </div>
    </div>
  );
};

// Main export component
export default function CodeAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center py-8">
      <FloatingIcons />
      <div className="relative max-w-lg w-full">
        <CodeEditor />
        <Terminal />
      </div>
    </div>
  );
}
