import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Game from "./src/components/Game/Game.jsx";
import shuffle from "lodash.shuffle";

export default function App() {
  //Generates array of 6 random numbers from 1 to 10
  const generateRandomNumbers = Array.from({ length: 6 }).map(
    () => 1 + Math.floor(Math.random() * 10)
  );
  console.log("generateRandomNumbers", generateRandomNumbers);

  const shuffledRandomNumbers = shuffle(generateRandomNumbers);

  const [gameID, setGameID] = useState(1);
  const resetGame = () => {
    setGameID(gameID + 1);
  };
  return (
    <>
      <Game
        key={gameID}
        randomNumberCount={6}
        randomNumbers={generateRandomNumbers}
        shuffledRandomNumbers={shuffledRandomNumbers}
        initialTime={15}
        onPlayAgain={resetGame}
      />
      <Text style={styles.footer}>Out-A-Time, 2023</Text>
      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 10,
    textAlign: "center",
  },
});
