import { DragonNewsData } from "@/data";
import Link from "next/link";
import React from "react";

const DragonNews = () => {
  return (
    <div className="grid grid-cols-1 mb-20 gap-6">
      {DragonNewsData.slice(0, 3).map((news) => (
        <div
          key={news.id}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Author Info */}
          <div className="bg-gray-100 p-4 flex items-center gap-3">
            <img
              src={news.author.img}
              width={40}
              height={40}
              alt={news.author.name}
              className="rounded-full w-10 h-10 object-cover"
            />

            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                {news.author.name}
              </h2>
              <p className="text-xs text-gray-500">
                {new Date(news.author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* News Content */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {news.title}
            </h2>

            <Link href={`/news/${news.id}`}>
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
            </Link>

            <p className="text-sm text-gray-600 leading-7">{news.details}</p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span className="text-sm font-semibold text-gray-700">
                {news.rating.number}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {news.rating.badge}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              <span>👁</span> {news.total_view} views
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonNews;
