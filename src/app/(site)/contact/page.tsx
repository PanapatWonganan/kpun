import { LINE_URL } from "@/lib/content";
import LineLogo from "@/components/LineLogo";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-4 py-14 sm:px-6 sm:py-16">
      <div className="mb-11 text-center">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">ติดต่อเรา</div>
        <h1 className="mx-auto mt-3 font-heading text-[28px] font-semibold text-ink sm:text-[38px]">
          พร้อมดูแลและตอบทุกคำถาม
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 rounded-[18px] border border-[#BEE9CE] bg-[#EAFBF0] p-5.5"
          >
            <div className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-line">
              <LineLogo className="h-7 w-7" variant="onGreen" />
            </div>
            <div>
              <div className="font-heading text-lg font-semibold text-ink">LINE Official</div>
              <div className="font-semibold text-green-soft">@nutralist</div>
              <div className="text-[12.5px] text-muted">ช่องทางที่เร็วที่สุด · ตอบทุกวัน 9:00–20:00</div>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-[18px] border border-border bg-white p-5.5">
            <div className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-tint text-[22px]">
              ✉️
            </div>
            <div>
              <div className="font-heading text-lg font-semibold text-ink">อีเมล</div>
              <div className="text-sm text-body">care@nutralist.co.th</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-[18px] border border-border bg-white p-5.5">
            <div className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-tint text-[22px]">
              📞
            </div>
            <div>
              <div className="font-heading text-lg font-semibold text-ink">โทร</div>
              <div className="text-sm text-body">02-000-0000 (จ.–ส. 9:00–18:00)</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_14px_40px_rgba(196,24,106,0.07)] sm:p-7">
          <div className="mb-4 font-heading text-lg font-semibold text-ink sm:text-xl">ส่งข้อความถึงเรา</div>
          <div className="flex flex-col gap-3">
            <input
              className="w-full rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none"
              placeholder="ชื่อของคุณ"
            />
            <input
              className="w-full rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none"
              placeholder="เบอร์โทร หรือ LINE ID"
            />
            <textarea
              className="w-full resize-y rounded-xl border border-border-strong px-4 py-3.5 text-[15px] outline-none"
              rows={4}
              placeholder="ข้อความ"
            />
            <button className="w-full rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-6 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(196,24,106,0.28)]">
              ส่งข้อความ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
