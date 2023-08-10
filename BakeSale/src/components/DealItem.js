import React from "react";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import { priceDisplay } from "../utilities/util";

const DealItem = ({ deal }) => {
  propTypes = {
    deal: PropTypes.object.isRequired,
  };
  return (
    <View style={styles.item}>
      <Image source={{ uri: deal.media[0] }} style={styles.image} />
      <View>
        <Text style={styles.name}>{deal.title}</Text>
        <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
        <Text style={styles.category}>${deal.cause.name}</Text>
      </View>
    </View>
  );
};

export default DealItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#eee",
    width: "100%",
    paddingTop: 50,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },
  name: { backgroundColor: "yellow" },
  price: {
    backgroundColor: "red",
  },
  category: {
    backgroundColor: "green",
  },
});
