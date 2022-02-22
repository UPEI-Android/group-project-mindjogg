import React, { useState } from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function PasswordBox(props) {
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    const [showPassword, setShowPassword] = useState("");
    function toggleMask() {
        setShowPassword(!showPassword);
    }

    const inputHeight = props.height - 20;
    const inputWidth = props.width - 60;

    return(
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 0.5,
            height: props.height,
            width: props.width,
            borderRadius: 5,
            margin: 10,
        }}>
            <MaterialCommunityIcons name="lock" size = {24} color = "black" />
            <TextInput
                type="password"
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                required = { true }
                value = { value }
                secureTextEntry = { !showPassword }
                style={{
                    display: !showPassword ? "flex" : "none", height: inputHeight, width: inputWidth, margin: 5
                }}
            >
            </TextInput>
            <TextInput
                type="text"
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                required = { true }
                value = { value }
                secureTextEntry = {! showPassword }
                style={{
                    display: !showPassword ? "none" : "flex", height: inputHeight, margin: 5, flex: 1
                }}
            ></TextInput>
            <MaterialCommunityIcons name = {!showPassword? "eye" : "eye-off"} size = {24} color = "black" onPress = {() => toggleMask()}/>
        </View>
    );
}

PasswordBox.propTypes = {
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
}

PasswordBox.defaultProps = {
    name: "myPasswordBox",
    maxLength: 1000,
    minLength: 1,
    height: 40,
    width: 225,
}


export default PasswordBox;