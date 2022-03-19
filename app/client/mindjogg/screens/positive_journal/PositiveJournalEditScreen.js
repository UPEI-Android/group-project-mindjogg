import React,{useState} from "react";
import { TextInput, View,StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  {Picker}  from "@react-native-picker/picker"
import { globalStyles } from "../../styles/global";
import axios from "axios";

const backend = "http://192.168.0.116:8080";



const PositiveJournalEditScreen = ({navigation}) => {
  const [journalEntry,setJournalEntry]=useState("");
  const [title,setJournalTitle]=useState("");
  const [type,setJournalType]=useState("Travel");


  const addNewEntry= async()=>{
 
    const userToken = await AsyncStorage.getItem("userToken");
    const data = JSON.stringify({
      type: type,
      title: title,
      entry: journalEntry,
    });
  
     await axios.post(backend + "/users/addJournalEntry", data, {
      headers: { "Content-Type": "application/json",  "auth-token":userToken},
    });
  }

  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
    
      <TextInput 
        style={styles.title} 
        textAlignVertical="top"
        placeholder="Enter Title"
        onChangeText={(title)=> setJournalTitle(title)}
      />

      <Picker
        selectedValue={type}
        style={{ height: 50, width: 130  }}
        onValueChange={(itemValue) => setJournalType(itemValue)}
      >
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Personal" value="Personal" />
        <Picker.Item label="Work" value="Work" />
        <Picker.Item label="Life" value="Life" />
        </Picker>

      </View>
      <TextInput 
        style={styles.input} 
        textAlignVertical="top"
        placeholder="Enter your thoughts..."
        onChangeText={(entry)=> setJournalEntry(entry)}
      />

      <View style={{flexDirection: "row"}}>
        <StdButton
        text={"Cancel"}
        buttonColour={"#9B7FBA"}
        buttonWidth={125}
        buttonPress={() =>    navigation.push("PositiveJournalMainScreen")}
      />
      
      <View style={{margin:10}}></View>
      <StdButton
        text={"Add Entry"}
        buttonColour={"#663591"}
        buttonWidth={125}
        buttonPress={() => 
          {addNewEntry(); navigation.push("PositiveJournalMainScreen",journalEntry);}
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
      height:400,
    },
    title:{
      borderWidth:1,
      borderRadius:10,
      borderColor:"#777",
      backgroundColor: "#F8F8F8",
      padding:8,
      margin:10,
      width:150,
    }
});
export default PositiveJournalEditScreen;