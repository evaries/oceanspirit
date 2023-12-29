"use client";
import { Dispatch, SetStateAction, useState } from "react";
import FAQItem from "../../widgets/FAQItem";
import { faq } from "@/app/data";

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
  const [openIndex, setOpenIndex] = useState<number>(-1);
  return (
    <section className="section">
      <h3 className="subtitle-1 mt-24 text-center">
        Frequently asked questions
      </h3>
      <div className="flex flex-col w-full items-center mt-4">
        {faq.map((item) => {
          return (
            <FAQItem
              key={item.id}
              item={item}
              activeIndex={openIndex}
              setIndex={setOpenIndex}
            />
          );
        })}
      </div>
    </section>
  );
};
export default FAQ;
