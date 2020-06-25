import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CameraTab from "./pages/CameraTab";
import VideoTab from "./pages/VideoTab";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 60,
            borderColor: "#000000",
            shadowOpacity: 0,
            elevation: 0,
          },
          keyboardHidesTabBar: true,
          inactiveTintColor: "#000000",
          activeTintColor: "#d0d0d0",
          activeBackgroundColor: "#7d13a1",
          tabStyle: {
            justifyContent: "center",
          },
        }}

        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused }) => {
        //     let selectConfig;

        //     switch (route.name) {
        //       case "Camera":
        //         break;
        //       case "Player de vídeo":
        //         break;
        //     }
        //   },
        // })}
      >
        <Tab.Screen name="Camera" component={CameraTab} />
        <Tab.Screen name="Player de vídeo" component={VideoTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
