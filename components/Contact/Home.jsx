"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/app/loading";

function Home() {
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
      {/* <div className="w-full h-auto py-8 flex justify-center items-center flex-col mobile:p-4 gap-6 wide:w-[90rem] mobile:mb-2"> */}
      <div
      className={`w-full h-auto py-6 flex justify-center items-center flex-col mobile:p-4 gap-6 wide:w-[90rem] mobile:mb-2 ${
        loading ? "blur-sm pointer-events-none" : ""
      }`}
    >
        <div className="flex items-center justify-center w-full h-auto">
          <h1 className="text-4xl font-bold tracking-wider title tablet:text-3xl mobile:text-3xl">
            Contact <span className="text-blue-700">Us!</span>
          </h1>
        </div>
        <div className="flex items-center justify-center w-full h-auto">
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
                className="w-1/2 p-3 rounded-md outline-none mobile:w-full mobile:p-4 bg-blue-gray-900 placeholder:text-gray-500 text-white"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="w-1/2 p-3 rounded-md outline-none mobile:w-full mobile:p-4 bg-blue-gray-900 placeholder:text-gray-500 text-white"
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
                className="w-full h-[12rem] p-3 bg-blue-gray-900 rounded-md outline-none placeholder:text-gray-500 text-white resize-none"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-auto h-auto px-8 py-2 mt-6 mb-4 font-semibold text-center bg-blue-700 text-white rounded-md mobile:w-full mobile:py-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;