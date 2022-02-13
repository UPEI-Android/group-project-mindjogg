
import { StyleSheet } from "react-native";

  
export const globalStyles = StyleSheet.create({
  
    Text: {
        fontFamily: "Baloo"
    },
    /* This is the styling for button
    */
    button : {
        backgroundColor:"#9B7FBA",
        width: 213,
        height: 54,
        justifyContent: "center",
        borderRadius: 20,
        color:"white",
    }
    ,
      /* This is the pink background for the whole app
    */
    pinkBackground : {
        backgroundColor:"#FFE3FF"
    }
    ,
    /* This is the white background for the whole app
    */
    whiteBackground:{
        color: "#FFFFFF"
    }
   ,
    /* This is the grey background for textboxes
    */
    textboxBackground:{
        color:"rgba(0, 0, 0, 0.2)"
    }
    
    

});