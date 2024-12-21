import logo from "../../assets/images/logo.png";
import StatItem from "./StatItem";
const statsItems = [
  {
    value: "30+",
    title: "Language Support",
  },
  { value: "10K+", title: "Developers" },
  { value: "100K+", title: "Hours Saved" },
];

export default function StatsCardOne() {
  return (
    <section className="h-[170px] rounded-3xl bg-white shadow-card md:w-[380px] xl:w-[477px]">
      <header className="flex items-center justify-start gap-x-2 border-b-[1px] border-[#E6E8F0] p-5">
        <img src={logo} />
        <h1 className="text-lg font-bold">AI to Detect & Autofix Bad Code</h1>
      </header>
      <section className="flex items-center justify-between p-5">
        {statsItems.map((statsItem) => (
          <StatItem
            key={statsItem.title}
            value={statsItem.value}
            title={statsItem.title}
          />
        ))}
      </section>
    </section>
  );
}
