"use client";
import Button from "@/app/components/atoms/PrimaryButton";
import { scrolltoHash } from "@/app/components/utils";
import { destinations } from "@/app/data";
import Image from "next/image";
import { redirect } from "next/navigation";

export type DestinationType = {
  params: {
    slug: string;
  };
};

const Destination = ({ params }: { params: { slug: string } }) => {
  const info = destinations.find((item) => item.name === params.slug);
  if (!info) {
    redirect("/404");
  }
  const { content } = info;
  return (
    <section className="flex flex-col items-center px-8">
      <div className="flex flex-col w-full max-w-7xl items-center mt-24 mb-8">
        <h1 className="h2 text-center">{content.title}</h1>
        <p className="mt-5 w-full max-w-4xl text-center">
          {content.descriptions.main}
        </p>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <Button type="primary" text="Book" />
          <Button
            type="secondary"
            text="Details"
            onClick={() => scrolltoHash("destination-details")}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full max-w-7xl gap-10 py-8">
        <div className="">
          <Image
            src={`/images/destinations/${params.slug}/location.png`}
            width={600}
            height={411}
            alt={"location"}
          />
        </div>
        <div className="flex flex-col ">
          <span className="subtitle-1 text-center">Location</span>
          <p className="mt-7">{content.descriptions.location}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full max-w-7xl gap-10 py-8">
        <div className="flex flex-col ">
          <span className="subtitle-1 text-center">Nature</span>
          <p className="mt-7">{content.descriptions.nature}</p>
        </div>
        <div className="">
          <Image
            src={`/images/destinations/${params.slug}/nature.png`}
            width={600}
            height={411}
            alt={"nature"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full max-w-7xl gap-10 py-8">
        <div className="">
          <Image
            src={`/images/destinations/${params.slug}/spots.png`}
            width={600}
            height={411}
            alt={"spots"}
          />
        </div>
        <div className="flex flex-col ">
          <span className="subtitle-1 text-center">Spots</span>
          <p className="mt-7">{content.descriptions.spots}</p>
        </div>
      </div>
      <div
        id="destination-details"
        className="grid grid-cols-2 w-full max-w-7xl gap-10 mb-28 py-8 "
      >
        <div className="flex flex-col w-full max-w-[600px]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="subtitle-1 flex justify-center">
                What includes
              </span>
              <div className="mt-7">
                <ul>
                  {content.package.includes.map((item) => {
                    return (
                      <li key={item} className="my-1">
                        - {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex flex-col ">
                <span>Price: ${content.package.price}</span>
                <span>Level: {content.package.level}</span>
              </div>
              <Button type="primary" text="Book" />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={`/images/destinations/${params.slug}/company.png`}
            width={600}
            height={411}
            alt={"company"}
          />
        </div>
      </div>
    </section>
  );
};
export default Destination;
