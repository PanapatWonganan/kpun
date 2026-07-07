import ReviewCard from "@/components/ReviewCard";
import { REVIEWS_ALL } from "@/lib/content";

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-6 sm:py-[70px]">
      <div className="text-center">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">รีวิวจากผู้ใช้จริง</div>
        <h1 className="mx-auto mt-3 font-heading text-[28px] font-semibold text-ink sm:text-[38px]">
          ผู้หญิงที่กลับมามั่นใจอีกครั้ง
        </h1>
      </div>

      <div className="my-9 flex flex-wrap justify-center gap-8 sm:gap-10">
        <div className="text-center">
          <div className="font-display text-4xl font-bold text-pink">4.9</div>
          <div className="text-[15px] text-gold">★★★★★</div>
          <div className="mt-1.5 text-[13px] text-muted">จาก 2,140 รีวิว</div>
        </div>
        <div className="w-px bg-border-strong" />
        <div className="text-center">
          <div className="font-display text-4xl font-bold text-green-deep">
            94<span className="text-[22px]">%</span>
          </div>
          <div className="mt-1.5 text-[13px] text-muted">รู้สึกสมดุลดีขึ้นใน 1 เดือน</div>
        </div>
        <div className="w-px bg-border-strong" />
        <div className="text-center">
          <div className="font-display text-4xl font-bold text-green-deep">12k+</div>
          <div className="mt-1.5 text-[13px] text-muted">ลูกค้าที่ไว้วางใจ</div>
        </div>
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {REVIEWS_ALL.map((r) => (
          <div key={r.name} className="mb-5 break-inside-avoid">
            <ReviewCard review={r} />
          </div>
        ))}
      </div>
    </section>
  );
}
