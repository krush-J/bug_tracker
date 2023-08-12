import React from "react";
import Bug_Png from "../assets/bug_png.png";

const ScreenSizeError = () => {
  return (
    <div class="flex font-thin text-gray-200 flex-wrap items-center justify-center">
      <div class="max-w-[20rem] max-h-[20rem] -mt-14 sm:-mt-0">
        <img src={Bug_Png} id="bug" class="rotate-45" alt=''/>
      </div>
      <div class="relative inset-0">
        <div class="font-semibold">The application doesn't support small screen sizes</div>
      </div>
    </div>
  );
};

export default ScreenSizeError;
