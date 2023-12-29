import Image from "next/image";
export type AdvantagesCardProps = {
  title: string;
  description: string;
  icon: string;
};
const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[200px]">
      <Image src={icon} width={32} height={32} alt="home" />
      <p className="mt-8">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default AdvantagesCard;
