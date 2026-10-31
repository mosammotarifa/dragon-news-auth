import { DragonNewsData } from "@/data";
import React from "react";


const RelatedNews = ({ layout = "horizontal" }) => {
  const data = DragonNewsData;
  console.log(data);
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-5 border-b pb-3">Related News</h2>

      <div
        className={`${layout === "vertical" ? "flex " : "grid grid-cols-2"}gap-5`}
      >
        {data.slice(9, 12).map((news) => (
          <div
            key={news.id}
            className="border border-gray-200 mt-5 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <span className="inline-block text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full capitalize mb-3">
                {news.rating.badge}
              </span>

              <h3 className="text-lg font-bold text-gray-800 leading-6 mb-3">
                {news.title}
              </h3>

              <p className="text-sm text-gray-500">
                Published:
                {new Date(news.author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
