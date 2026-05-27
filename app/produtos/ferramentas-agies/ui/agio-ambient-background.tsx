import type { CSSProperties } from "react";

type AgioAmbientBackgroundProps = {
  variant: "hub" | "simulator";
};

const hubMarks = ["DAS", "LP", "SN", "RBT12", "CNAE", "%"];
const simulatorMarks = ["R$", "DAS", "IRPJ", "CSLL", "ISS", "Fator R"];
const markPositions = [
  { left: "9%", top: "14%" },
  { left: "27%", top: "44%" },
  { left: "45%", top: "20%" },
  { left: "61%", top: "60%" },
  { left: "76%", top: "32%" },
  { left: "86%", top: "72%" },
];

export default function AgioAmbientBackground({
  variant,
}: AgioAmbientBackgroundProps) {
  const marks = variant === "hub" ? hubMarks : simulatorMarks;

  return (
    <div
      aria-hidden="true"
      className={`agio-ambient agio-ambient--${variant} pointer-events-none fixed inset-0 z-0 overflow-hidden`}
    >
      <div className="agio-ambient__grid" />
      <div className="agio-ambient__beam agio-ambient__beam--one" />
      <div className="agio-ambient__beam agio-ambient__beam--two" />
      <div className="agio-ambient__ledger">
        {marks.map((mark, index) => (
          <span
            key={`${mark}-${index}`}
            className="agio-ambient__mark"
            style={
              {
                "--agio-mark-index": index,
                "--agio-mark-left": markPositions[index]?.left,
                "--agio-mark-top": markPositions[index]?.top,
              } as CSSProperties
            }
          >
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
}
