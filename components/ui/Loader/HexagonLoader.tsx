interface HexagonLoaderProps {
  readonly className?: string
}

export function HexagonLoader({ className = "" }: HexagonLoaderProps) {
  const hexagonPath = "M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"

  return (
    <div
      className={[
        "relative flex h-32 w-32 items-center justify-center",
        className,
      ].join(" ")}
    >
      <style>{`
        @keyframes hexagon-draw {
          0% {
            stroke-dashoffset: 320;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes hexagon-text-show {
          0%, 80% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .hexagon-stroke {
          animation: hexagon-draw 2.4s ease-in-out forwards;
        }

        .hexagon-text {
          animation: hexagon-text-show 2.4s ease-in-out forwards;
        }
      `}</style>

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-24 w-24 overflow-visible"
      >
        <g>
          <path
            d={hexagonPath}
            stroke="#a78bfa"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.15"
          />
          <path
            d={hexagonPath}
            stroke="#a78bfa"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={320}
            strokeDasharray={320}
            strokeDashoffset={320}
            className="hexagon-stroke"
          />

          <text
            x="50"
            y="52"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#a78bfa"
            className="hexagon-text"
            style={{
              fontFamily: "system-ui, Calibre-Medium, Calibre, sans-serif",
              fontSize: "38px",
              fontWeight: 500,
              letterSpacing: "0.08em",
            }}
          >
            N
          </text>
        </g>
      </svg>
    </div>
  )
}
