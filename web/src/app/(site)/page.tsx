"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LineButton from "@/components/LineButton";
import ReviewCard from "@/components/ReviewCard";
import {
  PARTNERS,
  PROBLEMS,
  STRAINS,
  BENEFITS,
  REVIEWS_ALL,
} from "@/lib/content";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[radial-gradient(1200px_600px_at_78%_-10%,#FBE0EE_0%,rgba(251,224,238,0)_60%),linear-gradient(180deg,#FFF7FB,#FDEBF3)]">
        <div
          aria-hidden
          className="animate-float absolute left-[6%] top-[70px] hidden h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.9),rgba(244,143,177,.18))] sm:block"
        />
        <div
          aria-hidden
          className="animate-float2 absolute bottom-10 left-[44%] hidden h-[70px] w-[70px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.9),rgba(74,157,176,.15))] sm:block"
        />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-3.5 py-1.5 text-[13px] font-semibold text-pink-deep shadow-[0_6px_18px_rgba(196,24,106,0.08)]">
              <span className="h-1.5 w-1.5 rounded-full bg-line" />
              โพรไบโอติกเฉพาะจุดสำหรับผู้หญิง
            </div>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-[44px] lg:text-[52px]">
              สมดุลจุดซ่อนเร้น
              <br />
              เริ่มจาก<span className="text-pink">ภายใน</span>
            </h1>
            <p className="mt-5 max-w-[480px] text-[17px] leading-relaxed text-body">
              Nutralist Probio Pro Plus+ La-14® โพรไบโอติก 2 สายพันธุ์ 10,000
              ล้าน CFU ที่ผ่านการศึกษาทางคลินิก ช่วยฟื้นฟูสมดุลจุลินทรีย์
              ลดการกลับมาเป็นซ้ำของ BV / VVC และดูแลสุขภาพภายในของผู้หญิงในทุกช่วงชีวิต
            </p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <button
                onClick={() => router.push("/product")}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-7 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(196,24,106,0.28)]"
              >
                สั่งซื้อ — เริ่มต้น ฿990
              </button>
              <LineButton
                label="ปรึกษาทางไลน์"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-[1.5px] border-border-strong bg-white px-7 py-4 text-base font-bold text-green-deep"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <div className="font-display text-3xl font-bold leading-none text-green-deep">
                  10<small className="text-[17px]">พันล้าน</small>
                </div>
                <div className="mt-0.5 text-[12.5px] text-muted">CFU ต่อแคปซูล</div>
              </div>
              <div className="w-px bg-border-strong" />
              <div>
                <div className="font-display text-3xl font-bold leading-none text-green-deep">2</div>
                <div className="mt-0.5 text-[12.5px] text-muted">สายพันธุ์ที่ศึกษาแล้ว</div>
              </div>
              <div className="w-px bg-border-strong" />
              <div>
                <div className="font-display text-3xl font-bold leading-none text-green-deep">30</div>
                <div className="mt-0.5 text-[12.5px] text-muted">แคปซูล / กระปุก</div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-2">
            <div className="absolute -inset-x-[8%] -inset-y-[6%] rounded-full bg-[radial-gradient(circle_at_50%_45%,#F9C9DE,rgba(249,201,222,0)_68%)] blur-[6px]" />
            <div className="relative aspect-square overflow-hidden rounded-[28px] border-[6px] border-white bg-tint shadow-[0_30px_70px_rgba(196,24,106,0.20)]">
              <Image
                src="/uploads/S__169525254_0.jpg"
                alt="Nutralist Probio Pro Plus+"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <div className="absolute -left-3.5 bottom-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_34px_rgba(196,24,106,0.16)] sm:-left-3.5">
              <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-xl bg-green-tint">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D5B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-bold text-ink">ผ่านการทดสอบความปลอดภัย</div>
                <div className="text-[11.5px] text-muted">ไม่ดื้อยาปฏิชีวนะ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-green-deep">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div className="text-[13.5px] font-medium tracking-[.3px] text-[#CFE3D6]">
            วัตถุดิบมาตรฐานระดับโลก · ศึกษาทางคลินิก
          </div>
          <div className="flex flex-wrap items-center gap-6 sm:gap-7">
            {PARTNERS.map((p) => (
              <div key={p} className="text-base font-semibold tracking-[.4px] text-white opacity-90">
                {p}
              </div>
            ))}
            <div className="text-base font-semibold tracking-[.4px] text-white opacity-90">🇺🇸 USA</div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="mx-auto max-w-[1200px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">ปัญหาที่ผู้หญิงหลายคนเจอ</div>
        <h2 className="mx-auto mt-3 max-w-[720px] font-heading text-[26px] font-semibold text-ink sm:text-[34px]">
          รักษาแล้วก็ยัง<span className="text-pink">กลับมาเป็นซ้ำ</span> วนอยู่แบบนี้ไม่จบสักที
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[16.5px] leading-relaxed text-body">
          ยาปฏิชีวนะช่วยได้ชั่วคราว แต่ไม่ได้ฟื้นฟูจุลินทรีย์ดีที่หายไป เมื่อสมดุลไม่กลับมา อาการจึงวนกลับมาซ้ำแล้วซ้ำเล่า
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="rounded-[20px] border border-border-soft bg-white p-5 shadow-[0_10px_30px_rgba(196,24,106,0.06)]">
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-xl">
                {p.icon}
              </div>
              <div className="font-heading text-[17px] font-semibold text-ink">{p.title}</div>
              <div className="mt-1.5 text-sm leading-relaxed text-body-soft">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strains */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1200px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
          <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">ทางออก</div>
          <h2 className="mx-auto mt-3 max-w-[720px] font-heading text-[26px] font-semibold text-ink sm:text-[32px]">
            โพรไบโอติก 2 สายพันธุ์ ที่คัดมาเพื่อผู้หญิง
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16.5px] leading-relaxed text-body">
            ทำงานผ่านแกนลำไส้–ช่องคลอด (gut–vaginal axis) เพื่อฟื้นฟูความเป็น Lactobacillus dominance และรักษาค่า pH ที่เหมาะสม
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 text-left lg:grid-cols-2">
            {STRAINS.map((s) => (
              <div key={s.code} className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-[0_16px_44px_rgba(196,24,106,0.09)] sm:p-8">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-pink-glow to-pink-pale text-pink-deep">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2c2 3 2 5 0 8s-2 5 0 8" />
                    <path d="M8 4c1.5 2 4 2 8 0" />
                    <path d="M8 20c1.5-2 4-2 8 0" />
                    <path d="M7 12h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-[12.5px] font-bold tracking-[.5px] text-pink">{s.code}</div>
                  <div className="mt-1 font-heading text-lg font-semibold text-ink sm:text-xl">{s.name}</div>
                  <div className="mt-2 text-[14.5px] leading-relaxed text-body-soft">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1200px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
        <h2 className="font-heading text-[26px] font-semibold text-ink sm:text-[34px]">ดูแลครบ ในหนึ่งแคปซูล</h2>
        <div className="mt-9 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-[20px] border border-border bg-white p-6">
              <div className="text-2xl">{b.icon}</div>
              <div className="mt-3 font-heading text-lg font-semibold text-ink">{b.title}</div>
              <div className="mt-1.5 text-sm leading-relaxed text-body-soft">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Infographic */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1200px] px-4 py-14 text-center sm:px-6 sm:py-[70px]">
          <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">เข้าใจต้นเหตุ</div>
          <h2 className="mx-auto mt-3 max-w-[720px] font-heading text-[26px] font-semibold text-ink sm:text-[32px]">
            ทำไมถึงกลับมาเป็นซ้ำ และจะตัดวงจรได้อย่างไร
          </h2>
          <div className="relative mt-7 w-full overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(196,24,106,0.16)]">
            <Image
              src="/assets/recurrence-cycle.jpg"
              alt="วงจรการกลับมาเป็นซ้ำ"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          <Link
            href="/science"
            className="mt-7 inline-block border-b-2 border-pink-pale pb-0.5 text-[15.5px] font-semibold text-pink-deep"
          >
            ดูงานวิจัยและกลไกทั้งหมด →
          </Link>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-[70px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">เสียงจากผู้ใช้จริง</div>
            <h2 className="mt-2.5 text-left font-heading text-[24px] font-semibold text-ink sm:text-[30px]">
              ผู้หญิงกว่า 12,000 คนดูแลตัวเองด้วย Nutralist
            </h2>
          </div>
          <Link href="/reviews" className="text-[15px] font-semibold text-pink-deep">
            ดูรีวิวทั้งหมด →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS_ALL.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-deep to-pink">
        <div aria-hidden className="absolute -top-10 right-[6%] h-[180px] w-[180px] rounded-full bg-white/10" />
        <div aria-hidden className="absolute -bottom-[60px] left-[10%] h-[220px] w-[220px] rounded-full bg-white/[.07]" />
        <div className="relative mx-auto max-w-[820px] px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-heading text-[26px] font-semibold leading-tight text-white sm:text-[38px]">
            เริ่มดูแลสมดุลภายในของคุณวันนี้
          </h2>
          <p className="mt-3.5 text-[17px] leading-relaxed text-[#FCE3EF]">
            คอร์ส 3 กระปุกคุ้มที่สุด — ฟรีค่าจัดส่ง พร้อมคำแนะนำจากทีมงาน
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <button
              onClick={() => router.push("/product")}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-pink-deep"
            >
              เลือกแพ็กเกจ
            </button>
            <LineButton
              label="ทักไลน์ปรึกษาฟรี"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-[1.5px] border-white/50 bg-white/[.14] px-7 py-4 text-base font-bold text-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
