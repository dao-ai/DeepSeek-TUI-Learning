import Link from "next/link";
import type { Stage } from "@/data/stages";

const levelColors = [
  "",
  "text-accent-green border-accent-green/30",
  "text-accent border-accent/30",
  "text-accent-orange border-accent-orange/30",
  "text-accent-purple border-accent-purple/30",
  "text-accent-red border-accent-red/30",
];

export default function StageCard({ stage }: { stage: Stage }) {
  const colorClass = levelColors[stage.level] || levelColors[1];

  return (
    <Link
      href={`/stage/${stage.id}`}
      className="group block rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{stage.icon}</span>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${colorClass}`}
        >
          Lv.{stage.level}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-green transition-colors">
        {stage.title}
      </h3>
      <p className="text-xs text-text-muted mt-0.5">{stage.subtitle}</p>

      <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-2">
        {stage.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {stage.concepts.slice(0, 3).map((c) => (
          <span
            key={c}
            className="rounded-md bg-bg-tertiary px-2 py-0.5 text-xs text-text-muted"
          >
            {c}
          </span>
        ))}
        {stage.concepts.length > 3 && (
          <span className="rounded-md bg-bg-tertiary px-2 py-0.5 text-xs text-text-muted">
            +{stage.concepts.length - 3}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
        <span>{stage.exercises.length} 个练习</span>
        <span className="ml-auto">查看详情 →</span>
      </div>
    </Link>
  );
}
