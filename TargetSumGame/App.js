import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Game from "./src/components/Game/Game.jsx";

export default function App() {
  return (
    <>
      <Game randomNumberCount={6} />
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
