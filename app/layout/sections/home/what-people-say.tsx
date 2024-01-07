import { reviews } from "@/app/data";
import { ReviewCard } from "../../entities/review-card";

export const WhatPeopleSay = () => {
  return (
    <section className="section flex flex-col items-center">
      <h3 className="subtitle-1 mt-24 text-center">What people say</h3>
      <div className="grid grid-flow-row md:grid-flow-col gap-10 mt-7 w-fit">
        {reviews.map((item, i) => {
          return <ReviewCard key={i} {...item} />;
        })}
      </div>
    </section>
  );
};
