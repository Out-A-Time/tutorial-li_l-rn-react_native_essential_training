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

const DealDetails = ({ initialDealData }) => {
  propTypes = {
    initialDealData: PropTypes.object.isRequired,
  };

  const [deal, setDeal] = useState(initialDealData);
  return (
    <View style={styles.item}>
      <Image source={{ uri: deal.media[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{deal.title}</Text>
        <View style={styles.footer}>
          <Text style={styles.category}>{deal.cause.name}</Text>
          <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
        </View>
      </View>
      <Text>....</Text>
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
});
