"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { AccordionFAQ } from "../../entities/AccordionFAQ";

export type FaqItemType = {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  activeIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

const FAQ = () => {
  return (
    <section className="section">
      <h3 className="subtitle-1 mt-24 text-center">
        Frequently asked questions
      </h3>
      <div className="flex w-full max-w-[900px] mx-auto items-center mt-4">
        <AccordionFAQ />
      </div>
    </section>
  );
};
export default FAQ;
