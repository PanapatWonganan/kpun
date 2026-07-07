import { LINE_URL } from "@/lib/content";
import LineLogo from "@/components/LineLogo";

export default function LineButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener"
      className={
        className ||
        "inline-flex items-center gap-2 rounded-xl bg-line px-4 py-2.5 text-sm font-semibold text-white hover:text-white"
      }
    >
      <LineLogo className="h-[1.15em] w-[1.15em]" variant="onGreen" />
      {label}
    </a>
  );
}
