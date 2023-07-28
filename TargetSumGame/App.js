import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Game from "./src/components/Game/Game.jsx";

export default function App() {
  //Generates array of 6 random numbers from 1 to 10
  const randomNumbers = Array.from({ length: 6 }).map(
    () => 1 + Math.floor(Math.random() * 10)
  );
  return (
    <>
      <Game randomNumberCount={6} randomNumbers={randomNumbers} />
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
