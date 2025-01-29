"use client"
import React from "react";

const ErrorPage = ({ reset }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg text-gray-600 mt-4">
        Something went wrong. We're working on it.
      </p>
      <button
        className="mt-6 text-xl text-blue-500 underline hover:text-blue-700"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
