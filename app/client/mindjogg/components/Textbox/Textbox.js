import React from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

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
    let icon;

    props.uri ? 
        icon = <Image source={ props.uri } style={styles.imageStyle}></Image> : 
        icon = null;

    return(
        <View style={styles.sectionStyle}>
            { icon }
            <input
                style={{borderStyle: "none", outline: "none", size: props.size}}
                type = "text"
                onChange = { handleChange }
                onFocus = { handleFocus }
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
    size: PropTypes.number.isRequired,
    required: PropTypes.bool,
    uri: PropTypes.string,
}

Textbox.defaultProps = {
    name: "myTextbox",
    maxLength: 1000,
    minLength: 1,
    placeholder: "Input Text Here",
    size: 25,
    required: false,
    uri: '',
}

function handleChange() {
    
}

function handleFocus() {

}

export default Textbox;