import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Messages(props) {
  return (
    <View
      style={[
        styles.container,
        { ...{ opacity: props.status === "read" ? 0.4 : 1 } },
      ]}
    >
      <Text>
        Votre dépôt de 150 000 FCFA été effectué avec succès. ID de dépôt est
        DP123001
      </Text>
      <Text style={{ textAlign: "right", marginTop: 10, color: "#858585" }}>
        29 jan 2021, 16:21
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    minHeight: 90,
    backgroundColor: colors.SECONDARY_LIGHT,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
});
