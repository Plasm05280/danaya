import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

export function InputWithIcon(props) {
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <TextInput
        style={focus === true ? styles.inputOnFocus : styles.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      ></TextInput>
      {props.icone ? (
        <MaterialCommunityIcons
          name={props.icone}
          size={45}
          color="#c7c7c7"
          style={{ position: "absolute", right: 5, top: 5 }}
        />
      ) : (
        <Text
          style={{
            position: "absolute",
            right: 10,
            top: 15,
            fontSize: 20,
            fontWeight: "700",
            color: "#c7c7c7",
          }}
        >
          {props.text}
        </Text>
      )}
    </View>
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
