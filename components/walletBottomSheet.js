import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { Button } from "./button";
import { InputWithIcon } from "./input";

import { BitcoinText } from "../components/molecules/CryptoText";

const CryptoData = {
  BitCoin: {
    sigle: "BTC",
    name: "Bitcoin",
  },
};

function walletBottomSheet(props) {
  const [wallet, setWallet] = React.useState();
  const [amount, setAmount] = React.useState(0);

  const Dispatch = (action, value) => {
    let Action = { type: action, value: value };
    props.dispatch(Action);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 50,
          height: 5,
          backgroundColor: "black",
          borderRadius: 20,
        }}
      ></View>
      <BitcoinText
        value={amount}
        unit={27758362}
        type={props.Store.selectedCrypto}
      ></BitcoinText>

      <KeyboardAvoidingView
        style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
      >
        <InputWithIcon
          placeholder="Wallet"
          icone="wallet-outline"
          onChangeText={(text) => setWallet(text)}
        />
        <InputWithIcon
          placeholder="Montant"
          keyboardType="numeric"
          text="CFA"
          maxLength={8}
          onChangeText={(text) => setAmount(text)}
          textStyle={styles.textStyle}
        ></InputWithIcon>
        <Button title="Payer"></Button>
        <Text
          style={{
            color: "#c7c7c7",
            paddingRight: 25,
            paddingLeft: 25,
            textAlign: "center",
            fontSize: 12,
          }}
        >
          La conversion dependra du cours de marché au moment de traitement de
          votre transaction
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: "white",
    elevation: 10,
    alignItems: "center",
    paddingTop: 10,
  },

  textStyle: {
    fontSize: 10,
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(walletBottomSheet);
