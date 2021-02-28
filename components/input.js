import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export function InputText(props) {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      style={focus === true ? styles.inputOnFocus : styles.input}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    ></TextInput>
  );
}

export function InputPassword(props) {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      placeholder="Mot de passe"
      style={focus === true ? styles.inputOnFocus : styles.input}
      secureTextEntry={true}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#e6eefc",
    marginBottom: 10,
    fontSize: 17,
  },

  inputOnFocus: {
    width: 300,
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#0084ff",
    marginBottom: 10,
    fontSize: 17,
  },
});
