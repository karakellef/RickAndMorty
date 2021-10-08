import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { navigationRef } from "./app/navigation/rootNavigation";


export default function App() {
  return ( <NavigationContainer ref={navigationRef} theme={navigationTheme}>
  <AppNavigator />
</NavigationContainer>
  );
}
