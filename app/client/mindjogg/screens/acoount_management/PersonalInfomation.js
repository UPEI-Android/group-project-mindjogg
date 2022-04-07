import React,{useState} from "react";
import { Text, TextInput, View,StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../../styles/global";
import axios from "axios";


let userFirstName;
let userLastName="";
let userMiddleName="";
let userDate="";

//function to set value of user
const setUserValue= async () => {
  userFirstName= await AsyncStorage.getItem("userFirstName");
  if(userFirstName==null){userFirstName="no middle name";}
  userFirstName=userFirstName.replace(/['"]+/g, "");

  userMiddleName=await AsyncStorage.getItem("userMiddleName");
  if(userMiddleName==null){userMiddleName="no middle name";}
  userMiddleName=userMiddleName.replace(/['"]+/g, "");

  userLastName=await AsyncStorage.getItem("userLastName");
  if(userLastName==null){userLastName="no userLastName name";}
  userLastName=userLastName.replace(/['"]+/g, "");

  userDate=await AsyncStorage.getItem("userDOB");
  
  return;
}

const PersonalInfomation = ({navigation}) => {


setUserValue();
  const [firstName,setFirstname]=useState(userFirstName);
   const [middleName,setMiddleName]=useState(userMiddleName);
  const [lastName,setLastName]=useState(userLastName);
  const [userDOB,setUserDOB]=useState(userDate);


  const addNewEntry= async()=>{
 
    const userToken = await AsyncStorage.getItem("userToken");
    let userdateofbirth;
    if(userDOB==null){userdateofbirth= new Date();}
    const data = JSON.stringify({
      userFirstName:firstName,
      userMiddleName: middleName,
      userLastName: lastName,
      userDOB: userdateofbirth
    });

    await AsyncStorage.setItem(
      "userFirstName",
      firstName
    );
    await AsyncStorage.setItem(
      "userMiddleName",
      middleName
    );
    await AsyncStorage.setItem(
      "userLastName",
      lastName
    );
    await AsyncStorage.setItem(
      "userDOB",
      userDOB
    );
    
  
     await axios.patch(global.backend + "/users/edit/personalinfo", data, {
      headers: { "Content-Type": "application/json",  "auth-token":userToken},
    });
  }

  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
         <Text style={styles.s}  >First name</Text> 

      <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
         <TextInput 
        style={styles.input} 
        placeholder="First name"
        value={firstName}
        editable={true}
        textAlignVertical="top"
        onChangeText={(entry)=> setFirstname(entry)}
        />
         </View>
         <Text style={styles.s}  >Middle Name</Text> 

            <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
                  <TextInput
              style={styles.input} 
              placeholder="Middle Name"
              value={middleName}
              editable={true}
              textAlignVertical="top"
              onChangeText={(entry)=> setMiddleName(entry)}
            />
               </View>
               <Text style={styles.s}  >Last Name</Text> 

               <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
            <TextInput 
        style={styles.input} 
        value={lastName}
        editable={true}
        textAlignVertical="top"
        placeholder="Last Name"
        onChangeText={(entry)=> setLastName(entry)}
      />
                     </View>
                     <Text style={styles.s}  >Date of Birth</Text> 

                     <View  style={{flexDirection:"row",justifyContent: "space-between"}}>
                  <TextInput 
        style={styles.input} 
        placeholder="Date of Birth"
        value={userDOB}
        editable={true}
        textAlignVertical="top"
        onChangeText={(entry)=> setUserDOB(entry)}
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
export default PersonalInfomation;