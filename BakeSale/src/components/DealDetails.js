import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { priceDisplay } from "../utilities/util";
import DealItem from "./DealItem";

const API_HOST = "https://bakesaleforgood.com/api/deals/";

const DealDetails = ({ initialDealData, dealDetail, onBack }) => {
  propTypes = {
    initialDealData: PropTypes.object.isRequired,
    dealDetail: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  const [InitialDealData, setInitialDealData] = useState(initialDealData);
  const [dealDetails, setDealDetails] = useState(null);

  const fetchDetailDeals = async (dealID) => {
    try {
      const response = await fetch(API_HOST + dealID);
      // console.log(response);
      const dataFetched = await response.json();
      setDealDetails(dataFetched);
      // console.log(dataFetched);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetailDeals(InitialDealData.key);
    // console.log("desc", dealDetails.user.name);
  }, []);

  if (dealDetails) {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.linkGoBack}>Go back</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: InitialDealData.media[0] }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{InitialDealData.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.category}>{InitialDealData.cause.name}</Text>
            <Text style={styles.price}>
              {priceDisplay(InitialDealData.price)}
            </Text>
          </View>
        </View>
        <Image
          source={{ uri: dealDetails.user.avatar }}
          style={styles.avatar}
        />
        <Text>{dealDetails.user.name}</Text>
        <Text>{dealDetails.description}</Text>
      </View>
    );
  }

  return (
    <View style={styles.item}>
      <Text>Loading Details...</Text>
    </View>
  );
};

export default DealDetails;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 40,
    marginLeft: 10,
    marginRight: 10,
    // alignItems: "center",
  },
  info: {
    paddingTop: 10,
    backgroundColor: "#fff",
    borderColor: "#bbb",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  title: {
    // backgroundColor: "yellow",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    paddingLeft: 10,
  },
  footer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 6,
  },
  price: {
    // backgroundColor: "red",
    flex: 1,
    textAlign: "right",
  },
  category: {
    // backgroundColor: "green",
    flex: 2,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  linkGoBack: {
    marginBottom: 5,
    color: "gray",
  },
});
