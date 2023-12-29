import Advantages from "./components/pages/home/Advantages";
import Contacts from "./components/pages/home/Contacts";
import Destinations from "./components/pages/home/Destinations";
import FAQ from "./components/pages/home/FAQ";
import Hero from "./components/pages/home/Hero";
import OwnDestination from "./components/pages/home/OwnDestination";
import WhatPeopleSay from "./components/pages/home/WhatPeopleSay";
import WhyUs from "./components/pages/home/WhyUs";

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
