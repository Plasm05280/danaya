import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScreenHeader from "../components/screenHeader";

export default function Crypto() {
  return (
    <View style={style.container}>
      <ScreenHeader title="Cryptomonnaie"></ScreenHeader>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
