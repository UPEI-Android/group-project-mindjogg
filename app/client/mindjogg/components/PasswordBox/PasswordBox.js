import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
            <Image 
                source={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F523%2F974%2F500%2Fpadlock-computer-icons-symbol-locks.jpg&f=1&nofb=1"} 
                style={styles.imageStyle}>
            </Image>
            <input
                type="password"
                style={{borderStyle:"none", outline:"none"}}
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                required = { true }
                value = { value }
                style={{
                    display: !showPassword ? 'block' : 'none'
                  }}
            >
            </input>
            <input
                type="text"
                style={{borderStyle:"none", outline:"none"}}
                onChange = { handleChange }
                name = { props.name }
                maxLength = { props.maxLength }
                minLength = { props.minLength }
                required = { true }
                value = { value }
                style={{
                    display: !showPassword ? 'none' : 'block'
                  }}
            ></input>
            <button
                onClick={() => (toggleMask())}
            >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.24lr71xjF30sgwLUnPmj7gHaHa%26pid%3DApi&f=1" style={{height: 25, width:25}}></img>
            </button>
        </View>
    );
};

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