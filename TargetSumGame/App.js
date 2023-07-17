import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! yeah</Text>
      <Text>W koncu dziala. Wylacz VPN i odpal npx expo start</Text>
      <Text>
        Chyba nawet nie trzeba wylaczac vpn, tylko kliknij Play na symulatorze
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
