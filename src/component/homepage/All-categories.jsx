import React from "react";
import RelatedNews from "../shared/RelatedNews";
import { categories } from "@/catagory";

const AllCategories = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <div>
        {categories.map((category) => (
          <span
            key={category.id}
            className="flex mb-2 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
          >
            {category.name}
          </span>
        ))}
      </div>
      <div>
        <RelatedNews />
      </div>
    </div>
  );
};

export default AllCategories;
