import StatsCardOne from "./StatsCardOne";
import StatsCardTwo from "./StatsCardTwo";

export default function StatsCardContainer() {
  return (
    <section className="relative h-screen bg-logo bg-left-bottom bg-no-repeat">
      <div className="absolute left-[17%] top-[33%]">
        <section className="">
          <StatsCardOne />
        </section>
        <section className="absolute left-[49.5%] top-[90%]">
          <StatsCardTwo />
        </section>
      </div>
    </section>
  );
}
