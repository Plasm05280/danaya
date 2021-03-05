import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";

import ScreenHeader from "../components/screenHeader";
import TextCard from "../components/TextCard";
import { connect } from "react-redux";
import { InputText } from "../components/input";
import { Button, ButtonOffset } from "../components/button";

import Animated from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomSheet from "reanimated-bottom-sheet";
import WalletBottomSheet from "../components/walletBottomSheet";

function Depot(props) {
  const WIDTH = Dimensions.get("screen").width;
  const Navigation = useNavigation();

  const sheetRef = React.useRef(null);

  // console.log(props.Store.selectedCrypto);
  const [montant, setMontant] = React.useState();

  React.useEffect(() => {
    if (props.Store.selectedCrypto !== "") {
      sheetRef.current.snapTo(1);
    }
  });

  let fall = new Animated.Value(1);
  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const Wallet = () => {
    return <WalletBottomSheet></WalletBottomSheet>;
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="Wallet"></ScreenHeader>
      <ScrollView
        contentContainerStyle={{
          height: Dimensions.get("window").height - 150,
          justifyContent: "center",
        }}
      >
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            Selectionner la cryptomonaie
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <TextCard id="BTC" color="#f7931a" type="crypto">
            <MaterialCommunityIcons name="bitcoin" size={50} color="#f7931a" />
          </TextCard>
          <TextCard id="ETH" color="#568cc4" type="crypto">
            <MaterialCommunityIcons name="ethereum" size={50} color="#568cc4" />
          </TextCard>
          <TextCard id="PM" color="#e33d59" type="crypto">
            <Image
              source={require("../assets/perfectmoney.png")}
              resizeMode="contain"
              style={styles.cardImage}
            ></Image>
          </TextCard>
          <TextCard id="PY" color="#5186bd" type="crypto">
            <Image
              source={require("../assets/PAYEER.png")}
              resizeMode="contain"
              style={styles.cardImage}
            ></Image>
          </TextCard>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      ></View>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#000",
            opacity: animatedShadowOpacity,
          },
        ]}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, 400, 40]}
        callbackNode={fall}
        borderRadius={20}
        renderContent={Wallet}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
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
    //tintColor: "#9ab2b8",
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Depot);
