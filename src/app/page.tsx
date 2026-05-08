import { stages } from "@/data/stages";
import StageCard from "@/components/StageCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/5 px-4 py-1.5 text-sm text-accent-green mb-6">
          <span className="font-mono">deepseek tui</span>
          <span className="text-border">|</span>
          <span>v0.8.20</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          从零到精通
          <span className="block mt-3 bg-gradient-to-r from-accent-green via-accent to-accent-purple bg-clip-text text-transparent">
            DeepSeek TUI 学习路径
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
          5 个阶段，21 个实践练习，从基础读写到复杂工程。
          <br />
          每个阶段都有具体的操作指令——你只需要在终端里说出来。
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/stage/basic-interaction"
            className="rounded-lg bg-accent-green px-6 py-2.5 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-green/90"
          >
            开始学习
          </a>
          <a
            href="#stages"
            className="rounded-lg border border-border px-6 py-2.5 text-sm text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
          >
            浏览阶段
          </a>
        </div>
      </section>

      {/* Stage cards */}
      <section id="stages">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          学习阶段
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </section>

      {/* Feature highlights */}
      <section className="mt-20 border-t border-border pt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          为什么这样学？
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "由浅入深",
              desc: "从最简单的读文件开始，一步步走到跨项目重构。每个阶段在前一阶段基础上自然延伸。",
              icon: "📈",
            },
            {
              title: "动手实践",
              desc: "不是阅读文档，而是直接给 AI 发指令。每个练习都有一条你可以立即复制使用的提示语。",
              icon: "🛠️",
            },
            {
              title: "可见进度",
              desc: "每完成一个练习，你会看到 AI 如何分解任务、执行步骤、验证结果。所见即所学。",
              icon: "👁️",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-card-border bg-card-bg p-6 text-center"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-3 font-semibold text-text-primary">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <p className="text-text-muted text-sm mb-4">
          打开终端，输入 deepseek，开始你的学习之旅。
        </p>
        <div className="inline-block rounded-lg bg-code-bg border border-border px-6 py-3">
          <code className="text-accent-green text-sm font-mono">
            $ deepseek
          </code>
        </div>
      </section>
    </div>
  );
}
