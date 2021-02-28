import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <MaterialIcons
          name="account-circle"
          size={35}
          color={colors.COLOR_MAIN_LIGHT}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 10, color: "#878787" }}>N° du compte</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>P71332502</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => Navigation.navigate("Notification")}>
          <MaterialIcons
            name="chat-bubble-outline"
            size={30}
            color={colors.COLOR_MAIN_DARK}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="customerservice"
            size={30}
            color={colors.COLOR_MAIN_DARK}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="settings"
            size={30}
            color={colors.COLOR_MAIN_DARK}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "white",
    // elevation: 1,
  },
  name: {
    fontSize: 14,
    marginRight: 5,
    color: "#707070",
  },
  hello: {
    fontSize: 23,
    color: "#011129",
    fontWeight: "bold",
  },
});
