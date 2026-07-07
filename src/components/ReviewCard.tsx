export type Review = {
  initial: string;
  name: string;
  tag: string;
  text: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_rgba(196,24,106,0.06)]">
      <div className="tracking-[2px] text-gold">★★★★★</div>
      <p className="my-3 text-[14.5px] leading-relaxed text-ink-soft">{review.text}</p>
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-pink-glow to-pink-pale font-bold text-pink-deep">
          {review.initial}
        </div>
        <div>
          <div className="text-[13.5px] font-semibold text-ink">{review.name}</div>
          <div className="text-xs text-muted-soft">{review.tag}</div>
        </div>
      </div>
    </div>
  );
}
