// MH monogram used by the favicon and the iOS icon
export function logo(size: number, rounded = true) {
  const inset = rounded ? 1 : 0;

  return (
    <div style={{ display: "flex", width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dde9fb" />
            <stop offset="1" stopColor="#d9f8e6" />
          </linearGradient>
        </defs>
        <rect
          x={inset}
          y={inset}
          width={64 - inset * 2}
          height={64 - inset * 2}
          rx={rounded ? 15 : 0}
          fill="url(#g)"
          stroke={rounded ? "#000000" : "none"}
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        <g
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 46V18L21 33L29 18V46" />
          <path d="M39 18V46M51 18V46M39 32H51" />
        </g>
      </svg>
    </div>
  );
}
