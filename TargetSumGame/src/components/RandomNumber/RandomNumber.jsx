import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const RandomNumber = ({ number }) => {
  propTypes = {
    number: PropTypes.number.isRequired,
  };

  handlePress = () => {
    const temp = number + 2;
    console.log(temp);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text_randomNumbers}>{number}</Text>
    </TouchableOpacity>
  );
};

export default RandomNumber;

const styles = StyleSheet.create({
  text_randomNumbers: {
    backgroundColor: "#999",
    width: 100,
    marginHorizontal: 20,
    marginVertical: 25,
    fontSize: 35,
    textAlign: "center",
  },
});
