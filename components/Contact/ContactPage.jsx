"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/app/loading";


function ContactPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const FormHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
  
    const formData = { username, email, message };
  
    try {
      const response = await fetch("/api/SendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Your message has been sent successfully!", {
          position: "top-center",
        });
        setUsername("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to send your message.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };
  
  

  return (
    <div className="flex items-center justify-center w-full h-auto">
      <ToastContainer /> 
      {loading && <Loading />}
      <div
      className={`w-full h-auto wide:h-screen py-6 flex justify-center items-center flex-col mobile:p-4 mobile:py-6 wide:w-[90rem] mobile:mb-2 ${
        loading ? "blur-sm pointer-events-none" : ""
      }`}
    >
        <div className="flex items-center justify-center w-full h-auto">
          <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
            Contact <span className="text-blue-700">Me!</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto">
          <form
            onSubmit={FormHandler}
            className="w-1/2 h-[30rem] flex justify-center items-center flex-col gap-4 mobile:w-full"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-4 mobile:flex-col">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your Full Name"
                className="w-1/2 p-3 rounded-md outline-none mobile:w-full mobile:p-4 bg-blue-gray-900 placeholder:text-gray-600"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="w-1/2 p-3 rounded-md outline-none mobile:w-full mobile:p-4 bg-blue-gray-900 placeholder:text-gray-600"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center w-full h-auto">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full h-[12rem] p-3 bg-blue-gray-900 rounded-md outline-none placeholder:text-gray-600 resize-none"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-auto h-auto px-8 py-2 mt-2 font-semibold text-center bg-blue-700 rounded-md mobile:w-full mobile:py-3"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center items-center gap-10 mobile:gap-10 flex-row mt-[1rem]">
            {/* Important: Facebook icon with custom style */}
            <h1 className="mr-2 text-lg font-semibold">Contact Me At :</h1>
            <Link
              href={"https://www.facebook.com/profile.php?id=61552489011042"} target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                bounce
                size="lg"
                style={{ color: "blue" }}
              />
            </Link>

            {/* Explanation: Instagram icon with custom style */}
            <Link href={"https://www.instagram.com/ud.programming/"} target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                beat
                style={{ color: "blue" }}
                size="lg"
              />
            </Link>

            {/* Explanation: LinkedIn icon with custom style */}
            <Link href={"https://www.linkedin.com/in/ali-raza-8669a52b8/"} target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                bounce
                style={{ color: "blue" }}
                size="lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
