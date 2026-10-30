/* Original, hand-drawn SVG meme illustrations — no copyrighted assets.
   Each reads at small sizes and leans on the recognizable meme *pose/format*. */

type P = { className?: string; style?: React.CSSProperties };

/* "This is fine" dog — calm pup in a tiny hat */
export function DogFine({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="This is fine dog">
      <defs>
        <clipPath id="dogface">
          <circle cx="60" cy="66" r="38" />
        </clipPath>
      </defs>
      {/* ears */}
      <ellipse cx="26" cy="54" rx="13" ry="20" fill="#9c6b3b" transform="rotate(-20 26 54)" />
      <ellipse cx="94" cy="54" rx="13" ry="20" fill="#9c6b3b" transform="rotate(20 94 54)" />
      {/* head */}
      <circle cx="60" cy="66" r="38" fill="#d59a5c" />
      <g clipPath="url(#dogface)">
        <ellipse cx="60" cy="92" rx="30" ry="22" fill="#e9c08a" />
      </g>
      {/* snout */}
      <ellipse cx="60" cy="80" rx="15" ry="12" fill="#f3d6a8" />
      <ellipse cx="60" cy="74" rx="5" ry="3.5" fill="#3a2a1a" />
      {/* resigned dot eyes */}
      <circle cx="47" cy="62" r="3.4" fill="#2a1c0f" />
      <circle cx="73" cy="62" r="3.4" fill="#2a1c0f" />
      {/* flat content smile */}
      <path d="M50 84 Q60 90 70 84" stroke="#3a2a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* tiny party hat */}
      <path d="M60 10 L74 34 L46 34 Z" fill="#ffcf33" stroke="#0a0a0c" strokeWidth="2" />
      <circle cx="60" cy="10" r="3.5" fill="#ff5a14" />
    </svg>
  );
}

