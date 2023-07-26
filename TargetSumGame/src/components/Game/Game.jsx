import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import React from "react";
import RandomNumber from "../RandomNumber/RandomNumber";

const Game = ({ randomNumberCount }) => {
  propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };

  randomNumbers = Array.from({ length: randomNumberCount }).map(
    () => 1 + Math.floor(Math.random() * 10)
  );
  target = this.randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  //TODO: Shuffle random numbers
  return (
    <View style={styles.container}>
      <Text style={styles.targetNumber}>{this.target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) => (
          // <Text style={styles.text_randomNumbers} key={index}>
          //   {randomNumber}
          // </Text>
          <RandomNumber key={index} number={randomNumber} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //stretches across whole screen
    backgroundColor: "#ddd",
    paddingTop: 45,
  },
  targetNumber: {
    fontSize: 50,
    backgroundColor: "#bbb",
    margin: 50,
    textAlign: "center",
  },
  randomContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  text_randomNumbers: {
    backgroundColor: "#999",
    width: 100,
    marginHorizontal: 20,
    marginVertical: 25,
    fontSize: 35,
    textAlign: "center",
  },
  footer: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default Game;
