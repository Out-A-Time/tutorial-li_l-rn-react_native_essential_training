import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import React, { useState, useEffect } from "react";
import RandomNumber from "../RandomNumber/RandomNumber";

const Game = ({ randomNumberCount, randomNumbers, initialTime }) => {
  propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialTime: PropTypes.number.isRequired,
  };

  const [selectedNumbersIDs, setSelectedNumbers] = useState([]);
  console.log("here", selectedNumbersIDs);

  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      clearTimeout(timeoutID);
    }
  });

  const target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  //TODO: Shuffle random numbers

  //Returns true/false depends is numberIndex a number inside selectedNumbers
  //indexOf() returns -1 if number not inside array.
  const isNumberSelected = (numberIndex) => {
    return selectedNumbersIDs.indexOf(numberIndex) >= 0;
  };

  //Adds clicked number to the selectedNumbers array
  const selectNumber = (numberIndex) => {
    setSelectedNumbers([...selectedNumbersIDs, numberIndex]);
  };

  //Checks game status (playing, won, lost)
  const gameStatus = () => {
    const sumSelected = selectedNumbersIDs.reduce(
      (acc, curr) => acc + randomNumbers[curr],
      0
    );
    console.log(sumSelected);
    //Displays warning on the app
    // console.warn(sumSelected);
    if (timer === 0) {
      return "LOST";
    }
    if (sumSelected < target) {
      return "PLAYING";
    }
    if (sumSelected === target) {
      return "WON";
    }
    if (sumSelected > target) {
      return "LOST";
    }
  };

  const displayGameStatus = gameStatus();

  return (
    <View style={styles.container}>
      <Text
        style={[styles.targetNumber, styles[`STATUS_${displayGameStatus}`]]}
      >
        {target}
      </Text>
      <Text>Time left: {timer}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) => (
          <RandomNumber
            key={index}
            id={index}
            number={randomNumber}
            isNumberDisabled={
              isNumberSelected(index) || displayGameStatus !== "PLAYING"
            }
            onPress={selectNumber}
          />
        ))}
      </View>
      <Text>{displayGameStatus}</Text>
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
  STATUS_PLAYING: {
    backgroundColor: "#bbb",
  },
  STATUS_WON: {
    backgroundColor: "green",
  },
  STATUS_LOST: {
    backgroundColor: "red",
  },
});

export default Game;
