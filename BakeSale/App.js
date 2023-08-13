import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import DealList from "./src/components/DealList.js";
import DealDetails from "./src/components/DealDetails.js";
import SearchBar from "./src/components/SearchBar.js";
const API_HOST = "https://bakesaleforgood.com/api/deals/";

export default function App() {
  const [data, setData] = useState([]);
  const [currentDealID, setcurrentDealID] = useState(null);

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

  changeDealID = (dealID) => {
    setcurrentDealID(dealID);
  };

  unsetChangeDealID = () => {
    setcurrentDealID(null);
  };

  currentDeal = () => {
    return data.find((deal) => deal.key === currentDealID);
  };

  if (currentDealID) {
    return (
      <View style={styles.container}>
        <DealDetails
          initialDealData={currentDeal()}
          onBack={unsetChangeDealID}
        />
      </View>
    );
  }
  if (data.length > 0) {
    return (
      // <DealList deals={data} onItemPress={setcurrentDealID} />
      <View style={styles.container}>
        <SearchBar />
        <DealList deals={data} onItemPress={setcurrentDealID} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BakeSale</Text>
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
    marginTop: 50,
  },
  main: {},
  header: {
    fontSize: 40,
  },
});
