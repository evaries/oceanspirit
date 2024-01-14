import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookDialog } from "./book-dialog";

export type DestinationProps = {
  title: string;
  description: string;
  features: string[];
  direction: "left" | "right";
  imgUrl: string;
  link: string;
};

export const Destination: React.FC<DestinationProps> = ({
  title,
  description,
  direction,
  features,
  imgUrl,
  link,
}) => {
  const isRight = direction === "right";
  return (
    <>
      <div className="grid grid-flow-row md:grid-cols-2 gap-8 sm:gap-14 mt-10 sm:mt-24 max-w-[1024px] w-full mx-auto">
        <div
          className={`image relative max-h-[500px] h-[250px] sm:h-[400px] md:h-full md:max-h-max flex justify-center md:justify-start ${
            isRight ? "order-[-1] md:order-1 " : "md:justify-end"
          } `}
        >
          <Image
            src={imgUrl}
            fill={true}
            // objectFit="contain"
            alt={title}
          />
        </div>
        <div
          className={`content max-w-full md:max-w-[500px] w-full flex flex-col items-center md:items-start ${
            isRight ? "justify-self-end" : ""
          }`}
        >
          <h3 className="subtitle-2 text-center md:text-left">{title}</h3>
          <p className="p mt-3 text-center md:text-left">{description}</p>
          <ul className="mt-5">
            {features.map((feature, index) => {
              return (
                <div key={index} className="flex">
                  •<li className="ml-1 text-sm sm:text-base">{feature}</li>
                </div>
              );
            })}
          </ul>
          <div className="grid grid-cols-2 gap-5 mt-9 max-w-fit">
            <BookDialog />
            <Button size="lg" variant="outline" asChild>
              <Link href={link}>Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
