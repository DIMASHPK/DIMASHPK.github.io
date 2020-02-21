import React from "react";
import { SearchingPanel } from "./searchingPanel/SearchingPanel";
import { AllFriends } from "./allFriends/AllFriends";
import "./mainPage.scss";

export const MainPage = () => (
  <>
    <SearchingPanel />
    <AllFriends />
  </>
);
