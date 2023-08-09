import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PropTypes from "prop-types";

const DealList = ({ deals }) => {
  propTypes = {
    deals: PropTypes.array.isRequired,
  };
  // console.log(deals);
  return (
    <View style={styles.list}>
      <Text>Deals: {deals.length}</Text>
      {/* {Why THIS DOESNT WORK???} */}
      {/* {deals.map((deal) => {
        console.log("Title: ", deal.title);
        <Text key={deal.key}>{deal.title}</Text>;
      })} */}
      <FlatList
        data={deals}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default DealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#eee",
    width: "100%",
    paddingTop: 50,
    alignItems: "center",
  },
});
