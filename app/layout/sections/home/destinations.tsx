"use client";

import { destination } from "@/app/data";
import { Fragment } from "react";
import { Destination } from "../../entities/destination";

export const Destinations = () => {
  return (
    <section id="destinations" className="section">
      <h3 className="subtitle-1 mt-20 text-center">Destinations</h3>
      {destination.map((item, index) => {
        return (
          <Fragment key={index}>
            <Destination {...item} />
          </Fragment>
        );
      })}
    </section>
  );
};
