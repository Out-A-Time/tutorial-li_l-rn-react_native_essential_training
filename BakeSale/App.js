import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import DealList from "./src/components/DealList.js";
import DealDetails from "./src/components/DealDetails.js";
import SearchBar, {
  fetchDealsSearchResults,
} from "./src/components/SearchBar.js";

const API_HOST = "https://bakesaleforgood.com/api/deals/";

export default function App() {
  const [data, setData] = useState([]);
  const [currentDealID, setcurrentDealID] = useState(null);
  const [dealsFromSearch, setDealsFromSearch] = useState([]);

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

  const currentDeal = () => {
    return data.find((deal) => deal.key === currentDealID);
  };

  const searchDeals = async (searchTerm) => {
    console.log("searchDeals called. searchTerm: ", searchTerm);
    if (searchTerm) {
      console.log("searchTerm is true");
      const searchDeals = await fetchDealsSearchResults(searchTerm);
      setDealsFromSearch(searchDeals);
      console.log("these are dealsFromSearch: ", dealsFromSearch);
    } else {
      setDealsFromSearch([]);
    }
  };

  // useEffect(() => {
  //   searchDeals("yoga");
  // }, []);

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

  const dealsToDisplay = dealsFromSearch.length > 0 ? dealsFromSearch : data;

  if (dealsToDisplay.length > 0) {
    return (
      // <DealList deals={data} onItemPress={setcurrentDealID} />
      <View style={styles.container}>
        <SearchBar searchDealsAll={searchDeals} />
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
