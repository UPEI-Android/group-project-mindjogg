import React from "react";
import { View, Image, StyleSheet } from "react-native";

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

Textbox.propTypes = {
    name: React.propTypes.string.isRequired,
    maxLength: React.propTypes.number,
    minLength: React.propTypes.number,
    placeholder: React.propTypes.string,
    size: React.propTypes.number.isRequired,
    required: React.propTypes.bool,
}

Textbox.defaultProps = {
    mame: "myTextbox",
    maxLength: 1000,
    minLength: 1,
    placeholder: "Input Text Here",
    size: 20,
    required: false,
}

function Textbox(props) {
    return(
        <View style={styles.sectionStyle}>
            <Image
            // uri is just for testing
                source={{uri:"https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png"}}
                style={styles.imageStyle}
            >
            </Image>
            <input
                style = {{flex: 1, height: 35, margin: 10, border: 0}}
                type = "text"
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                placeholder = { props.placeholder }
                size = { props.size }
                required = { props.required }
            >
            </input>
        </View>
    );
}

function handleChange() {
    
}

export default Textbox;