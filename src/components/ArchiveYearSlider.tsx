"use client";

import { useState } from "react";

interface ArchiveYearSliderProps {
  min: number;
  max: number;
  yearMin: number;
  yearMax: number;
  onYearMinChange: (year: number) => void;
  onYearMaxChange: (year: number) => void;
}

function toPercent(value: number, min: number, max: number) {
  if (max === min) return 0;
  return ((value - min) / (max - min)) * 100;
}

export default function ArchiveYearSlider({
  min,
  max,
  yearMin,
  yearMax,
  onYearMinChange,
  onYearMaxChange,
}: ArchiveYearSliderProps) {
  const [activeThumb, setActiveThumb] = useState<"min" | "max">("max");

  const minPercent = toPercent(yearMin, min, max);
  const maxPercent = toPercent(yearMax, min, max);

  const handleMinChange = (value: number) => {
    onYearMinChange(Math.min(value, yearMax));
  };

  const handleMaxChange = (value: number) => {
    onYearMaxChange(Math.max(value, yearMin));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 font-mono text-xs text-foreground">
        <span>{yearMin}</span>
        <span className="text-muted">to</span>
        <span>{yearMax}</span>
      </div>

      <div className="archive-range-dual">
        <div className="archive-range-track" aria-hidden="true">
          <div
            className="archive-range-fill"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={yearMin}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          onPointerDown={() => setActiveThumb("min")}
          aria-label={`Start year ${yearMin}`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={yearMin}
          className="archive-range-thumb"
          style={{ zIndex: activeThumb === "min" ? 5 : 3 }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={yearMax}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          onPointerDown={() => setActiveThumb("max")}
          aria-label={`End year ${yearMax}`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={yearMax}
          className="archive-range-thumb"
          style={{ zIndex: activeThumb === "max" ? 5 : 4 }}
        />
      </div>
    </div>
  );
}
