"use client";

import { CITIES } from "@/data/cities";

/**
 * Simple dropdown to select from available cities
 * Changes weather immediately when a city is selected
 */

interface LocationSearchProps {
  onCitySelect: (cityName: string) => void;
}

import { useState } from "react";

type Props = {
  onCitySelect: (city: string) => void;
  cities?: string[]; // optional—keep your existing list if you have one
};

export default function LocationSearch({ onCitySelect, cities }: Props) {
  const [value, setValue] = useState("");

  const cityOptions =
    cities ??
    ["Durham", "Raleigh", "Chapel Hill", "Charlotte", "New York", "San Francisco", "Chicago"];

  return (
    <div className="w-full max-w-lg mx-auto px-6">
      <label className="sr-only" htmlFor="city-select">
        Select a city
      </label>

      <div className="relative">
        <select
          id="city-select"
          value={value}
          onChange={(e) => {
            const v = e.target.value;
            setValue(v);
            if (v) onCitySelect(v);
          }}
          className="
            w-full appearance-none rounded-2xl bg-white/5 border border-white/10
            px-4 py-3 pr-12 text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,.06)]
            outline-none backdrop-blur-md
            focus:ring-2 focus:ring-fuchsia-400/40 focus:border-fuchsia-400/40
            hover:bg-white/[0.08] transition
          "
        >
          <option value="">{value ? "Change city…" : "Select a city…"}</option>
          {cityOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Custom caret */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300/80"
        >
          ▾
        </span>
      </div>

      {/* Helper text (optional) */}
      <p className="mt-2 text-sm text-zinc-400 text-center">
        Start by choosing a city to see the latest weather.
      </p>
    </div>
  );
}

