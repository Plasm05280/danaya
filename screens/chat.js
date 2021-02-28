import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  _Dispatch = (value) => {
    this.setState({ input: value });
    const action = { type: "ADD_INPUT", value: this.state.input };
    this.props.dispatch(action);
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Votre nom"
          onChangeText={(value) => this._Dispatch(value)}
        ></TextInput>
        <Text>Redux : {this.props.input}</Text>
        <Text>State : {this.state.input}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Chat);
