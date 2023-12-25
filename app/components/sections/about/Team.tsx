import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="subtitle-1 mt-20">Our Team</h3>
      <div className="grid grid-cols-[35%_65%] gap-14 mt-20">
        <div className="image flex justify-start">
          <Image
            src="/images/rus.png"
            width={385}
            height={332}
            alt="destination"
          />
        </div>
        <div className="content max-w-[650px] w-full">
          <h3 className="subtitle-2">Head coach Ruslan</h3>
          <div className="p mt-3">
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
      <div className="grid grid-cols-[65%_35%] gap-14 mt-20">
        <div className="content max-w-[650px] w-full">
          <h3 className="subtitle-2">Chief curator Julia</h3>
          <div className="p mt-3">
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
        <div className="image flex justify-start">
          <Image
            src="/images/julia.png"
            width={385}
            height={332}
            alt="destination"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
