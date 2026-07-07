import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";
import CountdownTimer from "@/components/CountdownTimer";
import { LINE_URL } from "@/lib/content";
import {
  SALE_HERO_TICKS,
  SALE_PAINS,
  STRAINS,
  SALE_MECHANISM,
  SALE_EVIDENCE,
  SALE_BEFORE,
  SALE_AFTER,
  SALE_REVIEWS,
  SALE_BUNDLES,
  SALE_FAQS,
} from "@/lib/content";

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.55 7.39 8.35 8.03.32.07.77.21.88.49.1.25.06.64.03.9l-.14.85c-.04.25-.2.98.86.53s5.72-3.37 7.8-5.77C21.13 13.4 22 11.86 22 10.13 22 5.64 17.52 2 12 2z"></path>
    </svg>
  );
}

export default function SalePage() {
  return (
    <div className="page">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 bg-dark px-4 py-2.5 text-center text-sm font-medium text-white">
        <span>⏳ โปรพิเศษหมดใน</span>
        <CountdownTimer className="rounded-lg bg-pink px-3 py-1 font-heading font-bold tracking-[1px] [font-variant-numeric:tabular-nums]" />
        <span className="opacity-80">· ราคาพิเศษ + ส่งฟรี เฉพาะวันนี้</span>
      </div>

      {/* Hero */}
      <section className="relative bg-[radial-gradient(1100px_560px_at_80%_-8%,#FBE0EE_0%,rgba(251,224,238,0)_60%),linear-gradient(180deg,#FFF7FB,#FDEBF3)]">
        <div className="mx-auto max-w-[1080px] px-4 py-12 text-center sm:px-6 sm:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-3.5 py-1.5 text-[13px] font-semibold text-pink-deep shadow-[0_6px_18px_rgba(196,24,106,0.08)]">
            สำหรับผู้หญิงที่เป็นๆ หายๆ ไม่จบสักที
          </div>
          <h1 className="mx-auto mt-5 max-w-[820px] font-heading text-[30px] font-bold leading-tight tracking-tight text-ink sm:text-[38px] lg:text-[46px]">
            หยุดวงจร <span className="text-pink">&ldquo;รักษาแล้วกลับมาเป็นซ้ำ&rdquo;</span>
            <br />
            ด้วยการฟื้นฟูสมดุลจากภายใน
          </h1>
          <p className="mx-auto mt-4.5 max-w-[660px] text-[17px] leading-relaxed text-body sm:text-lg">
            โพรไบโอติก 2 สายพันธุ์ที่ศึกษาทางคลินิก 10,000 ล้าน CFU ช่วยสร้าง Lactobacillus กลับคืน
            รักษาค่า pH และเสริมเกราะป้องกันตามธรรมชาติของผู้หญิง
          </p>

          <div className="relative mx-auto mt-7 max-w-[440px]">
            <div className="absolute -inset-x-[12%] -inset-y-[4%] rounded-full bg-[radial-gradient(circle_at_50%_45%,#F9C9DE,rgba(249,201,222,0)_68%)] blur-[6px]" />
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border-[6px] border-white bg-pink-glow shadow-[0_26px_60px_rgba(196,24,106,0.20)]">
              <Image
                src="/uploads/S__169525253_0.jpg"
                alt="Nutralist Probio Pro Plus+"
                fill
                priority
                className="object-cover"
                sizes="440px"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href="#offer"
              className="animate-pulse-cta inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-8 py-4 text-base font-bold text-white sm:px-9"
            >
              🛒 ดูแพ็กเกจสุดคุ้ม
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-line px-7 py-4 text-base font-semibold text-white"
            >
              <LineIcon />
              สั่งซื้อทางไลน์
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-5.5">
            {SALE_HERO_TICKS.map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[13.5px] font-medium text-body">
                <span className="text-green-soft">✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain checklist */}
      <section className="mx-auto max-w-[820px] px-4 py-14 sm:px-6 sm:py-[70px]">
        <h2 className="text-center font-heading text-[24px] font-bold leading-snug text-ink sm:text-[34px]">
          คุณกำลังเจอ<span className="text-pink">ปัญหาเหล่านี้</span>อยู่หรือเปล่า?
        </h2>
        <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {SALE_PAINS.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-2xl border border-border-soft bg-white px-5 py-4.5">
              <span className="flex h-6.5 w-6.5 flex-none items-center justify-center rounded-full bg-tint text-[15px] font-bold text-pink">
                ✓
              </span>
              <span className="text-[15.5px] leading-snug text-ink-soft">{p}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[600px] text-center text-[17px] leading-relaxed text-body">
          ถ้าคุณพยักหน้าแม้เพียงข้อเดียว — ปัญหาไม่ได้อยู่ที่คุณดูแลตัวเองไม่ดีพอ แต่อยู่ที่{" "}
          <b>สมดุลจุลินทรีย์ที่ยังไม่ถูกฟื้นฟู</b>
        </p>
      </section>

      {/* Agitate: cycle */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1080px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
          <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">ต้นเหตุที่แท้จริง</div>
          <h2 className="mx-auto mt-3 max-w-[680px] font-heading text-[26px] font-bold leading-snug text-ink sm:text-[32px]">
            ทำไม &ldquo;รักษาหาย&rdquo; แล้วยังกลับมาเป็นซ้ำ
          </h2>
          <p className="mx-auto mb-9 mt-4 max-w-[640px] text-[17px] leading-relaxed text-body">
            ยาปฏิชีวนะกำจัดเชื้อได้ชั่วคราว แต่ทำลายจุลินทรีย์ดีไปด้วย เมื่อสมดุลไม่ถูกฟื้นฟู วงจรจึงวนกลับมา
          </p>
          <div className="relative w-full overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(196,24,106,0.16)]">
            <Image
              src="/assets/recurrence-cycle.jpg"
              alt="วงจรการกลับมาเป็นซ้ำ"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Solution reveal */}
      <section className="mx-auto max-w-[1080px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">ทางออกที่ใช่</div>
        <h2 className="mx-auto mt-3 max-w-[760px] font-heading text-[26px] font-bold leading-snug text-ink sm:text-[38px]">
          พบกับ <span className="text-pink">Nutralist Probio Pro Plus+</span>
          <br />
          โพรไบโอติกที่ออกแบบมาเพื่อผู้หญิงโดยเฉพาะ
        </h2>
        <p className="mx-auto mb-10 mt-4 max-w-[640px] text-[17px] leading-relaxed text-body">
          ไม่ใช่โพรไบโอติกลำไส้ทั่วไป แต่คัดสายพันธุ์ที่ศึกษาเพื่อสุขภาพจุดซ่อนเร้น ทำงานผ่านแกนลำไส้–ช่องคลอด
        </p>
        <div className="grid grid-cols-1 gap-5.5 text-left lg:grid-cols-2">
          {STRAINS.map((s) => (
            <div key={s.code} className="rounded-[22px] border border-border bg-white p-7 shadow-[0_14px_40px_rgba(196,24,106,0.08)] sm:p-8">
              <div className="text-[12.5px] font-bold tracking-[.5px] text-pink">{s.code}</div>
              <div className="mt-1 font-heading text-[21px] font-semibold text-ink">{s.name}</div>
              <div className="mt-2 text-[14.5px] leading-relaxed text-body-soft">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1080px] px-4 py-14 sm:px-6 sm:py-[70px]">
        <h2 className="mb-10 text-center font-heading text-[24px] font-bold text-ink sm:text-[30px]">
          ตัดวงจรได้ใน 3 กลไก
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SALE_MECHANISM.map((m) => (
            <div key={m.n} className="rounded-[20px] bg-tint p-7 text-center">
              <div className="font-display text-4xl font-bold leading-none text-pink-pale">{m.n}</div>
              <div className="mt-1.5 font-heading text-lg font-semibold text-ink">{m.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-body-soft">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ingredients & research */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1080px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
          <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">ส่วนผสม &amp; งานวิจัย</div>
          <h2 className="mx-auto mt-3 max-w-[680px] font-heading text-[26px] font-bold leading-snug text-ink sm:text-[32px]">
            มีหลักฐาน ไม่ใช่แค่คำโฆษณา
          </h2>
          <div className="relative mb-7 mt-7 w-full overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(196,24,106,0.16)]">
            <Image
              src="/assets/ingredients-conclusion.jpg"
              alt="ส่วนผสมและงานวิจัย"
              width={1672}
              height={941}
              className="h-auto w-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {SALE_EVIDENCE.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-5.5">
                <div className="text-2xl">{e.icon}</div>
                <div className="mt-2 font-heading text-base font-semibold text-ink">{e.title}</div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-body-soft">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosage */}
      <section className="mx-auto max-w-[1080px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">วิธีใช้</div>
        <h2 className="mx-auto mt-3 max-w-[680px] font-heading text-[26px] font-bold leading-snug text-ink sm:text-[32px]">
          กินอย่างไรให้ได้ผล
        </h2>
        <div className="relative mt-7 w-full overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(196,24,106,0.16)]">
          <Image
            src="/assets/dose-recommendation.jpg"
            alt="ตารางแนะนำการใช้"
            width={1536}
            height={1024}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Before / After */}
      <section className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 sm:py-[70px]">
        <h2 className="mb-9 text-center font-heading text-[24px] font-bold text-ink sm:text-[30px]">
          ชีวิตก่อน &amp; หลัง ดูแลด้วย Nutralist
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-[20px] bg-[#F4F1F5] p-7">
            <div className="mb-4 font-heading text-lg font-bold text-muted">ก่อน 😔</div>
            <div className="flex flex-col gap-3">
              {SALE_BEFORE.map((b) => (
                <div key={b} className="flex gap-2.5 text-[14.5px] leading-snug text-body-soft">
                  <span className="text-muted-soft">✕</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border-[1.5px] border-pink-pale bg-gradient-to-br from-[#FFF2F8] to-pink-glow p-7">
            <div className="mb-4 font-heading text-lg font-bold text-pink-deep">หลัง 🌸</div>
            <div className="flex flex-col gap-3">
              {SALE_AFTER.map((a) => (
                <div key={a} className="flex gap-2.5 text-[14.5px] font-medium leading-snug text-ink-soft">
                  <span className="text-green-soft">✓</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-[1080px] px-4 py-14 sm:px-6 sm:py-[70px]">
        <div className="mb-8 text-center">
          <div className="tracking-[3px] text-gold">★★★★★</div>
          <h2 className="mt-2 font-heading text-[22px] font-bold text-ink sm:text-[28px]">
            4.9 จาก 2,140 รีวิว · ผู้หญิง 12,000+ คนไว้วางใจ
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SALE_REVIEWS.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="scroll-mt-5 bg-gradient-to-b from-tint to-cream">
        <div className="mx-auto max-w-[1080px] px-4 py-16 sm:px-6 sm:py-[76px]">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-dark px-4 py-2 text-sm font-semibold text-white">
              ⏳ โปรหมดใน <CountdownTimer />
            </div>
            <h2 className="mx-auto mt-4 max-w-[760px] font-heading text-[26px] font-bold text-ink sm:text-[38px]">
              เลือกแพ็กเกจของคุณ
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-relaxed text-body">
              ยิ่งดูแลต่อเนื่อง ยิ่งเห็นผล · แพ็ก 3 กระปุกคุ้มและได้รับความนิยมที่สุด
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 items-center gap-5 sm:grid-cols-3">
            {SALE_BUNDLES.map((b) => (
              <div
                key={b.id}
                className={
                  "relative rounded-3xl border-2 bg-white p-7 text-center shadow-[0_12px_34px_rgba(196,24,106,0.07)] " +
                  (b.popular
                    ? "border-pink shadow-[0_24px_60px_rgba(196,24,106,0.20)] sm:scale-[1.04]"
                    : "border-border")
                }
              >
                {b.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-pink px-4 py-1.5 text-[12.5px] font-bold text-white">
                    ⭐ ยอดนิยม · คุ้มสุด
                  </div>
                )}
                <div className="font-heading text-xl font-semibold text-ink sm:text-[22px]">{b.name}</div>
                <div className="mt-0.5 text-[13.5px] text-muted">{b.sub}</div>
                <div className="my-4">
                  <span className="font-heading text-[34px] font-extrabold text-pink-deep sm:text-[40px]">{b.price}</span>
                </div>
                <div className="text-[13px] text-muted-soft line-through">ปกติ {b.was}</div>
                <div className="mt-2 text-[13.5px] font-semibold text-green-soft">{b.perLabel}</div>
                {b.save && (
                  <div className="mt-3 inline-block rounded-lg bg-green-tint px-3 py-1.5 text-[13px] font-semibold text-green-soft">
                    {b.saveLabel}
                  </div>
                )}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener"
                  className={
                    "mt-5 block rounded-[13px] py-4 text-base font-bold text-white " +
                    (b.popular ? "bg-gradient-to-br from-pink to-pink-deep" : "bg-green-deep")
                  }
                >
                  สั่งซื้อทางไลน์
                </a>
                <div className="mt-2.5 text-xs text-muted">{b.ship}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-[760px] flex-wrap items-center justify-center gap-6 rounded-[22px] border-[1.5px] border-dashed border-pink-pale bg-white p-8 text-center sm:flex-nowrap sm:text-left">
            <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-gradient-to-br from-pink-glow to-pink-pale text-4xl">
              🛡️
            </div>
            <div className="max-w-[520px]">
              <div className="font-heading text-lg font-bold text-ink sm:text-xl">มั่นใจได้ ปลอดภัยตามมาตรฐาน</div>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-body">
                วัตถุดิบ HOWARU® จาก IFF Health Sciences (USA) ผ่านการทดสอบความปลอดภัย ความคงตัว
                และการไม่ดื้อยาปฏิชีวนะ · มีทีมงานให้คำปรึกษาตลอดการใช้
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[820px] px-4 py-14 sm:px-6 sm:py-[70px]">
        <h2 className="mb-9 text-center font-heading text-[24px] font-bold text-ink sm:text-[30px]">
          คำถามที่พบบ่อย
        </h2>
        <div className="flex flex-col gap-3">
          {SALE_FAQS.map((f) => (
            <details key={f.q} className="group overflow-hidden rounded-2xl border border-border bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 sm:px-[22px]">
                <span className="font-heading text-[15.5px] font-semibold text-ink sm:text-base">{f.q}</span>
                <span className="flex-none text-xl text-pink group-open:hidden">+</span>
                <span className="hidden flex-none text-xl text-pink group-open:inline">−</span>
              </summary>
              <div className="px-5 pb-5 text-[14.5px] leading-relaxed text-body sm:px-[22px]">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-deep to-pink">
        <div aria-hidden className="absolute -top-10 right-[8%] h-[180px] w-[180px] rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-[760px] px-4 py-16 text-center sm:px-6 sm:py-[74px]">
          <h2 className="font-heading text-[26px] font-bold leading-tight text-white sm:text-[36px]">
            ถึงเวลาหยุดวงจร
            <br />
            และกลับมามั่นใจอีกครั้ง
          </h2>
          <p className="mt-3.5 text-[17px] text-[#FCE3EF]">โปรพิเศษวันนี้เท่านั้น · ฟรีค่าส่งเมื่อสั่ง 3 กระปุกขึ้นไป</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href="#offer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-pink-deep"
            >
              เลือกแพ็กเกจ
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-[1.5px] border-white/50 bg-white/[.14] px-7 py-4 text-base font-bold text-white"
            >
              <LineIcon />
              ทักไลน์เลย
            </a>
          </div>
          <div className="mt-5.5 text-[12.5px] text-[#FBD0E4]">
            © 2026 Nutralist · ผลิตภัณฑ์เสริมอาหาร ไม่มีผลในการป้องกันหรือรักษาโรค
          </div>
        </div>
      </section>

      {/* Sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-80 border-t border-border bg-white/94 shadow-[0_-8px_30px_rgba(196,24,106,0.08)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[11px] bg-tint text-xl">
              🧴
            </div>
            <div className="min-w-0">
              <div className="truncate font-heading text-[14.5px] font-semibold text-ink">
                Nutralist Probio Pro Plus+
              </div>
              <div className="text-[12.5px] font-semibold text-pink-deep">
                เริ่มต้น ฿990 · หมดใน <CountdownTimer />
              </div>
            </div>
          </div>
          <div className="flex flex-none gap-2.5">
            <a
              href="#offer"
              className="whitespace-nowrap rounded-xl bg-gradient-to-br from-pink to-pink-deep px-5 py-3 text-sm font-bold text-white"
            >
              สั่งซื้อ
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-line px-4 py-3 text-sm font-semibold text-white"
            >
              <LineIcon className="h-4 w-4" />
              <span className="hidden sm:inline">ไลน์</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
