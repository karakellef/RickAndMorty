import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";


const AppNavigator = () => {
  return (
    <FeedNavigator/>
  );
};

export default AppNavigator;
