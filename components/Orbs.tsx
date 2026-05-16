import type { CSSProperties } from "react";

type OrbStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--t": number;
};

type Orb = {
  readonly x: string;
  readonly y: string;
  readonly t: number;
};

const orbs: readonly Orb[] = [
  { x: "-54%", y: "-54%", t: 37 },
  { x: "-48%", y: "-53%", t: 58 },
  { x: "-46%", y: "-51%", t: 46 },
  { x: "-54%", y: "-46%", t: 72 },
  { x: "-56%", y: "-46%", t: 62 },
];

function createOrbStyle(orb: Orb): OrbStyle {
  return {
    "--x": orb.x,
    "--y": orb.y,
    "--t": orb.t,
    animation: `wobble calc(150ms * ${orb.t}) linear infinite`,
    filter: "hue-rotate(0deg)",
    transform: `translate(${orb.x}, ${orb.y}) rotate(0deg)`,
    transformOrigin: `calc(-1 * ${orb.y}) calc(-1 * ${orb.x})`,
  };
}

export function Orbs() {
  return (
    <div
      aria-hidden="true"
      className="fixed right-0 bottom-0 md:-right-15 md:-bottom-15 lg:-right-20 lg:-bottom-20 z-20 cursor-pointer select-none"
    >
      <style>{`
        @keyframes wobble {
          to {
            filter: hue-rotate(360deg);
            transform: translate(var(--x), var(--y)) rotate(360deg);
          }
        }
      `}</style>
      <div className="relative h-[35vmin] w-[35vmin] overflow-visible">
        {orbs.map((orb) => (
          <div
            key={`${orb.x}-${orb.y}-${orb.t}`}
            className="absolute left-1/2 top-1/2 flex h-[5em] w-[5em] items-center justify-center rounded-[90%_95%_85%_105%] mix-blend-screen"
            style={{
              ...createOrbStyle(orb),
              backgroundColor: "#ec4899",
              boxShadow: "0 0 .5em .2em #000 inset, 0 0 .15em 0 #fff",
            }}
          />
        ))}
      </div>
    </div>
  );
}
