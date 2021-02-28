import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  OpaqueColorValue,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function menuItem(props) {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigate ? Navigation.navigate(props.navigate) : "";
      }}
    >
      <View
        style={{
          backgroundColor: props.color,
          height: 60,
          width: 60,
          borderRadius: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name={props.icone} size={35} color="white" />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
  },
});
