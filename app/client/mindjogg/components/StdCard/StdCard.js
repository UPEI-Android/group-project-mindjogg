/* REACT IMPORTS */
import React from "react";
import { Text } from "react-native";
import { Card, Button } from "react-native-paper";

/* THIRD PARTY IMPORTS */
import propTypes from "prop-types";

/* LOCAL IMPORTS */
import { globalStyles } from "../../styles/global";

const StdCard = (props) => {

    // render the card
    return(
        <Card
            style={[{width: props.width, height: props.height, display: "flex", alignItems: "flex-start"}, globalStyles.purpleBackground]} 
            elevation={props.elevation}
            onPress={props.cardPress}
            onLongPress={props.cardLongPress}
        >
            <Card.Title style={{flexShrink: 1, flex:0.10, alignSelf:"flex-start", maxWidth: props.width, maxHeight: props.height}} titleStyle={{color:"white"}} title={props.title}/>
            <Card.Content style={{flexShrink: 1, flex:0.90, alignSelf:"flex-start", maxWidth: props.width, maxHeight: props.height}}>
                <Text style={{overflow:"hidden", color: "white"}}>{props.description}</Text>
                <Card.Actions>
                    <Button
                        style={{flex:1, alignItems:"flex-end"}}
                        icon="arrow-right"
                        onPress={props.buttonPress} 
                        onLongPress={props.cardLongPress}
                    ></Button>
                </Card.Actions>
            </Card.Content>
        </Card>
    );
}

StdCard.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string,
    elevation: propTypes.number,
    buttonPress: propTypes.any,
    buttonLongPress: propTypes.any,
    cardPress: propTypes.any,
    cardLongPress: propTypes.any,
    height: propTypes.number,
    width: propTypes.number,
    style: propTypes.any,
}

StdCard.defaultProps = {
    title: "Title",
    description: "",
    elevation: 1,
    buttonPress: () => {},
    buttonLongPress: () => {},
    cardPress: () => {},
    cardLongPress: () => {},
    height: 150,
    width: 250,
}

export default StdCard;