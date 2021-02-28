import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ScreenHeader(props) {
  const Navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, paddingTop: 10 }}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => Navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.MSG}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    //backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 20,
    justifyContent: "center",
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  MSG: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    marginLeft: -50,
    marginTop: 10,
  },
});
