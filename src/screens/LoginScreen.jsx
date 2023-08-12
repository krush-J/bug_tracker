import React, {useState } from "react";
import { useDispatch } from "react-redux";
import Bug_Png from "../assets/bug_png.png";
import {logged_in} from '../redux/Actions'
const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const doLogin = () => {
    dispatch(logged_in({username}));
  }
  return (
    <div class="flex font-thin text-gray-200 flex-wrap items-center justify-center w-[15rem] min-h-[20rem] shadow-sm shadow-gray-600 bg-gray-800">
      <div class="absolute max-w-[20rem] max-h-[20rem] opacity-40">
        <img src={Bug_Png} id="bug" class="rotate-45" alt='' />
      </div>
      <div class="relative inset-0">
        <div class="mb-4">
          <input
            type="text"
            value={username}
            class="outline-none border-b bg-transparent p-2 border-gray-50"
            placeholder="username"
            onFocus={() => {
              document.getElementById("bug").classList.add("rotate-90");
            }}
            onBlur={() => {
              document.getElementById("bug").classList.remove("rotate-90");
            }}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div class="flex justify-center">
          <button class="bg-purple-600 w-[6rem] rounded-sm p-1" onClick={doLogin}>login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
