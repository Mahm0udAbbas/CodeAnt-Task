import { ArrowUpOutlined, PieChartOutlined } from "@ant-design/icons";

export default function StatsCardTwo() {
  return (
    <section className="flex h-[164px] flex-col justify-between rounded-3xl bg-white px-8 py-4 shadow-card md:w-[200px] xl:w-[265px]">
      <header className="flex items-center justify-between">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#9D90FA40]">
          <PieChartOutlined className="text-2xl text-[#9D90FA]" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#0049C6]">
            <ArrowUpOutlined />
            <span>14 %</span>
          </p>
          <p className="text-xs font-normal">This week</p>
        </div>
      </header>
      <section>
        <h1 className="mb-2 text-sm font-bold text-[#171717]">Issues Fixed</h1>
        <p className="text-[32px] font-bold leading-[32px] text-[#081735]">
          500K+
        </p>
      </section>
    </section>
  );
}
