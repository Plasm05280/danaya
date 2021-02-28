import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import { InputText, InputPassword } from "../components/input";
import { Button, ButtonOffset } from "../components/button";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("window").height;

export default function Register() {
  return (
    <ScrollView
      contentContainerStyle={{
        height: HEIGHT - 57,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.Title}>Danaya Finance</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputText placeholder="Nom"></InputText>
          <InputText placeholder="Prénom"></InputText>
          <InputText
            placeholder="Numero de téléphone"
            keyboardType="phone-pad"
          ></InputText>
          <InputPassword></InputPassword>
          <Button title="Créer un compte"></Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0084ff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
