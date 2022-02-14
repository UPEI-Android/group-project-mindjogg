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
                style={globalStyles.whiteBackground} 
                elevation={props.elevation}
                onPress={props.cardPress}
                onLongPress={props.cardLongPress}
            >
                <Card.Title title={props.title} subtitle={props.subtitle}/>
                <Card.Content>
                    <Paragraph>{props.description}</Paragraph>
                    <Card.Actions>
                        <Button 
                            onPress={props.buttonPress} 
                            onLongPress={props.cardLongPress}
                        >Learn More</Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
        </View>
    );
}

StdCard.propTypes = {
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    description: propTypes.string,
    elevation: propTypes.number,
    buttonPress: propTypes.any.isRequired,
    buttonLongPress: propTypes.any,
    cardPress: propTypes.any,
    cardLongPress: propTypes.any,
}

StdCard.defaultProps = {
    title: "Title",
    subtitle: "Subtitle",
    description: "",
    elevation: 1,
    buttonPress: () => {console.error("[-] Please provide button press functionality! [-]")},
    buttonLongPress: () => {},
    cardPress: () => {},
    cardLongPress: () => {},
}

export default StdCard;