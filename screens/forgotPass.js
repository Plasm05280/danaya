import React, { useState } from "react";
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

export default function ForgotPass() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState(false);

  const [phone, setPhone] = useState(undefined);

  const stepData = [
    {
      title: "Recevoir le code",
    },
    {
      title: "Confirmer le code",
    },
  ];

  const Navigating = () => {
    try {
      return stepData[step].title;
    } catch (error) {
      return;
      console.warn(error);
    }
  };

  const handle2next = () => {
    if (phone == undefined || phone.length < 8) {
      alert("Veuillez verifier votre numero");
    } else {
      setInput(true);
      stepData.length > step + 1 ? setStep((v) => v + 1) : null;
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        height: HEIGHT - 57,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputText
            placeholder="Numero de téléphone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(e) => setPhone(e)}
          ></InputText>
          {input === false ? null : (
            <View>
              <InputText
                placeholder="Code de confirmation"
                keyboardType="phone-pad"
              ></InputText>
            </View>
          )}
          <Button
            title={Navigating()}
            onPress={() => {
              handle2next();
            }}
          ></Button>
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
