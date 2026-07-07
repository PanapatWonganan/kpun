/**
 * Simple, crisp LINE badge: a rounded square with the "LINE" wordmark.
 * Uses real text (not hand-drawn paths) so it always reads cleanly.
 *
 * variant="onGreen"  -> white badge + green text (for use on the green button)
 * variant="onLight"  -> green badge + white text (for use on light surfaces)
 */
export default function LineLogo({
  className = "",
  variant = "onGreen",
}: {
  className?: string;
  variant?: "onGreen" | "onLight";
}) {
  const badge = variant === "onGreen" ? "#ffffff" : "#06C755";
  const text = variant === "onGreen" ? "#06C755" : "#ffffff";

  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="LINE">
      <rect x="1" y="1" width="46" height="46" rx="13" fill={badge} />
      <text
        x="24"
        y="25"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="15"
        fontWeight="800"
        letterSpacing="0.5"
        fill={text}
      >
        LINE
      </text>
    </svg>
  );
}
