import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-14 mt-40">
        <div className="image flex justify-end">
          <Image
            src="/images/destintaion-lombok.png"
            width={500}
            height={500}
            alt="destination"
          />
        </div>
        <div className="content max-w-[500px] w-full">
          <h3 className="h3">Who we are?</h3>
          <p className="p mt-3">
            We are a surf team with over 3.5 years of international experience
            in teaching surfing. We travel and live in the surf rhythm of life.
            Our main task is to show you the world of surfing, teach you how to
            catch the first waves and/or significantly improve your level during
            the surfcamp. We are for effective training with final results. We
            are for the pleasure and drive of contact with the energy of the
            wave and the ocean.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhoWeAre;
