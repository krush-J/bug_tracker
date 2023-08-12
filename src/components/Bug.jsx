import React from "react";
import { useSelector } from "react-redux";

const Bug = () => {
  const bug = useSelector((state) => state.BugReducer.bug);
  return (
    <div class="lg:w-2/3 w-full mx-auto overflow-auto gap-2 md:gap-4 lg:gap-8">
      <div class="text-gray-300 text-4xl pb-4 text-center w-full">
        <span>Bug Detail</span>
      </div>
      <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">id</span>
          <br />
          <span class="font-medium text-gray-100">{bug.id}</span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">founder</span>
          <br />
          <span class="font-medium text-gray-100">{bug.founder}</span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">bug name</span>
          <br />
          <span class="font-medium text-gray-100">{bug.name}</span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">bug information</span>
          <br />
          <span class="font-medium text-gray-100">{bug.description}</span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">when bug found</span>
          <br />
          <span class="font-medium text-gray-100">{bug.found_time}</span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">who resolved the bug</span>
          <br />
          <span class="font-medium text-gray-100">
            {bug.resolver ? bug.resolver : "NA"}
          </span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">bug status</span>
          <br />
          <span class="font-medium text-gray-100">
            {bug.resolved ? "resolved" : "NA"}
          </span>
        </div>
        <div class="shadow-sm shadow-gray-500 m-2 md:m-4 p-2 md:p-4 lg:px-8">
          <span class="font-thin text-gray-400">time when bug resolved</span>
          <br />
          <span class="font-medium text-gray-100">
            {bug.resolved_time ? bug.resolved_time : "NA"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bug;
