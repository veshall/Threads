import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Feed from "./screens/Feed";
import Search from "./screens/Search";
import NewThread from "./screens/NewThread";
import Activity from "./screens/Activity";
import Profile from "./screens/Profile";
import Following from "./screens/Following";
import ThreadsLogo from "./components/ThreadsLogo";

const TopTabsGroupNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="For you" component={Feed} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
};

const TabGroupNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 55 },
        tabBarIcon: ({ color, focused }) => {
          const iconName =
            route.name === "Home"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Search"
              ? focused
                ? "magnify"
                : "magnify"
              : route.name === "NewThread"
              ? focused
                ? "note-edit"
                : "note-edit-outline"
              : route.name === "Activity"
              ? focused
                ? "cards-heart"
                : "cards-heart-outline"
              : route.name === "Profile"
              ? focused
                ? "account-circle"
                : "account-circle-outline"
              : null;

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={32}
              color={focused ? "black" : "gray"}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={TopTabsGroupNavigator}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: (props) => <ThreadsLogo />,
        }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="NewThread" component={NewThread} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroupNavigator />
    </NavigationContainer>
  );
}
