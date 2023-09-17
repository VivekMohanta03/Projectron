import React from "react";
import { quotes } from "@/constant/Index";
const Page = () => {
  return (
    <div className="min-h-screen flex my-3 items-center justify-center">
      <div className="max-w-screen mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Inspirational Quotes
        </h1>
        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <blockquote key={index} className="text-gray-600 italic">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
