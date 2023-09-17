"use client";
import React, { useState } from "react";
import { careerDevelopmentResources } from "@/constant/Index";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Job Searching");

  const selectedCategoryObject = careerDevelopmentResources.find(
    (resource) => resource.category === selectedCategory
  ) || { links: [] };

  return (
    <div className="max-h-screen flex items-center justify-center my-3">
      <div className="max-w-screen-lg w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Career Development Resources
        </h1>
        <div className="mb-4">
          <label htmlFor="category" className="text-gray-600">
            Select a Category:
          </label>
          <select
            id="category"
            className="block w-full mt-1 p-2 border rounded-md bg-white-100"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            {careerDevelopmentResources.map((resource, index) => (
              <option key={index} value={resource.category}>
                {resource.category}
              </option>
            ))}
          </select>
        </div>
        <ul className="space-y-2">
          {selectedCategoryObject.links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
