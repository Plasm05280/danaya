import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  StatusBar,
} from "react-native";
import Header from "../components/header";
import MenuItem from "../components/menuItem";

import { Fontisto } from "@expo/vector-icons";
import colors from "../styles/colors";

function Home(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.PRIMARY_LIGHT}
        barStyle="dark-content"
      ></StatusBar>
      <Header></Header>

      <View
        style={{
          flex: 1,
          // backgroundColor: "blue",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            //  backgroundColor: "red",
          }}
        >
          <MenuItem
            title="Dépôt"
            icone="inbox-arrow-down"
            color="#5cd195"
            navigate="Depot"
          ></MenuItem>
          <MenuItem
            title="Retrait"
            icone="bank-transfer"
            color="#5c85d1"
            navigate="Retrait"
          ></MenuItem>
          <MenuItem
            title="Historiques"
            icone="history"
            color="#7b5cd1"
            navigate="History"
          ></MenuItem>
          <MenuItem
            title="Profile"
            icone="account"
            color="#d15c97"
            navigate="Profile"
          ></MenuItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY_LIGHT,
  },
  subContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
