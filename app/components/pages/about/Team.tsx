import Image from "next/image";
import { SectionImage } from "../../shared/SectionImage";

const OurTeam = () => {
  return (
    <section className="section flex flex-col items-center">
      <h3 className="subtitle-1 mt-20">Our Team</h3>
      <h3 className="subtitle-2 mt-10 md:hidden">Head coach Ruslan</h3>
      <div className="grid w-full md:grid-cols-[30%_1fr] gap-5 md:gap-14 mt-10 md:mt-20">
        <SectionImage src="/images/rus.png" width={500} alt="Head coach" />
        <div className="content w-full">
          <h3 className="subtitle-2 hidden md:block">Head coach Ruslan</h3>
          <div className="mt-3">
            <ul>
              <li> - experience as a surf instructor -7.5 years</li>
              <li>
                - trained as a surf coach and lifeguard from the International
                Surfing Association (ISA)
              </li>
              <li>
                - put more than 2,500 people on the boards from 6 to 76 years
                old
              </li>
              <li>- experience working in different countries</li>
              <li>- attentive, individual approach to everyone, demanding </li>
            </ul>
          </div>
          <div className="mt-5">
            <Image
              src="/icons/ic_instagram.svg"
              width={24}
              height={24}
              alt="insta"
            />
          </div>
        </div>
      </div>
      <h3 className="subtitle-2 mt-10 md:hidden">Chief curator Julia</h3>
      <div className="grid w-full md:grid-cols-[1fr_30%] gap-5 md:gap-14 mt-10 md:mt-20">
        <div className="content w-full">
          <h3 className="subtitle-2 hidden md:block">Chief curator Julia</h3>
          <div className="mt-3">
            <ul>
              <li>– 14 years of experience in organizing various events </li>
              <li>
                – original tours, yoga tours and surf camps in Goa and Bali{" "}
              </li>
              <li>
                – warm-hearted, attentive to details, will pay attention to
                everyone, lover of surfing and adventure{" "}
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Image
              src="/icons/ic_instagram.svg"
              width={24}
              height={24}
              alt="insta"
            />
          </div>
        </div>
        <SectionImage
          src="/images/julia.png"
          width={500}
          alt="Chief curator"
          isReverse
        />
      </div>
    </section>
  );
};

export default OurTeam;
