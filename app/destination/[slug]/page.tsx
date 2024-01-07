"use client";

import { BookDialog } from "@/app/layout/entities/book-dialog";
import { SectionImage } from "@/app/layout/shared/section-image";
import { scrolltoHash } from "@/app/layout/utils";
import { destinations } from "@/app/data";
import { Button } from "@/components/ui/button";
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
      <div className="flex flex-col w-full max-w-7xl items-center mt-10 mb-8">
        <h1 className="h2 text-center">{content.title}</h1>
        <p className="mt-5 w-full max-w-4xl text-center">
          {content.descriptions.main}
        </p>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <BookDialog />
          <Button
            variant={"outline"}
            size={"lg"}
            onClick={() => scrolltoHash("destination-details")}
          >
            Learn more
          </Button>
        </div>
      </div>
      <span className="subtitle-1 visible md:hidden text-center">Location</span>
      <div className="grid grid-row-2 md:grid-cols-2 w-full justify-center max-w-7xl gap-10 py-8">
        <SectionImage
          src={`/images/destinations/${params.slug}/location.png`}
          alt="location"
        />
        <div className="flex flex-col">
          <span className="subtitle-1 hidden md:block text-center">
            Location
          </span>
          <p className="mt-0 md:mt-7">{content.descriptions.location}</p>
        </div>
      </div>
      <span className="subtitle-1 visible md:hidden text-center">Nature</span>
      <div className="grid grid-row-2 md:grid-cols-2 w-full justify-center max-w-7xl gap-10 py-8">
        <div className="flex flex-col ">
          <span className="subtitle-1 hidden md:block text-center">Nature</span>
          <p className="mt-0 md:mt-7">{content.descriptions.nature}</p>
        </div>
        <SectionImage
          src={`/images/destinations/${params.slug}/nature.png`}
          alt="nature"
          isReverse
        />
      </div>
      <span className="subtitle-1 visible md:hidden text-center">Spots</span>
      <div className="grid grid-row-2 md:grid-cols-2 w-full justify-center max-w-7xl gap-10 py-8">
        <SectionImage
          src={`/images/destinations/${params.slug}/spots.png`}
          alt="spots"
        />
        <div className="flex flex-col ">
          <span className="subtitle-1 hidden md:block text-center">Spots</span>
          <p className="mt-0 md:mt-7">{content.descriptions.spots}</p>
        </div>
      </div>
      <span className="subtitle-1 visible md:hidden text-center">Details</span>
      <div
        id="destination-details"
        className="grid grid-row-2 md:grid-cols-2 w-full justify-center max-w-7xl gap-10 mb-28 py-8 "
      >
        <div className="flex flex-col w-full max-w-[600px]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="subtitle-1 hidden md:block text-center">
                Details
              </span>
              <div className="grid grid-rows-2 gap-1">
                <span>Price: ${content.package.price}</span>
                <span>Level: {content.package.level}</span>
              </div>
              <span className="subtitle-3 block mt-7">What includes:</span>
              <div className="mt-5">
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
            <div className="mt-5">
              <BookDialog triggerClass="w-full" />
            </div>
          </div>
        </div>
        <SectionImage
          src={`/images/destinations/${params.slug}/company.png`}
          alt="details"
          isReverse
        />
      </div>
    </section>
  );
};
export default Destination;
