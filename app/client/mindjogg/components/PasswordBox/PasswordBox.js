import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
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

function PasswordBox(props) {
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    const [showPassword, setShowPassword] = useState("");
    function toggleMask() {
        setShowPassword(!showPassword);
        console.log(showPassword);
    }

    return(
        <View style={styles.sectionStyle}>
            <MaterialCommunityIcons name="lock" size = {24} color = "black" />
            <input
                type="password"
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                required = { true }
                value = { value }
                style={{
                    borderStyle:"none", outline:"none", display: !showPassword ? "block" : "none"
                }}
            >
            </input>
            <input
                type="text"
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                required = { true }
                value = { value }
                style={{
                    borderStyle:"none", outline:"none", display: !showPassword ? "none" : "block"
                }}
            ></input>
            <MaterialCommunityIcons name = "eye" size = {24} color = "black" onPress = {() => toggleMask()}/>
        </View>
    );
}

PasswordBox.propTypes = {
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
}

PasswordBox.defaultProps = {
    name: "myPasswordBox",
    maxLength: 1000,
    minLength: 1,
}


export default PasswordBox;