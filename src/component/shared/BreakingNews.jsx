import { DragonNewsData } from "@/data";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = async () => {
  return (
    <div className="flex container mx-auto">
      <h3 className="bg-pink-500 text-xl font-bold text-white p-2.5">Latest</h3>
      <Marquee className="bg-gray-200 pt-2 pb-2 " pauseOnHover>
        <div>
          {DragonNewsData.map((news) => (
            <span key={news.id}>
              <span className="mr-2 ml-2">●</span>
              <Link href={`/news/${news.id}`}>
                <span> {news.title}</span>
              </Link>
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
