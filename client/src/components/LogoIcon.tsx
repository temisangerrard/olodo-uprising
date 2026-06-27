/**
 * LogoIcon — Concentric data rings (the "eye" of observation)
 * Rendered as inline SVG for zero-dependency open-source use.
 */
export default function LogoIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring */}
      <circle cx="16" cy="16" r="14" stroke="oklch(0.78 0.16 75)" strokeWidth="1.5" opacity="0.4" />
      {/* Middle ring */}
      <circle cx="16" cy="16" r="10" stroke="oklch(0.78 0.16 75)" strokeWidth="1.5" opacity="0.65" />
      {/* Inner ring */}
      <circle cx="16" cy="16" r="6" stroke="oklch(0.78 0.16 75)" strokeWidth="1.5" opacity="0.9" />
      {/* Core dot */}
      <circle cx="16" cy="16" r="2.5" fill="oklch(0.78 0.16 75)" />
      {/* Data tick marks */}
      <line x1="16" y1="1" x2="16" y2="4" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="28" x2="16" y2="31" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.5" />
      <line x1="1" y1="16" x2="4" y2="16" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.5" />
      <line x1="28" y1="16" x2="31" y2="16" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
