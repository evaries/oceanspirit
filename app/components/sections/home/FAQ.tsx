"use client";
import { Dispatch, SetStateAction, useState } from "react";
import FAQItem from "../../widgets/FAQItem";

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
    <section>
      <h3 className="subtitle-1 mt-24 text-center">
        Frequently asked questions
      </h3>
      <div className="flex flex-col w-full items-center mt-4">
        {items.map((item) => {
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

const items = [
  {
    id: 0,
    question: "Can i come to the surf camp if i’ve never surfed before?",
    answer:
      "Sure, you can. You will start learning to surf from the very basics at the beginners group. All groups are formed based on our students skills and take place at the right locations for your surf level.",
  },
  {
    id: 1,
    question: "Can i come to the surf camp if i’ve never surfed before?",
    answer:
      "Sure, you can. You will start learning to surf from the very basics at the beginners group. All groups are formed based on our students skills and take place at the right locations for your surf level.",
  },
  {
    id: 2,
    question: "Can i come to the surf camp if i’ve never surfed before?",
    answer:
      "Sure, you can. You will start learning to surf from the very basics at the beginners group. All groups are formed based on our students skills and take place at the right locations for your surf level.",
  },
  {
    id: 3,
    question: "Can i come to the surf camp if i’ve never surfed before?",
    answer:
      "Sure, you can. You will start learning to surf from the very basics at the beginners group. All groups are formed based on our students skills and take place at the right locations for your surf level.",
  },
  {
    id: 4,
    question: "Can i come to the surf camp if i’ve never surfed before?",
    answer:
      "Sure, you can. You will start learning to surf from the very basics at the beginners group. All groups are formed based on our students skills and take place at the right locations for your surf level.",
  },
];
