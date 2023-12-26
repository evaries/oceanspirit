import AdvantagesCard from "../../atoms/AdvantagesCard";

const Advantages = () => {
  const advantages = [
    {
      icon: "/icons/ic_house.svg",
      title: "Stay with us",
      description: "We will find the best place for you to stay",
    },
    {
      icon: "/icons/ic_house.svg",
      title: "Stay with us",
      description: "We will find the best place for you to stay",
    },
    {
      icon: "/icons/ic_house.svg",
      title: "Stay with us",
      description: "We will find the best place for you to stay",
    },
    {
      icon: "/icons/ic_house.svg",
      title: "Stay with us",
      description: "We will find the best place for you to stay",
    },
  ];
  return (
    <section id="advantages" className="flex flex-col items-center">
      <h3 className="subtitle-1 mt-28">
        Enjoy surfing, we will take care of the rest
      </h3>
      <p className="body mt-7 text-center">
        Wanna catch the best waves and travel through amazing places? <br /> We
        created the best conditions for your holidays to help you surf, relax,
        chill and see around!
      </p>
      <div className="grid grid-cols-4 gap-16 mt-16">
        {advantages.map((advantage) => (
          <AdvantagesCard key={advantage.title} {...advantage} />
        ))}
      </div>
    </section>
  );
};
export default Advantages;
