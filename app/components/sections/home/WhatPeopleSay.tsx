import { reviews } from "@/app/data";
import ReviewCard from "../../widgets/ReviewCard";

const WhatPeopleSay = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="subtitle-1 mt-24 text-center">What people say</h3>
      <div className="grid grid-cols-3 gap-10 mt-7 w-fit">
        {reviews.map((item, i) => {
          return <ReviewCard key={i} {...item} />;
        })}
      </div>
    </section>
  );
};

export default WhatPeopleSay;
