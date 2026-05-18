"use client";

import { useState } from "react";
import { Binary, ChevronRight, FileText, Layers3 } from "lucide-react";
import type { SimulationMode } from "../data";

const modeIcons = {
  cnae: Layers3,
  "simples-anexo": Binary,
  lp: FileText,
} as const;

export default function SimulatorModePicker({
  modes,
}: {
  modes: SimulationMode[];
}) {
  const [selectedMode, setSelectedMode] =
    useState<SimulationMode["id"]>("cnae");

  const activeMode =
    modes.find((mode) => mode.id === selectedMode) ?? modes[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
          Simular por
        </p>

        <div className="mt-6 grid gap-3">
          {modes.map((mode) => {
            const Icon = modeIcons[mode.id];
            const isActive = mode.id === activeMode.id;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setSelectedMode(mode.id)}
                className={`rounded-3xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-cyan-300/35 bg-cyan-300/10 text-white shadow-[0_16px_40px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                      isActive
                        ? "bg-cyan-200/18 text-cyan-100"
                        : "bg-slate-900/60 text-slate-200"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-semibold">{mode.title}</p>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isActive ? "translate-x-1 text-cyan-100" : "text-slate-500"
                        }`}
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {mode.summary}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-orange-200">
              Fluxo atual
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              {activeMode.title}
            </h2>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-200">
            Etapa 1 pronta
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
          {activeMode.summary}
        </p>

        <div className="mt-8 rounded-3xl border border-white/8 bg-slate-950/55 p-5">
          <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
            Próximos dados de entrada
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {activeMode.nextInputs.map((input) => (
              <span
                key={input}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
              >
                {input}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-cyan-300/12 bg-cyan-300/6 p-5">
          <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-100/85">
            Base de migração
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-200">
            {activeMode.source}
          </p>
        </div>
      </div>
    </div>
  );
}
