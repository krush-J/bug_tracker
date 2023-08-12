import React from "react";
import bug_png from '../assets/bug_png.png' 

const BugHomeScreen = ({message}) => {
  return (
    <div className="min-h-screen flex w-full items-center justify-center">
      <div className="relative z-10">
        {/* Your content goes here */}
        <div class=''>
        <img class='w-[20rem] animate-bounce' src={bug_png} alt=''/>
        </div>
        <h1 className="text-4xl text-center font-bold text-white">{message?message:'Welcome to bug tracker'}</h1>
      </div>
    </div>
  );
};

export default BugHomeScreen;
