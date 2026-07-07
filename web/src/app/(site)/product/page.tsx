"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import LineButton from "@/components/LineButton";
import { BUNDLES, PROD_CHIPS, PRODUCT_TABS, baht } from "@/lib/content";

export default function ProductPage() {
  const { addToCart } = useCart();
  const [selectedBundle, setSelectedBundle] = useState<string>("x3");
  const [tab, setTab] = useState<(typeof PRODUCT_TABS)[number]["id"]>("desc");

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-5 text-[13px] text-muted-soft">
        <Link href="/">หน้าแรก</Link> / <span className="text-body">สินค้า</span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="lg:sticky lg:top-[90px] lg:self-start">
          <div className="relative aspect-square overflow-hidden rounded-3xl border-[6px] border-white bg-tint shadow-[0_24px_60px_rgba(196,24,106,0.14)]">
            <Image
              src="/uploads/S__169525253_0.jpg"
              alt="Nutralist Probio Pro Plus+"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-tint text-xl text-pink-deep"
              >
                +
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="tracking-[2px] text-gold">
            ★★★★★ <span className="text-[13px] tracking-normal text-muted">4.9 · 2,140 รีวิว</span>
          </div>
          <h1 className="mt-2.5 font-heading text-[26px] font-semibold leading-tight text-ink sm:text-[34px]">
            Nutralist Probio Pro Plus+ La-14®
          </h1>
          <p className="mt-3 text-base leading-relaxed text-body">
            โพรไบโอติกสำหรับสุขภาพจุดซ่อนเร้นและระบบสืบพันธุ์ของผู้หญิง · 10,000 ล้าน CFU ต่อแคปซูล · 30 แคปซูล
          </p>

          <div className="mt-4.5 flex flex-wrap gap-2">
            {PROD_CHIPS.map((c) => (
              <span key={c} className="rounded-full bg-tint px-3.5 py-1.5 text-[13px] font-semibold text-pink-deep">
                {c}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3">
            {BUNDLES.map((b) => {
              const selected = selectedBundle === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBundle(b.id)}
                  className={
                    "relative flex items-center justify-between rounded-2xl border-2 bg-white px-5 py-4.5 text-left transition-colors " +
                    (selected ? "border-pink bg-[#FFF2F8]" : "border-border")
                  }
                >
                  {b.popular && (
                    <span className="absolute -top-2.5 left-5 rounded-full bg-pink px-2.5 py-1 text-[11px] font-bold text-white">
                      ยอดนิยม
                    </span>
                  )}
                  <div className="flex items-center gap-3.5">
                    <div
                      className={
                        "flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full border-2 " +
                        (selected ? "border-pink" : "border-[#D9C3CE]")
                      }
                    >
                      <span className={"h-[11px] w-[11px] rounded-full " + (selected ? "bg-pink" : "bg-transparent")} />
                    </div>
                    <div>
                      <div className="font-heading text-[17px] font-semibold text-ink">{b.name}</div>
                      <div className="text-[13px] text-muted">
                        {b.sub} · {b.perLabel}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-xl font-bold text-pink-deep">{baht(b.price)}</div>
                    <div className="text-[12.5px] text-muted-soft line-through">{baht(b.was)}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => addToCart(selectedBundle)}
              className="flex-1 rounded-2xl bg-gradient-to-br from-pink to-pink-deep px-6 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(196,24,106,0.28)]"
            >
              เพิ่มลงตะกร้า
            </button>
            <LineButton
              label="สั่งทางไลน์"
              className="flex flex-none items-center gap-2 rounded-2xl bg-line px-5 py-4 text-base font-semibold text-white"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-5">
            <div className="flex items-center gap-1.5 text-[13px] text-body">
              <span className="text-green-soft">✓</span> จัดส่งฟรีเมื่อซื้อ 3 กระปุกขึ้นไป
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-body">
              <span className="text-green-soft">✓</span> เก็บได้โดยไม่ต้องแช่เย็น
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-5.5">
            <div className="flex gap-2">
              {PRODUCT_TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={
                    "rounded-[10px] px-4 py-2.5 text-sm font-semibold " +
                    (tab === t.id ? "bg-pink text-white" : "bg-tint text-pink-deep")
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="mt-5 text-[15px] leading-loose text-ink-soft">
              {tab === "desc" && (
                <>
                  <p>
                    Nutralist Probio Pro Plus+ ผสานโพรไบโอติกที่ผ่านการศึกษาทางคลินิก 2 สายพันธุ์
                    เพื่อสุขภาพจุดซ่อนเร้นและระบบสืบพันธุ์ของผู้หญิงโดยเฉพาะ
                  </p>
                  <ul className="mt-3 flex flex-col gap-2 pl-5 [list-style:disc]">
                    <li>ฟื้นฟูสมดุลจุลินทรีย์ในช่องคลอดผ่านแกนลำไส้–ช่องคลอด</li>
                    <li>รองรับการดูแล BV / VVC และลดการกลับมาเป็นซ้ำ</li>
                    <li>เทคโนโลยีความคงตัว เก็บได้โดยไม่ต้องแช่เย็น</li>
                    <li>เหมาะกับการดูแลประจำวัน ช่วงเตรียมตั้งครรภ์ IVF และหลังคลอด</li>
                  </ul>
                </>
              )}
              {tab === "ingr" && (
                <>
                  <p>
                    <b>ส่วนผสมสำคัญต่อแคปซูล (10,000 ล้าน CFU):</b>
                  </p>
                  <ul className="mt-3 flex flex-col gap-2 pl-5 [list-style:disc]">
                    <li>
                      <b>Lactobacillus acidophilus (HOWARU® La-14®)</b> — สายพันธุ์ที่ศึกษาเพื่อสุขภาพจุดซ่อนเร้น
                    </li>
                    <li>
                      <b>Lacticaseibacillus Rhamnosus (HN001™)</b> — สนับสนุนภูมิคุ้มกันและสมดุลจุลินทรีย์
                    </li>
                  </ul>
                  <p className="mt-3 text-[13.5px] text-muted">
                    วัตถุดิบจาก IFF Health Sciences (HOWARU®) · ผ่านการทดสอบ virulence, toxicogenic properties
                    และการไม่ดื้อยาปฏิชีวนะ
                  </p>
                </>
              )}
              {tab === "use" && (
                <>
                  <p>
                    <b>การดูแลประจำวัน:</b> 1 แคปซูล/วัน ต่อเนื่องเพื่อสมดุลระยะยาว
                  </p>
                  <p className="mt-3">
                    <b>หลังใช้ยาปฏิชีวนะ (BV/VVC):</b> 2 แคปซูล/วัน นาน 5 วัน จากนั้น 1 แคปซูล/วัน ต่ออีก 10 วัน
                  </p>
                  <p className="mt-3">
                    <b>เตรียม IVF:</b> 2 แคปซูล/วัน เริ่มก่อนย้ายตัวอ่อน 2 เดือน
                  </p>
                  <p className="mt-3">
                    ดูตารางแนะนำแบบเต็มได้ที่หน้า{" "}
                    <Link href="/science">งานวิจัย &amp; วิธีใช้</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
