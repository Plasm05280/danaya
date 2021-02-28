import React from "react";
import {} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login";
import Register from "../screens/register";
import Forgot from "../screens/forgotPass";
import Home from "../routes/bottomTab";
import notification from "../screens/notification";
import Depot from "../screens/depot";
import History from "../screens/history";
import Crypto from "../screens/crypto";
import Retrait from "../screens/retrait";
import Profile from "../screens/profile";

export default function Stack() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "Connectez-vous à votre compte" }}
        ></Stack.Screen>

        <Stack.Screen
          name="register"
          component={Register}
          options={{ title: "Créer un compte Danaya" }}
        ></Stack.Screen>
        <Stack.Screen
          name="forgot"
          component={Forgot}
          options={{ title: "Récuperer le mot passe" }}
        ></Stack.Screen>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Notification"
          component={notification}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="Depot"
          component={Depot}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Retrait"
          component={Retrait}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Crypto"
          component={Crypto}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
