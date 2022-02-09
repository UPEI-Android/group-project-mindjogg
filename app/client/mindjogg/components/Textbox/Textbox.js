import React, { useState } from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";

function Textbox(props) {
    // track the current value of the input to the textbox
    // Have to disable this line, because value is updated by the form controller
    // but never in this function
    /* eslint-disable no-unused-vars */
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    // the view should be slightly larger than the input box
    const inputFieldHeight = props.height - 20;

    // render the textbox
    return(
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderColor: "#000",
            height: props.height,
            borderRadius: 5,
            margin: 10,
        }}>
            {props.icon != [] ? props.icon : []}
            <TextInput
                style={{margin: 5, flex: 1, height: inputFieldHeight }}
                type = "text"
                value = { value }
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                placeholder = { props.placeholder }
                required = { props.required }
            >
            </TextInput>
        </View>
    );
}

Textbox.propTypes = {
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    height: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    icon: PropTypes.any,
}

Textbox.defaultProps = {
    name: "myTextbox",
    maxLength: 1000,
    minLength: 1,
    height: 45,
    placeholder: "Input Text Here",
    required: false,
    icon: [],
}

export default Textbox;