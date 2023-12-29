import Link from "next/link";
// import Button from "../shared/Button";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type DestionationProps = {
  title: string;
  description: string;
  features: string[];
  direction: "left" | "right";
  action?: () => void;
};

const Destination: React.FC<DestionationProps> = ({
  title,
  description,
  direction,
  features,
  action,
}) => {
  const isRight = direction === "right";
  return (
    <>
      <div className="grid grid-flow-row md:grid-cols-2 gap-14 mt-24">
        <div
          className={`image relative max-h-[500px] h-[250px] sm:h-[400px] md:h-full md:max-h-max flex justify-center md:justify-start ${
            isRight ? "order-[-1] md:order-1 " : "md:justify-end"
          } `}
        >
          <Image
            src="/images/destintaion-lombok.png"
            fill={true}
            objectFit="contain"
            alt="destination"
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
              return <li key={index}>{feature}</li>;
            })}
          </ul>
          <div className="grid grid-cols-2 gap-5 mt-9 max-w-fit">
            <Button size="lg">BOOK</Button>
            <Button size="lg" variant="outline" asChild onClick={action}>
              <Link href={"/destination/g-land"}>Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