/* Stonks "meme man" — gray suited head + up arrow */
export function StonksMan({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Stonks">
      {/* up arrow */}
      <path d="M18 96 L54 60 L70 76 L104 38" stroke="#b6ff3c" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M104 38 L86 40 M104 38 L102 56" stroke="#b6ff3c" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* suit */}
      <path d="M30 118 Q30 92 60 92 Q90 92 90 118 Z" fill="#14161c" />
      <path d="M52 94 L60 110 L68 94 Z" fill="#fff" />
      <path d="M58 96 L60 112 L62 96 Z" fill="#c0392b" />
      {/* gray bald head */}
      <ellipse cx="60" cy="58" rx="26" ry="30" fill="#c2c6cd" />
      <ellipse cx="60" cy="52" rx="26" ry="24" fill="#cfd3da" />
      {/* blank staring features */}
      <ellipse cx="50" cy="54" rx="2.6" ry="3.4" fill="#2a2d33" />
      <ellipse cx="70" cy="54" rx="2.6" ry="3.4" fill="#2a2d33" />
      <path d="M60 56 L57 66 L63 66 Z" fill="#a9adb5" />
      <path d="M54 74 Q60 72 66 74" stroke="#8c9098" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* Drake-style reaction figure. mode="no" rejects, mode="yes" approves. */
export function DrakeGuy({ mode, className }: P & { mode: "no" | "yes" }) {
  const jacket = mode === "no" ? "#c0392b" : "#b6ff3c";
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={mode === "no" ? "reject" : "approve"}>
      {/* hood/jacket shoulders */}
      <path d="M18 120 Q22 84 60 84 Q98 84 102 120 Z" fill={jacket} />
      <path d="M44 86 Q60 100 76 86 L76 120 L44 120 Z" fill="#14161c" opacity="0.25" />
      {/* head */}
      <circle cx="60" cy="52" r="26" fill="#8d5a3c" />
      {/* hair */}
      <path d="M36 44 Q40 24 60 24 Q80 24 84 44 Q72 36 60 37 Q48 36 36 44 Z" fill="#241712" />
      {mode === "no" ? (
        <>
          {/* turned-away eyes + frown */}
          <path d="M46 50 q4 -3 8 0" stroke="#2a1c12" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M66 50 q4 -3 8 0" stroke="#2a1c12" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M50 66 Q60 60 70 66" stroke="#2a1c12" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* palm-out reject hand */}
          <g transform="translate(92 40) rotate(12)">
            <rect x="-10" y="-12" width="20" height="26" rx="9" fill="#8d5a3c" />
            <rect x="-10" y="-20" width="4.5" height="14" rx="2" fill="#8d5a3c" />
            <rect x="-4" y="-23" width="4.5" height="17" rx="2" fill="#8d5a3c" />
            <rect x="2" y="-22" width="4.5" height="16" rx="2" fill="#8d5a3c" />
            <rect x="8" y="-19" width="4.5" height="13" rx="2" fill="#8d5a3c" />
          </g>
        </>
      ) : (
        <>
          {/* happy eyes + smile */}
          <circle cx="51" cy="50" r="3" fill="#2a1c12" />
          <circle cx="69" cy="50" r="3" fill="#2a1c12" />
          <path d="M48 62 Q60 74 72 62" stroke="#2a1c12" strokeWidth="3.4" fill="none" strokeLinecap="round" />
          {/* pointing hand */}
          <g transform="translate(90 54)">
            <rect x="-10" y="-9" width="18" height="20" rx="8" fill="#8d5a3c" />
            <rect x="6" y="-4" width="20" height="7" rx="3.5" fill="#8d5a3c" />
          </g>
        </>
      )}
    </svg>
  );
}

/* Gigachad — stylized high-contrast chiseled bust */
export function GigaChad({ className }: P) {
  return (
    <svg viewBox="0 0 120 140" className={className} role="img" aria-label="Gigachad">
      {/* neck + shoulders */}
      <path d="M30 140 Q34 104 60 102 Q86 104 90 140 Z" fill="#2b2b2e" />
      <path d="M48 96 L48 112 Q60 120 72 112 L72 96 Z" fill="#3a3a3e" />
      {/* head: angular jaw */}
      <path d="M38 50 Q38 26 60 24 Q82 26 82 50 L80 72 Q74 96 60 100 Q46 96 40 72 Z" fill="#dcdce0" />
      {/* shadow half (dramatic lighting) */}
      <path d="M60 24 Q82 26 82 50 L80 72 Q74 96 60 100 Z" fill="#9a9aa0" opacity="0.55" />
      {/* hair */}
      <path d="M36 46 Q38 20 60 20 Q82 20 84 46 Q78 34 60 34 Q42 34 36 46 Z" fill="#1c1c1f" />
      {/* brow + eyes (narrowed, serious) */}
      <path d="M46 52 L56 54" stroke="#1c1c1f" strokeWidth="3" strokeLinecap="round" />
      <path d="M64 54 L74 52" stroke="#1c1c1f" strokeWidth="3" strokeLinecap="round" />
      <circle cx="51" cy="58" r="2.3" fill="#1c1c1f" />
      <circle cx="69" cy="58" r="2.3" fill="#1c1c1f" />
      {/* nose + straight mouth */}
      <path d="M60 58 L57 72 L63 72" stroke="#8a8a90" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 82 L70 82" stroke="#1c1c1f" strokeWidth="3.2" strokeLinecap="round" />
      {/* stubble */}
      <g fill="#6c6c72">
        {Array.from({ length: 22 }).map((_, i) => (
          <circle key={i} cx={46 + (i % 11) * 2.6} cy={88 + Math.floor(i / 11) * 4} r="0.9" />
        ))}
      </g>
    </svg>
  );
}

/* Expanding-brain lobe */
export function Brain({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} role="img" aria-label="brain">
      <path
        d="M58 18 Q40 14 34 30 Q20 32 22 48 Q10 56 20 70 Q16 86 34 90 Q40 104 58 100 L58 18 Z"
        fill="#f7a8c4"
        stroke="#d16a92"
        strokeWidth="2.5"
      />
      <path
        d="M62 18 Q80 14 86 30 Q100 32 98 48 Q110 56 100 70 Q104 86 86 90 Q80 104 62 100 L62 18 Z"
        fill="#f9b9d0"
        stroke="#d16a92"
        strokeWidth="2.5"
      />
      <g stroke="#d16a92" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M44 34 q8 6 0 12" />
        <path d="M34 54 q10 4 2 12" />
        <path d="M44 74 q8 4 2 10" />
        <path d="M76 34 q-8 6 0 12" />
        <path d="M86 54 q-10 4 -2 12" />
        <path d="M76 74 q-8 4 -2 10" />
      </g>
    </svg>
  );
}
