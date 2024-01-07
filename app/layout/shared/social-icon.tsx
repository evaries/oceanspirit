import Image from "next/image";

export type SocialIconProps = {
  src: string;
};
export const SocialIcon: React.FC<SocialIconProps> = ({ src }) => {
  return <Image src={src} width={36} height={36} alt="social icon" />;
};
