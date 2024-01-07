import { SectionImage } from "../../shared/section-image";

export const WhoWeAre = () => {
  return (
    <section className="section grid items-center justify-center">
      <h3 className="h2 text-center">Who we are?</h3>
      {/* <SectionImage */}
      {/*   src="/images/destintaion-lombok.png" */}
      {/*   width={800} */}
      {/*   alt="Who we are" */}
      {/*   className="mt-10" */}
      {/* /> */}
      {/* <div className="grid justify-self-center mt-10 max-w-4xl"> */}
      {/*   <p className="text-center max-w-4xl"> */}
      {/*     We are a surf team with over 3.5 years of international experience in */}
      {/*     teaching surfing. We travel and live in the surf rhythm of life. Our */}
      {/*     main task is to show you the world of surfing, teach you how to catch */}
      {/*     the first waves and/or significantly improve your level during the */}
      {/*     surfcamp. We are for effective training with final results. We are for */}
      {/*     the pleasure and drive of contact with the energy of the wave and the */}
      {/*     ocean. */}
      {/*   </p> */}
      {/* </div> */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 mt-10">
        <SectionImage
          src="/images/destintaion-lombok.png"
          width={700}
          alt="Who we are"
        />
        <div className="content  w-full">
          {/* <h3 className="subtitle-1 hidden md:block">Our story</h3> */}
          <p className="mt-3">
            We are a surf team with over 3.5 years of international experience
            in teaching surfing. We travel and live in the surf rhythm of life.
            Our main task is to show you the world of surfing, teach you how to
            catch the first waves and/or significantly improve your level during
            the surfcamp. We are for effective training with final results. We
            are for the pleasure and drive of contact with the energy of the
            wave and the ocean.
          </p>
        </div>
      </div>
    </section>
  );
};
