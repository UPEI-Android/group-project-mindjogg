/* REACT IMPORTS */
import React from "react";
import { View } from "react-native";
import { Card, Paragraph, Button } from "react-native-paper";

/* THIRD PARTY IMPORTS */
import propTypes from "prop-types";

/* LOCAL IMPORTS */
import { globalStyles } from "../../styles/global";

const StdCard = (props) => {
    // render the card
    return(
        <View>
            <Card 
                style={[{height: props.height, width: props.width, flex: 1}, globalStyles.whiteBackground]} 
                elevation={props.elevation}
                onPress={props.cardPress}
                onLongPress={props.cardLongPress}
            >
                <Card.Title title={props.title} subtitle={props.subtitle} style={{flex: 1}}/>
                <Card.Content style={{flex: 3}}>
                    <Paragraph>{props.description}</Paragraph>
                    <Card.Actions>
                        <Button
                            icon="arrow-right"
                            onPress={props.buttonPress} 
                            onLongPress={props.cardLongPress}
                        ></Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
        </View>
    );
}

StdCard.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string,
    elevation: propTypes.number,
    buttonPress: propTypes.any.isRequired,
    buttonLongPress: propTypes.any,
    cardPress: propTypes.any,
    cardLongPress: propTypes.any,
    height: propTypes.number,
    width: propTypes.number,
}

StdCard.defaultProps = {
    title: "Title",
    description: "",
    elevation: 1,
    buttonPress: () => {console.error("[-] Please provide button press functionality! [-]")},
    buttonLongPress: () => {},
    cardPress: () => {},
    cardLongPress: () => {},
    height: 150,
    width: 250,
}

export default StdCard;