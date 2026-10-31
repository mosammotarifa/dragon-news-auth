import AllCategories from "@/component/homepage/All-categories";
import DragonNews from "@/component/homepage/Dragon-News";
import MixedSection from "@/component/homepage/Mixed-Section";
import React from "react";

const HomePage = () => {
  return (
    <div className=" grid grid-cols-4 gap-5 container mx-auto">
      <div className="col-span-1">
        <AllCategories />
      </div>
      <div className="col-span-2">
        <DragonNews />
      </div>
      <div className="col-span-1"> <MixedSection/></div>
    </div>
  );
};

export default HomePage;
