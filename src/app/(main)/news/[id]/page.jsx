import MixedDaynamic from "@/component/homepage/Mixed-Daynamic";

import RelatedNews from "@/component/shared/RelatedNews";
import { DragonNewsData } from "@/data";

import { Button } from "@heroui/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = DragonNewsData.find((news) => news.id === id);
  if (!data) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 container mx-auto mb-20">
      <div className="max-w-4xl mx-auto p-5 col-span-9">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src={data.author.img}
            alt={data.author.name}
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h2 className="font-semibold">{data.author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(data.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src={data.image_url}
          alt={data.title}
          className="w-full rounded-lg"
        />

        {/* Details */}
        <p className="text-gray-700 leading-8 mt-5">{data.details}</p>

        {/* Rating */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 border-t border-gray-200 pt-4">
          {/* News Information */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="font-semibold text-yellow-500">
              ⭐ {data.rating.number}
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">
              {data.rating.badge}
            </span>

            <span>👁 {data.total_view} views</span>
          </div>

          {/* Back Button */}
          <Link href={"/"}>
            <Button
              variant="bordered"
              className="border-gray-300 rounded-md font-semibold px-5"
            >
              ← Back To All News
            </Button>
          </Link>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        <RelatedNews layout="vertical" />
      </div>
      <div className="col-span-3 ml-2">
        <div>
          <MixedDaynamic />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
