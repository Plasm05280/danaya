import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InputText, InputPassword } from "../components/input";
import { Button, ButtonOffset } from "../components/button";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("window").height;

export default function Login() {
  const Navigation = useNavigation();
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
          <InputText placeholder="Numéro de téléphone"></InputText>
          <InputPassword></InputPassword>
          <Button
            title="Connecter"
            onPress={() => Navigation.navigate("home")}
          ></Button>
          <Text style={{ marginBottom: 20, marginTop: 20 }}>
            Vous n'avez pas de compte ?
          </Text>
          <ButtonOffset title="Créer un compte"></ButtonOffset>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", bottom: 20 }}
          onPress={() => Navigation.navigate("forgot")}
        >
          <Text>J'ai oublié mon mot de passe</Text>
        </TouchableOpacity>
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
