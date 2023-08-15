import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

const API_HOST = "https://bakesaleforgood.com/api/deals?searchTerm=";

const SearchBar = ({ searchDealsAll }) => {
  propTypes = {
    searchDealsAll: PropTypes.func.isRequired,
  };

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchDeals = debounce(searchDealsAll, 3000);

  const handleChange = (searchQuery) => {
    setSearchTerm(searchQuery);
    console.log(searchTerm);
    // searchDealsAll(searchTerm);
    //debounce from Lodash
    debouncedSearchDeals(searchTerm);
  };

  const fetchDealsSearchResults = async (searchTerm) => {
    try {
      const response = await fetch(API_HOST + searchTerm);
      const dataFetched = await response.json();
      console.log(dataFetched);
      return dataFetched;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TextInput
      placeholder="Search"
      onChangeText={handleChange}
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
