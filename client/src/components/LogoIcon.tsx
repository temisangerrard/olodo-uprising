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
      <circle cx="16" cy="16" r="10" stroke="oklch(0.78 0.16 75)" strokeWidth="1.5" opacity="0.6" />
      {/* Inner ring */}
      <circle cx="16" cy="16" r="6" stroke="oklch(0.78 0.16 75)" strokeWidth="1.5" opacity="0.8" />
      {/* Core dot */}
      <circle cx="16" cy="16" r="2.5" fill="oklch(0.78 0.16 75)" />
      {/* Crosshair lines */}
      <line x1="16" y1="2" x2="16" y2="8" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.3" />
      <line x1="16" y1="24" x2="16" y2="30" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.3" />
      <line x1="2" y1="16" x2="8" y2="16" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.3" />
      <line x1="24" y1="16" x2="30" y2="16" stroke="oklch(0.78 0.16 75)" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
