  import AboutHome from "@/components/About/Home";
  import ContactHome from "@/components/Contact/Home";
  import HomePage from "@/components/Home/HomePage";
  import Home from "@/components/Portfolio/Home";
  import ServicesHome from "@/components/Services/Home";
  import React from "react";

  export const metadata = {
    title: "Ali Raza | Home",
  };

  function page() {

    return (
      <div>
        <div className="Home">
          <HomePage />
        </div>
        <div className="Services">
          <ServicesHome />
        </div>
        <div className="Portfolio">
          <Home />
        </div>
        <div className="About">
          <AboutHome />
        </div>
        <div className="Contact">
          <ContactHome />
        </div>
      </div>
    );
  }

  export default page;
