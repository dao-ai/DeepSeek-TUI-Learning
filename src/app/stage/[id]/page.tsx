import { notFound } from "next/navigation";
import Link from "next/link";
import { getStageById, stages } from "@/data/stages";
import CommandDemo from "@/components/CommandDemo";
import ProgressBar from "@/components/ProgressBar";

const levelGradients = [
  "",
  "from-accent-green/20 to-accent-green/5",
  "from-accent/20 to-accent/5",
  "from-accent-orange/20 to-accent-orange/5",
  "from-accent-purple/20 to-accent-purple/5",
  "from-accent-red/20 to-accent-red/5",
];

const levelBorders = [
  "",
  "border-accent-green/30",
  "border-accent/30",
  "border-accent-orange/30",
  "border-accent-purple/30",
  "border-accent-red/30",
];

export function generateStaticParams() {
  return stages.map((s) => ({ id: s.id }));
}

export default async function StagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stage = getStageById(id);

  if (!stage) notFound();

  const borderClass = levelBorders[stage.level] || levelBorders[1];
  const gradientClass = levelGradients[stage.level] || levelGradients[1];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Breadcrumb + Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <Link
          href="/"
          className="text-sm text-text-muted hover:text-text-secondary transition-colors"
        >
          ← 返回首页
        </Link>
        <ProgressBar currentId={stage.id} />
      </div>

      {/* Stage header */}
      <div
        className={`rounded-2xl border ${borderClass} bg-gradient-to-br ${gradientClass} p-8 mb-10`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{stage.icon}</span>
          <div>
            <span className="text-xs text-text-muted font-mono">
              {stage.subtitle}
            </span>
            <h1 className="text-2xl font-bold text-text-primary">
              {stage.title}
            </h1>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed max-w-2xl">
          {stage.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stage.concepts.map((c) => (
            <span
              key={c}
              className="rounded-md bg-bg-primary/60 px-2.5 py-1 text-xs text-text-secondary border border-border/50"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Exercises */}
      <div>
        <h2 className="text-xl font-semibold mb-6">
          练习 ({stage.exercises.length})
        </h2>
        <div className="space-y-8">
          {stage.exercises.map((ex, idx) => (
            <section key={idx}>
              <div className="flex items-start gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-green/10 text-accent-green font-mono text-xs font-medium shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {ex.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-0.5">
                    目标：{ex.goal}
                  </p>
                </div>
              </div>

              <CommandDemo prompt={ex.prompt} goal={ex.goal} />

              {ex.tip && (
                <div className="mt-3 flex gap-2 rounded-lg bg-accent-orange/5 border border-accent-orange/20 px-4 py-2.5">
                  <span className="text-xs shrink-0 mt-px">💡</span>
                  <p className="text-xs text-accent-orange/80 leading-relaxed">
                    {ex.tip}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
        {stage.prevStage ? (
          <Link
            href={`/stage/${stage.prevStage}`}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            ←{" "}
            {getStageById(stage.prevStage)?.title ?? stage.prevStage}
          </Link>
        ) : (
          <div />
        )}
        {stage.nextStage ? (
          <Link
            href={`/stage/${stage.nextStage}`}
            className="flex items-center gap-2 rounded-lg bg-accent-green px-5 py-2.5 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-green/90"
          >
            下一阶段：{getStageById(stage.nextStage)?.title ?? stage.nextStage}
            {" →"}
          </Link>
        ) : (
          <Link
            href="/"
            className="rounded-lg border border-accent-green/30 px-5 py-2.5 text-sm text-accent-green transition-colors hover:bg-accent-green/10"
          >
            🎉 完成全部阶段 → 返回首页
          </Link>
        )}
      </div>
    </div>
  );
}
