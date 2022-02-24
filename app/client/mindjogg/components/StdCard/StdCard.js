/* REACT IMPORTS */
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Card, Button } from "react-native-paper";

/* THIRD PARTY IMPORTS */
import propTypes from "prop-types";

/* LOCAL IMPORTS */
import { globalStyles } from "../../styles/global";

const StdCard = (props) => {

    // render the card
    return(
        <SafeAreaView>
        <View style={{margin: props.margin, height: props.height, width: props.width}}>
            <Card
                style={[{display: "flex", alignItems: "flex-start"}, globalStyles.purpleBackground]} 
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
        </View>
        </SafeAreaView>
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
    margin: propTypes.number,
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
    margin: 5,
}

export default StdCard;