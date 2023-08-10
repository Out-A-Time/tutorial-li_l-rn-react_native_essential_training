import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import DealList from "./src/components/DealList.js";
const API_HOST = "https://bakesaleforgood.com/api/deals";

export default function App() {
  const [data, setData] = useState([]);

  const fetchInitialDeals = async () => {
    try {
      const response = await fetch(API_HOST);
      const dataFetched = await response.json();
      setData(dataFetched);
      // console.log(dataFetched);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInitialDeals();
  }, []);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <DealList deals={data} />
      ) : (
        <Text style={styles.header}>BakeSale</Text>
      )}
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
  header: {
    fontSize: 40,
  },
});
