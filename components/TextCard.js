import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { connect } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";

function adsCard(props) {
  const Dispatch = () => {
    let action = {
      type: props.type == "mobile" ? "SELECT_CARD" : "SELECT_CRYPTO",
      value: props.id,
    };
    props.dispatch(action);
  };
  return (
    <TouchableHighlight
      style={
        props.Store.selectedCrypto == props.id ||
        props.Store.selectedCard == props.id
          ? [
              styles.container,
              {
                ...{
                  elevation: 5,
                  borderWidth: 2,
                  borderColor: props.color ? props.color : "black",
                },
              },
            ]
          : styles.container
      }
      onPress={() => {
        Dispatch();
        () => sheetRef.current.snapTo(0);
      }}
      underlayColor="white"
    >
      {props.children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    backgroundColor: colors.SECONDARY_LIGHT,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    flexDirection: "row",
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    color: "black",
    marginTop: 20,
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(adsCard);
