import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Game = () => {
  target = 10 + Math.floor(Math.random() * 40);
  return (
    <View style={styles.container}>
      <Text style={styles.targetNumber}>{this.target}</Text>
      <Text style={styles.footer}>Out-A-Time, 2023</Text>
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
    fontSize: 40,
    backgroundColor: "#aaa",
    marginHorizontal: 50,
    textAlign: "center",
  },
  footer: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default Game;
