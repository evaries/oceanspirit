import { Advantages } from "./layout/sections/home/advantages";
import { Contacts } from "./layout/sections/home/сontacts";
import { Destinations } from "./layout/sections/home/destinations";
import { FAQ } from "./layout/sections/home/FAQ";
import { Hero } from "./layout/sections/home/hero";
import { OwnDestination } from "./layout/sections/home/own-destination";
import { WhatPeopleSay } from "./layout/sections/home/what-people-say";
import { WhyUs } from "./layout/sections/home/why-us";

const Home = () => {
  return (
    <main>
      <Hero />
      <Advantages />
      <WhyUs />
      <Destinations />
      <OwnDestination />
      <WhatPeopleSay />
      <FAQ />
      <Contacts />
    </main>
  );
};

export default Home;
