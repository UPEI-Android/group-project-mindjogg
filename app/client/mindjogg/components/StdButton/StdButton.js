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
      onLongPress={props.buttonLongPress}
      style={{
        width: props.buttonWidth,
        height: props.buttonHeight,
        justifyContent: "center",
      }}
    >
      {props.text}
    </Button>
  );
};

StdButton.propTypes = {
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  uppercaseOn: PropTypes.bool.isRequired,
  buttonIcon: PropTypes.string,
  text: PropTypes.string.isRequired,
  buttonColour: PropTypes.string.isRequired,
  buttonPress: PropTypes.any.isRequired,
  buttonLongPress: PropTypes.any,
};

StdButton.defaultProps = {
  uppercaseOn: true,
  buttonWidth: 213,
  buttonHeight: 54,
  buttonIcon: "",
  text: "Unassigned Text",
  buttonColour: "#9B7FBA",
  buttonPress: () => {
    console.log("I do nothing yet");
  },
  buttonLongPress: () => {
    console.log("I do nothing when long pressed");
  },
};

export default StdButton;
