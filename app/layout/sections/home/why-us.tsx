import { WhyUsCard } from "../../entities/why-us-card";
import { whyUs } from "@/app/data";

export const WhyUs = () => {
  return (
    <section className="section flex flex-col items-center mt-[100px]">
      <p className="subtitle-1">Why travel with us?</p>
      <p className="body mt-10 max-w-[1024px] text-center">
        This is an original 14-day program based on surfing training. We have
        planned the program so that your vacation will be full of sports,
        activities and fun. We will be surfing, traveling and exploring the
        island together a lot. New acquaintances, adventures, ocean, sun,
        beaches and good mood are guaranteed. Arrivals every month.
      </p>
      <div className="grid grid-flow-row md:grid-flow-col gap-10 mt-14">
        {whyUs.map((item) => (
          <WhyUsCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
