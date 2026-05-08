import Link from "next/link";
import { stages } from "@/data/stages";

export default function ProgressBar({
  currentId,
}: {
  currentId: string;
}) {
  const currentIdx = stages.findIndex((s) => s.id === currentId);

  return (
    <div className="flex items-center gap-1.5">
      {stages.map((stage, idx) => {
        const isActive = stage.id === currentId;
        const isPassed = idx < currentIdx;
        return (
          <Link
            key={stage.id}
            href={`/stage/${stage.id}`}
            className="group flex items-center gap-1.5"
            title={stage.title}
          >
            {/* Connector line (except first) */}
            {idx > 0 && (
              <div
                className={`w-6 h-px ${
                  isPassed ? "bg-accent-green" : "bg-border"
                }`}
              />
            )}
            {/* Dot */}
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono font-medium transition-all ${
                isActive
                  ? "bg-accent-green text-bg-primary shadow-lg shadow-accent-green/20 scale-110"
                  : isPassed
                  ? "bg-accent-green/20 text-accent-green border border-accent-green/40"
                  : "bg-bg-tertiary text-text-muted border border-border"
              }`}
            >
              {isPassed ? "✓" : stage.level}
            </div>
            {/* Label (only for active) */}
            {isActive && (
              <span className="text-xs text-accent-green font-medium ml-0.5 hidden sm:inline">
                {stage.title}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
