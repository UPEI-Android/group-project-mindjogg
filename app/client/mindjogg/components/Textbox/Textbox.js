import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
    sectionStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderWidth: 0.5,
      borderColor: "#000",
      height: 40,
      borderRadius: 5,
      margin: 10,
    },
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: "stretch",
      alignItems: "center",
    },
  });

function Textbox(props) {
    // track the current value of the input to the textbox
    // Have to disable this line, because value is updated by the form controller
    // but never in this function
    /* eslint-disable no-unused-vars */
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    // decide whether to show an icon or not
    let icon;
    props.icon ? 
        icon = props.icon : 
        icon = null;

    // render the textbox
    return(
        <View style={styles.sectionStyle}>
            { icon }
            <input
                style={ {borderStyle: "none", outline: "none"} }
                type = "text"
                value = { value }
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                placeholder = { props.placeholder }
                required = { props.required }
            >
            </input>
        </View>
    );
}

Textbox.propTypes = {
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    icon: PropTypes.object,
}

Textbox.defaultProps = {
    name: "myTextbox",
    maxLength: 1000,
    minLength: 1,
    placeholder: "Input Text Here",
    required: false,
    icon: null,
}

export default Textbox;