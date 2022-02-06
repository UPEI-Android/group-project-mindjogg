import { React } from "react";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

const StdButton = (props) => {
  return (
    <Button
      mode="contained"
      color={props.buttonColour}
      onPress={props.buttonPress}
    >
      {props.text}
    </Button>
  );
};

StdButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonColour: PropTypes.string.isRequired,
  buttonPress: PropTypes.any.isRequired,
};

StdButton.defaultProps = {
  text: "Unassigned Text",
  buttonColour: "#9B7FBA",
  buttonPress: () => {
    console.log("I do nothing yet");
  },
};

export default StdButton;
