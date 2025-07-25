import React from "react";
import underConstruction from "@/assets/under_construction.svg";

const TempEmptyMobile: React.FC = () => (
  <div className="flex flex-col items-center text-center justify-center pl-14 pr-14 pt-20 min-w-[412px]">
    <h2 className="mb-4">Mobile version coming soon :)</h2>
    <p className="text-xl text-center leading-6.5 mb-4">
      Our mobile version is still under construction. In the meantime, please
      access the portfolio from your computer or laptop.
      <br />
      Thank you so much!
    </p>
    <img src={underConstruction} alt="" />
  </div>
);

export default TempEmptyMobile;
