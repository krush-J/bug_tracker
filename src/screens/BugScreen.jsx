import React from "react";
import { Bug, BugMenu, CurrentBugs, NewBug, TrashBugs } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BugHomeScreen from "./BugHomeScreen";

const BugScreen = () => {
  return (
    <div class="flex-1 min-h-[92vh]">
      <BrowserRouter>
        <div class="flex h-[92vh]">
          <div class="flex justify-center items-center">
            <BugMenu />
          </div>
          <div class="flex w-full overflow-hidden">
            <Routes>
              <Route path="/" Component={BugHomeScreen} />
              <Route path="/bugList" Component={CurrentBugs} />
              <Route path="/bugTrash" Component={TrashBugs} />
              <Route path="/newBug" Component={NewBug} />
              <Route path="/Bug" Component={Bug} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default BugScreen;
