import Image from "next/image";
import React from "react";

const Header = () => {
  const today = new Date();

  return (
    <div className="w-full b border-gray-200 bg-white py-4">
      <div className="flex justify-center">
        <Image
          src={"/assets/logo.png"}
          alt="header logo"
          width={320}
          height={70}
          className="h-auto w-[240px] sm:w-[320px]"
        />
      </div>
      <div>
        <p className="mt-2 text-center text-sm text-gray-600">
          Journalism without Fear or Favour
        </p>
        <p className="mt-2 text-center text-xs text-gray-500">
          {today.toLocaleDateString("en-GB", {
            
            timeZone: "Asia/Dhaka",
            weekday:"long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Header;

