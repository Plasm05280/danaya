import React, { Children } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Svg, { Path } from "react-native-svg";

//////////////////////////////////////////////////////////////////
import Home from "../screens/home";
import Chat from "../screens/chat";
import Profile from "../screens/profile";
import colors from "../styles/colors";
///////////////////////////////////////////////////::::::::::::::::

/////////////////////////////////////////////////////////////

export default function Bottom() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        showLabel: true,
        activeTintColor: colors.COLOR_MAIN_LIGHT,
        style: {
          height: 60,
          elevation: 0,
          borderTopWidth: 0,
          //backgroundColor: "transparent",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="menu"
              size={focused ? 34 : 24}
              color={color}
            />
          ),
          tabBarLabel: "Acceuil",
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Prices"
        component={Chat}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="signal-cellular-3"
              size={focused ? 34 : 24}
              color={color}
            />
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="A propos"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "information" : "information-outline"}
              size={focused ? 34 : 24}
              color={color}
            />
          ),
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
}
