"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { categoryFilters } from "@/constant/Index";
import { categoryNavNormal, categoryNavDrop } from "@/constant/Index";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto flex-row">
        {categoryNavNormal.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "bg-[#9747FF] text-white mb-2" // Accent color for selected button.
                : "font-normal bg-purple-50 mb-2" // Unselected button color.
            } xl px-4 py-3 rounded-lg capitalize whitespace-nowrap hover:bg-purple-300 hover:text-black mb-2`} // Hover accent color
          >
            {filter}
          </button>
        ))}
        <button
          id="dropdownDelayButton"
          data-dropdown-toggle="dropdownDelay"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          className="font-normal bg-purple-50 font-medium xl px-4 py-3 rounded-lg capitalize whitespace-nowrap hover:bg-purple-300 hover:text-black mb-2"
          type="button"
        >
          More
        </button>
      </ul>
    </div>
  );
};

export default Categories;
