import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import Store from "./store/store";

import Stack from "./routes/stackRoutes";

export default function App() {
  return (
    <Provider store={Store}>
      <Stack></Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
