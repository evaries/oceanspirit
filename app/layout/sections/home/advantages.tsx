import { advantages } from "@/app/data";
import { AdvantagesCard } from "../../entities/advantages-card";

export const Advantages = () => {
  return (
    <section
      id="advantages"
      className="section flex flex-col items-center max-w-[1024px] w-full"
    >
      <h2 className="subtitle-1 text-center mt-28">
        Enjoy surfing, we will take care of the rest
      </h2>
      <p className="body mt-7 text-center">
        Wanna catch the best waves and travel through amazing places? <br /> We
        created the best conditions for your holidays to help you surf, relax,
        chill and see around!
      </p>
      <div className="grid grid-flow-row sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-16  mt-16">
        {advantages.map((advantage) => (
          <AdvantagesCard key={advantage.title} {...advantage} />
        ))}
      </div>
    </section>
  );
};
