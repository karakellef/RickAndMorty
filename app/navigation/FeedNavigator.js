import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EpisodeScreen from "../screens/EpisodesScreen";
import EpisodeDetailsScreen from "../screens/EpisodeDetailsScreen";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Episodes" component={EpisodeScreen} />
    <Stack.Screen name="EpisodeDetails" component={EpisodeDetailsScreen} />
    <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
