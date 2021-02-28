import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { connect } from "react-redux";

function SelectCard(props) {
  const Dispatcher = () => {
    const action = { type: "SELECT", value: props.id };
    props.dispatch(action);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Dispatcher()}>
      <View
        style={
          props.niveau === props.id
            ? [styles.active, { borderColor: props.color }]
            : styles.container
        }
      >
        <View style={styles.title}>
          <View
            style={{
              padding: 20,
              backgroundColor: props.color,
              borderRadius: 60,
            }}
          >
            <MaterialCommunityIcons name={props.icon} size={40} color="white" />
          </View>
          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
            {props.level}
          </Text>
        </View>
        <View style={styles.desc}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {props.percent}
          </Text>
          <Text style={{ fontSize: 15 }}>{props.desc}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 170,
    backgroundColor: colors.SECONDARY_LIGHT,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
  },
  title: {
    flex: 1,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5,
    borderRightWidth: 1,
    borderRightColor: "#bfbfbf",
  },
  desc: {
    flex: 2,
    //backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    width: 300,
    height: 170,
    backgroundColor: colors.SECONDARY_LIGHT,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    elevation: 10,
    borderWidth: 2,
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return state.Pricing;
};

export default connect(mapStateToProps)(SelectCard);
