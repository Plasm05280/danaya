import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const BitcoinText = (props) => {
  let Crypto = { icon: "", color: "", price_unit: "" };
  switch (props.type) {
    case "BTC":
      Crypto = {
        icon: "bitcoin",
        color: "#f7931a",
        price_unit: 25828401,
      };

      break;
    case "ETH":
      Crypto = {
        icon: "ethereum",
        color: "#568cc4",
        price_unit: 811827,
      };
      break;

    case "PM":
      Crypto = {
        icon: "currency-usd",
        color: "#e33d59",
        price_unit: 550,
      };

      break;

    case "PY":
      Crypto = {
        icon: "currency-usd",
        color: "#5186bd",
        price_unit: 550,
      };

    default:
      break;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <MaterialCommunityIcons
        name={Crypto.icon}
        size={42}
        color={Crypto.color}
        style={{ marginRight: 10 }}
      />
      <Text style={{ fontSize: 42, color: Crypto.color, fontWeight: "700" }}>
        {(props.value / Crypto.price_unit).toFixed(6)}
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({});
