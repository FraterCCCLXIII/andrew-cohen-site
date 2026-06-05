"use client";

import type { ReactNode } from "react";
import ArchiveYearSlider from "@/components/ArchiveYearSlider";
import {
  archiveTypeLabels,
  archiveTypes,
  isYearFilterActive,
  type ArchiveType,
} from "@/data/archive";

export type ArchiveViewMode = "grid" | "list";

interface ArchiveSidebarProps {
  view: ArchiveViewMode;
  type: ArchiveType | "all";
  tag: string;
  tags: string[];
  counts: Record<ArchiveType, number>;
  total: number;
  yearMin: number;
  yearMax: number;
  yearBounds: { min: number; max: number };
  onViewChange: (view: ArchiveViewMode) => void;
  onTypeChange: (type: ArchiveType | "all") => void;
  onTagChange: (tag: string) => void;
  onYearMinChange: (year: number) => void;
  onYearMaxChange: (year: number) => void;
  onYearReset: () => void;
}

function NavButton({
  active,
  onClick,
  children,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors duration-200 ${
        active
          ? "bg-surface-elevated text-foreground font-medium"
          : "text-muted hover:bg-surface-elevated hover:text-foreground"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default function ArchiveSidebar({
  view,
  type,
  tag,
  tags,
  counts,
  total,
  yearMin,
  yearMax,
  yearBounds,
  onViewChange,
  onTypeChange,
  onTagChange,
  onYearMinChange,
  onYearMaxChange,
  onYearReset,
}: ArchiveSidebarProps) {
  const browseTags = tags.filter(
    (t) => !["video", "youtube", "book", "magazine"].includes(t)
  );
  const yearActive = isYearFilterActive(yearMin, yearMax, yearBounds);

  return (
    <nav
      aria-label="Archive filters"
      className="flex h-full min-h-0 flex-col border-b border-border pb-8 lg:border-b-0 lg:border-r lg:pr-8 lg:pb-0"
    >
      <div className="shrink-0">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          View
        </p>
        <div className="grid grid-cols-2 gap-1 rounded-md border border-border p-1">
          <NavButton
            active={view === "grid"}
            onClick={() => onViewChange("grid")}
            className="!px-2 !py-1.5 text-center font-mono text-xs"
          >
            Grid
          </NavButton>
          <NavButton
            active={view === "list"}
            onClick={() => onViewChange("list")}
            className="!px-2 !py-1.5 text-center font-mono text-xs"
          >
            List
          </NavButton>
        </div>
      </div>

      <div className="mt-8 shrink-0">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Browse
        </p>
        <ul className="space-y-0.5">
          <li>
            <NavButton active={type === "all"} onClick={() => onTypeChange("all")}>
              <span className="flex items-center justify-between gap-3">
                <span>All items</span>
                <span className="font-mono text-xs text-muted">{total}</span>
              </span>
            </NavButton>
          </li>
          {archiveTypes.map((archiveType) => (
            <li key={archiveType}>
              <NavButton
                active={type === archiveType}
                onClick={() => onTypeChange(archiveType)}
              >
                <span className="flex items-center justify-between gap-3">
                  <span>{archiveTypeLabels[archiveType]}</span>
                  <span className="font-mono text-xs text-muted">
                    {counts[archiveType]}
                  </span>
                </span>
              </NavButton>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 shrink-0">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Year
          </p>
          {yearActive && (
            <button
              type="button"
              onClick={onYearReset}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-foreground"
            >
              Reset
            </button>
          )}
        </div>
        <ArchiveYearSlider
          min={yearBounds.min}
          max={yearBounds.max}
          yearMin={yearMin}
          yearMax={yearMax}
          onYearMinChange={onYearMinChange}
          onYearMaxChange={onYearMaxChange}
        />
      </div>

      <div className="mt-8 flex min-h-0 flex-1 flex-col lg:overflow-hidden">
        <p className="mb-3 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Tags
        </p>
        <ul className="archive-scrollbar max-h-64 space-y-0.5 overflow-y-auto pr-2 lg:max-h-none lg:min-h-0 lg:flex-1">
          <li>
            <NavButton active={tag === "all"} onClick={() => onTagChange("all")}>
              All tags
            </NavButton>
          </li>
          {browseTags.map((browseTag) => (
            <li key={browseTag}>
              <NavButton
                active={tag === browseTag}
                onClick={() => onTagChange(browseTag)}
              >
                {browseTag}
              </NavButton>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
