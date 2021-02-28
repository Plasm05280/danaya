import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Button(props) {
  return (
    <TouchableOpacity style={styles.Button} {...props}>
      <Text style={{ fontSize: 17, color: "white" }}>{props.title}</Text>
      {props.icon ? (
        <MaterialCommunityIcons
          size={24}
          color="white"
          name={props.icon}
        ></MaterialCommunityIcons>
      ) : undefined}
    </TouchableOpacity>
  );
}

export function ButtonOffset(props) {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.ButtonOffset}
      onPress={() => Navigation.navigate("register")}
    >
      <Text style={{ fontSize: 17, color: "#0084ff", fontWeight: "bold" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: 300,
    height: 60,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#0084ff",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 10,
    flexDirection: "row",
  },
  ButtonOffset: {
    width: 300,
    height: 60,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#e6eefc",
  },
});
