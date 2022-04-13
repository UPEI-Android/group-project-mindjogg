import React,{useState} from "react";
import { Text, TextInput, View,StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../../styles/global";
import axios from "axios";




const SmartGoalEditScreen = ({navigation}) => {
  const [title,setGoalTitle]=useState("");
   const [measurable,setMeasurable]=useState("");
  const [specific,setSpecific]=useState("");
  const [attainable,setAttainable]=useState("");
  const [relevant,setRelevant]=useState("");
  const [time,setTime]=useState(""); 



  const addNewEntry= async()=>{
 
    const userToken = await AsyncStorage.getItem("userToken");
    const data = JSON.stringify({
      title: title,
      specific:specific,
      measurable: measurable,
      attainable: attainable,
      relevant: relevant,
      time: time
    });
  
     await axios.post(global.backend + "/users/addGoal", data, {
      headers: { "Content-Type": "application/json",  "auth-token":userToken},
    });
    navigation.push("SmartGoalMainScreen",title);
  }

  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
      <Text style={styles.s}  >GOAL</Text> 
        <TextInput 
          style={styles.title} 
          textAlignVertical="top"
          placeholder="Enter Goal title"
          onChangeText={(title)=> setGoalTitle(title)}
        />

      </View>
      <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
      <Text style={styles.s} >S </Text> 
         <TextInput 
        style={styles.input} 
        textAlignVertical="top"
        placeholder="What specifically am I trying to achieve?"
        onChangeText={(entry)=> setSpecific(entry)}
        />
         </View>
            <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
            <Text style={styles.s}  >M</Text> 
                  <TextInput
              style={styles.input} 
              textAlignVertical="top"
              placeholder="How will I measure success?"
              onChangeText={(entry)=> setMeasurable(entry)}
            />
               </View>
               <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
            <Text style={styles.s}  >A</Text> 
            <TextInput 
        style={styles.input} 
        textAlignVertical="top"
        placeholder="What steps do I need
        to take to attain the goal?"
        onChangeText={(entry)=> setAttainable(entry)}
      />
                     </View>
                     <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
            <Text style={styles.s}  >R</Text> 
                  <TextInput 
        style={styles.input} 
        textAlignVertical="top"
        placeholder="Is this relevant for my
        long-term objectives? 
        Is this the right time?"
        onChangeText={(entry)=> setRelevant(entry)}
      />
       </View>
       <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
            <Text style={styles.s}  >T</Text> 
            <TextInput 
            style={styles.input} 
            textAlignVertical="top"
            placeholder="What is the time frame for the goal?"
            onChangeText={(entry)=> setTime(entry)}
          />        
      </View>


      <View style={{flexDirection: "row"}}>
        <StdButton
        text={"Cancel"}
        buttonColour={"#9B7FBA"}
        buttonWidth={125}
        buttonPress={() =>    navigation.push("SmartGoalMainScreen")}
      />
      
      <View style={{margin:10}}></View>
      <StdButton
        text={"Add Entry"}
        buttonColour={"#663591"}
        buttonWidth={125}
        buttonPress={() => 
          {addNewEntry(); }
      }
      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
      borderWidth:1,
      borderRadius:10,
      borderColor:"#777",
      backgroundColor: "#F8F8F8",
      padding:8,
      margin:10,
      width:275,
      height:60,
    },
    s:{
      fontSize: 35,
      margin:10
    },
    title:{
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
      borderColor:"#777",
      backgroundColor: "#F8F8F8",
      padding:8,
      margin:10,
      width:170,
    }
});
export default SmartGoalEditScreen;