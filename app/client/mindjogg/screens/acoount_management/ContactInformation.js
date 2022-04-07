import React,{useState} from "react";
import { Text, TextInput, View,StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../../styles/global";
import axios from "axios";


let userEmail;
let userPhone="";

//function to set value of user
const setUserValue= async () => {
  userEmail= await AsyncStorage.getItem("userEmail");
  if(userEmail==null){userEmail="no email";}
  userEmail=userEmail.replace(/['"]+/g, "");

  userPhone=await AsyncStorage.getItem("userPhone");
  if(userPhone==null){userPhone="no phone number";}
  userPhone= userPhone.replace(/['"]+/g, "");
  
  return;
}

const ContactInformation = ({navigation}) => {


setUserValue();

  const [email,setEmail]=useState(userEmail);
  const [phone,setPhone]=useState(userPhone);


  const addNewEntry= async()=>{
 
    const userToken = await AsyncStorage.getItem("userToken");
    const data = JSON.stringify({
      userEmail:email,
      userPhone: phone,
    });

    await AsyncStorage.setItem(
      "userEmail",
      email
    );
    await AsyncStorage.setItem(
      "userPhone",
      phone
    );
  
     await axios.patch(global.backend + "/users/edit/contactinfo", data, {
      headers: { "Content-Type": "application/json",  "auth-token":userToken},
    });
  }

  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
         <Text style={styles.s}  >Email</Text> 

      <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
         <TextInput 
        style={styles.input} 
        placeholder="Email"
        value={email}
        editable={true}
        textAlignVertical="top"
        onChangeText={(entry)=> setEmail(entry)}
        />
         </View>
         <Text style={styles.s}  >Phone number</Text> 

            <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
                  <TextInput
              style={styles.input} 
              placeholder="Phone number"
              value={phone}
              editable={true}
              textAlignVertical="top"
              onChangeText={(entry)=> setPhone(entry)}
            />
               </View>
               


      <View style={{flexDirection: "row"}}>
        <StdButton
        text={"Cancel"}
        buttonColour={"#9B7FBA"}
        buttonWidth={125}
        buttonPress={() =>    navigation.push("YourProfile")}
      />
      
      <View style={{margin:10}}></View>
      <StdButton
        text={"Save"}
        buttonColour={"#663591"}
        buttonWidth={125}
        buttonPress={() => 
          {addNewEntry(); navigation.push("YourProfile");}
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
      fontSize: 20,
      textAlign:"left",
      fontWeight:"bold",
      color:"#9B7FBA"
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
export default ContactInformation;