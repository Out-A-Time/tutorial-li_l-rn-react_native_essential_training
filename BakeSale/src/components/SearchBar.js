import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const API_HOST = "https://bakesaleforgood.com/api/deals?searchTerm";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  };

  const fetchDealsSearchResults = async (searchTerm) => {
    try {
      const response = await fetch(API_HOST + searchTerm);
      // console.log(response);
      const dataFetched = await response.json();
      setDealDetails(dataFetched);
      // console.log(dataFetched);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TextInput
      placeholder="Search"
      onChangeSearchText={handleChange}
      style={styles.input}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 12,
    height: 40,
    backgroundColor: "gray",
    padding: 5,
  },
});
