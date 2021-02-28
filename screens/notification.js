import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Messages from "../components/messages";
import ScreenHeader from "../components/screenHeader";

export default function notification() {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Notifications"></ScreenHeader>
      <Messages></Messages>
      <Messages status="read"></Messages>
      <Messages status="read"></Messages>
      <Messages status="read"></Messages>
      <Messages status="read"></Messages>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    //backgroundColor: "#ffe0f0",
    alignItems: "center",
    paddingLeft: 15,
  },
});
