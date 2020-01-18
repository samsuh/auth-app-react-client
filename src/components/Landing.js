import React from "react";
import Hero from "./landing/Hero.js";
import Tiers from "./landing/Tiers.js";
import About from "./landing/About.js";
import Devs from "./landing/Devs.js";
import Contact from "./landing/Contact.js";

const Landing = () => {
  return (
    <div>
      <div className='background'>
        <Hero />
      </div>
      <About />
      <Tiers />
      <Devs />
      <Contact />
    </div>
  );
};

export default Landing;
