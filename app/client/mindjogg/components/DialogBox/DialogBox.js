import { React } from "react";
// import { Text } from "react-native-paper";
//import PropTypes from "prop-types";
//import { globalStyles } from "../../styles/global";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  View,
} from "react-native-paper";

const DialogBox = () => {
  const [visible, setVisible] = React.useState(true);

  //const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  // var alertName = props.alertTitle;

  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>alertName</Dialog.Title>
            <Dialog.Content>
              <Paragraph>props.displayText</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Close</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

// StdButton.propTypes = {
//   buttonWidth: PropTypes.number,
//   buttonHeight: PropTypes.number,
//   uppercaseOn: PropTypes.bool.isRequired,
//   buttonIcon: PropTypes.string,
//   text: PropTypes.string.isRequired,
//   buttonColour: PropTypes.string.isRequired,
//   buttonPress: PropTypes.any.isRequired,
//   buttonLongPress: PropTypes.any,
// };

// StdButton.defaultProps = {
//   uppercaseOn: true,
//   buttonWidth: 213,
//   buttonHeight: 54,
//   buttonIcon: "",
//   text: "Unassigned Text",
//   buttonColour: "#9B7FBA",
//   buttonPress: () => {
//     console.log("I do nothing yet");
//   },
//   buttonLongPress: () => {
//     console.log("I do nothing when long pressed");
//   },
// };

export default DialogBox;
