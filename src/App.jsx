import React from "react";
import { useSelector } from "react-redux";
import { HomeScreen, LoginScreen, ScreenSizeError } from "./screens";

const App = () => {
  const user = useSelector((state) => state.BugReducer.user);
  return (
    <div class="flex min-h-screen max-w-full bg-gray-900 items-center justify-center">
      {window.innerWidth <= 800 ? (
        <ScreenSizeError />
      ) : !user ? (
        <LoginScreen />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
};

export default App;
