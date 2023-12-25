import Advantages from "./components/sections/home/Advantages";
import Contacts from "./components/sections/home/Contacts";
import Destinations from "./components/sections/home/Destinations";
import FAQ from "./components/sections/home/FAQ";
import Hero from "./components/sections/home/Hero";
import OwnDestination from "./components/sections/home/OwnDestination";
import WhatPeopleSay from "./components/sections/home/WhatPeopleSay";
import WhyUs from "./components/sections/home/WhyUs";

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
