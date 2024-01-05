import Image from "next/image";

export type SectionImageProps = {
  src: string;
  alt: string;
  isReverse?: boolean;
  className?: string;
  height?: number;
  width?: number;
};

export const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  isReverse,
  className,
  height = 411,
  width = 600,
}) => {
  return (
    <div
      className={`grid justify-center items-center ${
        isReverse ? "order-[-1] md:order-1" : ""
      } ${className}`}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
};
