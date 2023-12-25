import Image from "next/image";

export type WhyUsCardProps = {
  title: string;
  description: string;
  icon: string;
};
const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, description, icon }) => {
  return (
    <div className="max-w-[370px] w-full flex flex-col items-center text-center">
      <Image
        src={icon}
        width={370}
        height={270}
        className="rounded"
        alt="home"
      />
      <span className="subtitle-3 mt-8">{title}</span>
      <p className="body mt-2">{description}</p>
    </div>
  );
};

export default WhyUsCard;
