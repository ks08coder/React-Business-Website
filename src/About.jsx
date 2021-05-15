import React from "react";
import Common from "./Common";
import Aboutimg from "./img/about.jpg";

const About = () => {
  return (
    <>
      <Common title="Welcome to the About " linkv="/Contact" btntitle="Contact Us" imgsrc={Aboutimg} aboutline="Join our community for the best service. Contact us for more" />
    </>
  );
};

export default About;
