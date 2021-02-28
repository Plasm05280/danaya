import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../components/screenHeader";

export default function Retrait() {
  return (
    <View style={style.container}>
      <ScreenHeader title="Retrait"></ScreenHeader>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
