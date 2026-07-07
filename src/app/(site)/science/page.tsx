import Image from "next/image";
import { DOSE_ROWS, EVIDENCE } from "@/lib/content";

export default function SciencePage() {
  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-4 pb-2.5 pt-14 text-center sm:px-6 sm:pt-[70px]">
        <div className="text-[13px] font-bold uppercase tracking-[2px] text-pink">งานวิจัย &amp; วิธีใช้</div>
        <h1 className="mx-auto mt-3 max-w-[760px] font-heading text-[28px] font-semibold text-ink sm:text-[38px]">
          วิทยาศาสตร์เบื้องหลัง Nutralist
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] text-[16.5px] leading-relaxed text-body">
          โพรไบโอติกที่คัดสายพันธุ์และมีหลักฐานสนับสนุน พร้อมคำแนะนำการใช้ตามแต่ละสถานการณ์
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6">
        <div className="relative mb-11 w-full overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(196,24,106,0.16)]">
          <Image src="/assets/recurrence-cycle.jpg" alt="วงจรการกลับมาเป็นซ้ำ" width={1536} height={1024} className="h-auto w-full" />
        </div>
        <div className="relative w-full overflow-hidden rounded-[22px] shadow-[0_24px_60px_rgba(196,24,106,0.16)]">
          <Image src="/assets/ingredients-conclusion.jpg" alt="ส่วนผสมและงานวิจัย" width={1672} height={941} className="h-auto w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6">
        <h2 className="text-center font-heading text-[24px] font-semibold text-ink sm:text-[30px]">ตารางแนะนำการใช้</h2>
        <p className="mx-0 mb-7 mt-0 text-center text-sm text-muted">Nutralist Dose Recommendation</p>
        <div className="overflow-x-auto rounded-[20px] border border-border shadow-[0_14px_40px_rgba(196,24,106,0.08)]">
          <table className="w-full min-w-[520px] border-collapse text-[14.5px]">
            <thead>
              <tr className="bg-green-deep text-left text-white">
                <th className="px-4.5 py-4 font-semibold sm:px-[18px]">สถานการณ์</th>
                <th className="px-4.5 py-4 font-semibold sm:px-[18px]">ขนาดเริ่มต้น</th>
                <th className="px-4.5 py-4 font-semibold sm:px-[18px]">ต่อเนื่อง</th>
              </tr>
            </thead>
            <tbody>
              {DOSE_ROWS.map((d) => (
                <tr key={d.label}>
                  <td className="whitespace-nowrap border-b border-[#F3E0E9] px-4.5 py-3.5 font-semibold text-pink-deep sm:px-[18px]">
                    {d.label}
                  </td>
                  <td className="border-b border-[#F3E0E9] px-4.5 py-3.5 text-ink-soft sm:px-[18px]">{d.start}</td>
                  <td className="border-b border-[#F3E0E9] px-4.5 py-3.5 text-ink-soft sm:px-[18px]">{d.cont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3.5 text-center text-[12.5px] text-muted-soft">*ข้อมูลเพื่อการดูแลเบื้องต้น ควรปรึกษาแพทย์หรือเภสัชกรร่วมด้วย</p>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {EVIDENCE.map((e) => (
            <div key={e.title} className="rounded-[20px] border border-border bg-white p-6">
              <div className="text-2xl">{e.icon}</div>
              <div className="mt-3 font-heading text-lg font-semibold text-ink">{e.title}</div>
              <div className="mt-1.5 text-sm leading-relaxed text-body-soft">{e.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
