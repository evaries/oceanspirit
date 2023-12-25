import WhyUsCard from "../../atoms/WhyUsCard";

const WhyUs = () => {
  const whyUs = [
    {
      icon: "/images/why-us-1.png",
      title: "Surfing",
      description:
        "Surfing is the basis of the camp's activities. Our task is to show you the surfing life, teach you how to catch waves, and give you useful knowledge and skills. Our program includes 7 surfing lessons and 3 independent sessions under the supervision of a coach, surf trips to fishing spots, photo and video shooting, video analysis of the rides, surfing seminars and homework to speed up progress.",
    },
    {
      icon: "/images/why-us-1.png",
      title: "Surfing",
      description:
        "Surfing is the basis of the camp's activities. Our task is to show you the surfing life, teach you how to catch waves, and give you useful knowledge and skills. Our program includes 7 surfing lessons and 3 independent sessions under the supervision of a coach, surf trips to fishing spots, photo and video shooting, video analysis of the rides, surfing seminars and homework to speed up progress.",
    },
    {
      icon: "/images/why-us-1.png",
      title: "Surfing",
      description:
        "Surfing is the basis of the camp's activities. Our task is to show you the surfing life, teach you how to catch waves, and give you useful knowledge and skills. Our program includes 7 surfing lessons and 3 independent sessions under the supervision of a coach, surf trips to fishing spots, photo and video shooting, video analysis of the rides, surfing seminars and homework to speed up progress.",
    },
  ];
  return (
    <section className="flex flex-col items-center mt-[100px]">
      <p className="subtitle-1">Why travel with us?</p>
      <p className="body mt-10 max-w-[1024px] text-center">
        This is an original 14-day program based on surfing training. We have
        planned the program so that your vacation will be full of sports,
        activities and fun. We will be surfing, traveling and exploring the
        island together a lot. New acquaintances, adventures, ocean, sun,
        beaches and good mood are guaranteed. Arrivals every month.
      </p>
      <div className="grid grid-cols-3 gap-10 mt-14">
        {whyUs.map((item) => (
          <WhyUsCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
