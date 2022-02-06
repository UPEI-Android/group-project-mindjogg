import { React } from "react";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

const StdButton = (props) => {
  return (
    <Button
      icon={props.buttonIcon}
      mode="contained"
      uppercase={props.uppercaseOn}
      color={props.buttonColour}
      onPress={props.buttonPress}
    >
      {props.text}
    </Button>
  );
};

StdButton.propTypes = {
  uppercaseOn: PropTypes.bool.isRequired,
  buttonIcon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonColour: PropTypes.string.isRequired,
  buttonPress: PropTypes.any.isRequired,
};

StdButton.defaultProps = {
  uppercaseOn: true,
  buttonIcon: "",
  text: "Unassigned Text",
  buttonColour: "#9B7FBA",
  buttonPress: () => {
    console.log("I do nothing yet");
  },
};

export default StdButton;
