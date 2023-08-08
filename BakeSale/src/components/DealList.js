import React from "react";
import { StyleSheet, Text, View } from "react-native";
const DealList = ({ deals }) => {
  return (
    <View>
      <Text>Deals...</Text>
      <Text>{deals.length}</Text>
    </View>
  );
};

export default DealList;
