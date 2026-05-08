"use client";

import { useState } from "react";

interface CommandDemoProps {
  prompt: string;
  goal: string;
}

export default function CommandDemo({ prompt, goal }: CommandDemoProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-card-border bg-code-bg overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-bg-tertiary/50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-accent-red/70" />
          <span className="w-3 h-3 rounded-full bg-accent-orange/70" />
          <span className="w-3 h-3 rounded-full bg-accent-green/70" />
        </div>
        <span className="ml-3 font-mono text-xs text-text-muted">
          deepseek ~ {goal}
        </span>
        <button
          onClick={copy}
          className="ml-auto rounded-md px-2 py-0.5 text-xs text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors"
        >
          {copied ? "已复制 ✓" : "复制"}
        </button>
      </div>

      {/* Prompt content */}
      <div className="px-4 py-4">
        <div className="flex gap-3">
          <span className="font-mono text-sm text-accent-green select-none shrink-0 mt-0.5">
            $
          </span>
          <code className="text-sm text-text-primary leading-relaxed">
            {prompt}
          </code>
        </div>
      </div>

      {/* Hint */}
      <div className="px-4 py-2.5 bg-bg-tertiary/30 border-t border-border/30">
        <div className="flex gap-2 items-start">
          <span className="text-xs text-accent-orange shrink-0 mt-px">💡</span>
          <p className="text-xs text-text-muted leading-relaxed">
            试试把这段话发给 DeepSeek TUI，观察 AI 如何响应。
          </p>
        </div>
      </div>
    </div>
  );
}
