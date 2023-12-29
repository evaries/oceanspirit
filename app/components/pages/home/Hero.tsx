"use client";

import { Button } from "@/components/ui/button";

import { scrolltoHash } from "../../utils";

const Hero = () => {
  return (
    <>
      <div
        className="absolute inset-0 w-full h-[100vh] bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url('/images/video.png')`,
        }}
      />
      <section className="section relative h-[calc(100vh-104px)]  flex items-end justify-center ">
        <div className="flex flex-col justify-center items-center align-bottom">
          <h1 className="h3 text-center">Surf trips in Indonesia</h1>
          <p className="p pt-4 text-center">
            have an unforgettable surfing adventure with us
          </p>

          <div className="grid grid-cols-2 gap-9 pt-10 pb-16">
            <Button size="lg" onClick={() => scrolltoHash("destinations")}>
              BOOK
            </Button>
            <Button
              size="lg"
              variant="transparent"
              onClick={() => scrolltoHash("advantages")}
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
