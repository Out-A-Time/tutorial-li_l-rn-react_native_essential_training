import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: "red", flex: 2 }]}>One</Text>
      <Text style={[styles.title, { color: "red", flex: 1 }]}>Two</Text>
      <Text style={[styles.title, { color: "red", flex: 1 }]}>Three</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //will use all available space as orange
    backgroundColor: "orange",
    marginTop: 20,
    // paddingHorizontal: 24,
    // alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    color: "blue", // overwritten by color red - we shouldn't use in-line styles
    backgroundColor: "grey",
    margin: 10,
  },
});
