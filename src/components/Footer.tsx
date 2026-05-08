export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm text-text-secondary">
              DeepSeek TUI 学习路径 &mdash; 从零到精通
            </p>
            <p className="mt-1 text-xs text-text-muted">
              基于 DeepSeek V4 · 版本 0.8.20
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>终端 AI 助手</span>
            <span className="text-border">|</span>
            <span>多阶段渐进式学习</span>
            <span className="text-border">|</span>
            <span>5 个阶段 · 21 个练习</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
