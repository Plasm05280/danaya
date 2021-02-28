import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../styles/colors";

import { Fontisto } from "@expo/vector-icons";

export default function adsCard(props) {
  return (
    <TouchableHighlight style={styles.container}>
      {props.children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 100,
    backgroundColor: colors.SECONDARY_LIGHT,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    flexDirection: "row",
    elevation: 1,
  },
  title: {
    fontSize: 15,
    color: "black",
    marginTop: 20,
  },
});
