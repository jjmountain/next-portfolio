import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-center overflow-hidden">
      {/* Text container */}

      <div className="text-center md:text-left lg:p-20">
        <h2 className="w-max text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Hello there!
        </h2>
        <h2 className="text-xl md:text-3xl">
          I'm a full-stack software engineer with over 3 years of experience
          helping businesses to
        </h2>
      </div>
      {/* Image container */}
      {/* <div className="block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-7/12 ">
          <img
            src={userData.avatarUrl}
            alt="avatar"
            className="rounded-full shadow-xl"
          />
          <div className="flex flex-row justify-between mt-4"></div>
        </div>
      </div> */}
    </div>
  );
}
