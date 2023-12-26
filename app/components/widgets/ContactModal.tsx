import Image from "next/image";

const ContactModal = () => {
  return (
    <div className="flex flex-col items-center max-w-[640px] w-full bg-surface-100 p-6 pb-10 rounded-xl">
      <h3 className="subtitle-1 max-w-md mt-10 text-surface-500 text-center">
        For booking, contact us in way you like
      </h3>
      <div className="grid grid-flow-col gap-5 justify-center item-center mt-8">
        <a
          href="https://api.whatsapp.com/send?phone=6282340100332&text=Hello%2C%20I%27m%20interested%20about%20trip%20to%20G-land."
          target="_blank"
        >
          <Image
            src="/icons/ic_instagram.svg"
            height={64}
            width={64}
            alt="ig"
          />
        </a>

        <a href="https://t.me/enadtochii?text=example" target="_blank">
          <Image
            src="/icons/ic_instagram.svg"
            height={64}
            width={64}
            alt="ig"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactModal;
