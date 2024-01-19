import Image from "next/image";
export type AdvantagesCardProps = {
  title: string;
  description: string;
  icon: string;
};
export const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[200px]">
      <Image src={icon} width={56} height={56} alt={title} />
      <p className="mt-8 font-semibold">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};
