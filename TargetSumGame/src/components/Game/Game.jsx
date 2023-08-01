import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import React, { useState, useEffect, useRef } from "react";
import RandomNumber from "../RandomNumber/RandomNumber";

const Game = ({
  randomNumberCount,
  randomNumbers,
  shuffledRandomNumbers,
  initialTime,
}) => {
  propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialTime: PropTypes.number.isRequired,
  };

  console.log(randomNumbers, shuffledRandomNumbers);

  const [selectedNumbersIDs, setSelectedNumbers] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(initialTime);

  let gameStatus = useRef("PLAYING");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setRemainingSeconds(remainingSeconds - 1);
    }, 1000);
    if (remainingSeconds === 0) {
      clearTimeout(timeoutID);
    }

    if (gameStatus.current !== "PLAYING") {
      clearTimeout(timeoutID);
    }
  });

  //HEREEEEEE
  const target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

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
  const calcGameStatus = () => {
    const sumSelected = selectedNumbersIDs.reduce(
      //HEREEEEEE
      (acc, curr) => {
        return acc + randomNumbers[curr];
      },
      0
    );
    console.log(sumSelected);
    //Displays warning on the app
    // console.warn(sumSelected);
    if (remainingSeconds === 0) {
      gameStatus.current = "LOST";
      return "LOST";
    }
    if (sumSelected < target) {
      return "PLAYING";
    }
    if (sumSelected === target) {
      gameStatus.current = "WON";
      return "WON";
    }
    if (sumSelected > target) {
      gameStatus.current = "LOST";
      return "LOST";
    }
  };

  const displayGameStatus = calcGameStatus();

  return (
    <View style={styles.container}>
      <Text
        style={[styles.targetNumber, styles[`STATUS_${displayGameStatus}`]]}
      >
        {target}
      </Text>
      <Text>Time left: {remainingSeconds}</Text>
      <View style={styles.randomContainer}>
        {shuffledRandomNumbers.map((randomNumber, index) => (
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
