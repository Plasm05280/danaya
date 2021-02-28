import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import ScreenHeader from "../components/screenHeader";
import SelectCard from "../components/PricingCard";

import TextCard from "../components/TextCard";

import { connect } from "react-redux";

function Depot(props) {
  const WIDTH = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      <ScreenHeader title="Achats des cryptomonaies"></ScreenHeader>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 22, textAlign: "center" }}>
          Selectionner votre méthode de payement
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextCard>
          <Image
            source={require("../assets/om.png")}
            resizeMode="contain"
            style={styles.cardImage}
          ></Image>
        </TextCard>
        <TextCard>
          <Image
            source={require("../assets/mobicash.png")}
            resizeMode="contain"
            style={styles.cardImage}
          ></Image>
        </TextCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: 200,
    height: 60,

    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default mapStateToProps(Depot);
