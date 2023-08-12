import React from "react";
import BugPNG from "../assets/bug_png.png";
import { useDispatch, useSelector } from "react-redux";
import { logged_out } from "../redux/Actions";


// logout icon
const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
      clipRule="evenodd"
    />
  </svg>
);

const Navbar = () => {
    const dispatch = useDispatch()
  const user = useSelector((state) => state.BugReducer.user);
  return (
    <div class="flex w-full justify-between h-[3rem] shadow-md bg-gray-800 text-gray-400 py-2 px-4">
      <div class="flex items-center">
        <img src={BugPNG} alt="" className="w-[2rem] h-[2rem] rotate-45" />
        <span class="font-mono">BugTracker</span>
      </div>
      <div class="flex items-center gap-x-1">
        <span className="font-mono">Welcome {user}</span>
        <span 
        class='bg-gray-900 p-1 rounded-full hover:cursor-pointer' 
        onClick={()=>dispatch(logged_out())}>
          <LogoutIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
