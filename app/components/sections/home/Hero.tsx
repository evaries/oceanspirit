import Button from "../../atoms/PrimaryButton";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end justify-center max-h-[860px]">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url('/images/video.png')`,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center align-bottom">
        <h1 className="h3">Surf trips in Indonesia</h1>
        <p className="p pt-4">
          have an unforgettable surfing adventure with us
        </p>

        <div className="grid grid-cols-2 gap-9 pt-10 pb-16">
          <Button text="Book" type="primary" />
          <Button text="Learn more" type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
