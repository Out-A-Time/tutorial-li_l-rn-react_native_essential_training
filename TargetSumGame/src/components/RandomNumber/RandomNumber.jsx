import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const RandomNumber = ({ number, id, isNumberDisabled, onPress }) => {
  propTypes = {
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isNumberDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    if (!isNumberDisabled) {
      onPress(id);
      console.log({ number, isNumberDisabled, id });
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={[
          styles.text_randomNumbers,
          isNumberDisabled && styles.text_disabledNumber,
        ]}
      >
        {number}
      </Text>
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
  text_disabledNumber: {
    opacity: 0.3,
  },
});
