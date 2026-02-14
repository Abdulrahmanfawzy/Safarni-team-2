import React, { useMemo, useState } from "react";
import Slider from "@mui/material/Slider";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

type Point = { x: number; y: number };

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

function makeFakeDistribution(min: number, max: number, points = 80): Point[] {
  const data: Point[] = [];
  const step = (max - min) / (points - 1);

  const peaks = [
    { mu: min + (max - min) * 0.35, s: (max - min) * 0.07, a: 0.7 },
    { mu: min + (max - min) * 0.52, s: (max - min) * 0.06, a: 1.2 },
    { mu: min + (max - min) * 0.63, s: (max - min) * 0.05, a: 0.9 },
    { mu: min + (max - min) * 0.76, s: (max - min) * 0.06, a: 0.6 },
  ];

  for (let i = 0; i < points; i++) {
    const x = min + step * i;
    const y =
      peaks.reduce((sum, p) => {
        const z = (x - p.mu) / p.s;
        return sum + p.a * Math.exp(-0.5 * z * z);
      }, 0) + 0.03;

    data.push({ x: Math.round(x), y });
  }

  return data;
}

export default function BudgetRange() {
  const MIN = 0;
  const MAX = 8500;

  const [range, setRange] = useState<[number, number]>([2500, 7000]);
  const chartData = useMemo(() => makeFakeDistribution(MIN, MAX), []);

  return (
    <div>
      <h3 className="text-[24px] font-semibold text-gray-800">Budget Range</h3>

      {/* container */}
      <div className="relative h-30 rounded-2xl mt-12">
        {/* wave background */}
        <div className="pointer-events-none absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 10, bottom: 38 }}
            >
              <XAxis dataKey="x" hide />
              <YAxis hide domain={[0, "dataMax"]} />
              <Area
                type="monotone"
                dataKey="y"
                stroke="#3B82F6"
                strokeWidth={3}
                fill="#93C5FD"
                fillOpacity={0.55}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* slider layer */}
        <div className="absolute bottom-4.5 left-3 right-3">
          <Slider
            value={range}
            min={MIN}
            max={MAX}
            disableSwap
            onChange={(_, v) => {
              const val = v as number[];
              setRange([clamp(val[0], MIN, MAX), clamp(val[1], MIN, MAX)]);
            }}
            sx={{
              "& .MuiSlider-rail": { opacity: 0.25, height: 4 },
              "& .MuiSlider-track": { height: 4 },
              "& .MuiSlider-thumb": {
                width: 22,
                height: 22,
              },
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-[30px] font-medium text-gray-500">Min</div>
          <div className="text-2xl font-semibold text-gray-900">
            ${range[0]}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-right">
          <div className="text-[30px] font-medium text-gray-500">Max</div>
          <div className="text-2xl font-semibold text-gray-900">
            ${range[1]}
          </div>
        </div>
      </div>
    </div>
  );
}
