import { LINE_URL } from "@/lib/content";

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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.55 7.39 8.35 8.03.32.07.77.21.88.49.1.25.06.64.03.9l-.14.85c-.04.25-.2.98.86.53s5.72-3.37 7.8-5.77C21.13 13.4 22 11.86 22 10.13 22 5.64 17.52 2 12 2z"></path>
      </svg>
      {label}
    </a>
  );
}
