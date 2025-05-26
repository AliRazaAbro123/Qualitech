import AboutHome from "@/components/About/Home";
import ContactHome from "@/components/Contact/Home";
import HomePage from "@/components/Home/HomePage";
import ServicesHome from "@/components/Services/Home";
import Home from "@/components/Team/Home";
import React from "react";

function page() {
  return (
    <div>
      <div className="Home">
        <HomePage />
      </div>
      <div className="About">
        <AboutHome />
      </div>
      <div className="Services">
        <ServicesHome />
      </div>
      <div className="Team">
        <Home />
      </div>
      <div className="Contact">
        <ContactHome />
      </div>
    </div>
  );
}

export default page;
