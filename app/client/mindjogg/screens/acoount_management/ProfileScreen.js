import React,{useState,useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-big-calendar";
import  {Picker}  from "@react-native-picker/picker"
import axios from "axios";

const backend = "http://192.168.0.116:8080";

let userFirstName;
let userName;
//function to set value of user
const setUserValue= async () => {
  userFirstName= await AsyncStorage.getItem("userFirstName");
  userFirstName=userFirstName.replace(/['"]+/g, "");
  userName= await AsyncStorage.getItem("userName");
  userName=userName.replace(/['"]+/g, "");

  return;
}



const ProfileScreen = ({ navigation }) => {

  const [type,setDateType]=useState("3days");

  const [events, setEvents] = useState([]);

  /**
 * Gets a List of Events
 */
   const retrieveEvents = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");

      const tasks = await axios.get(backend + "/users/getSchedule", {
        headers: {
          "Content-Type": "application/json",
          "auth-token":
          userToken }});
      return tasks.data.userTasks;
    } catch (err) {
      console.log(err);
    }   }
   

  useEffect(() => {
    retrieveEvents().then((event) => {
      setEvents(event);
    });
  }, [events.toString()]);



  setUserValue();

  
  return (
    <View style={styles.center}>
      <Text style={{fontSize:30, alignItems:"center", justifyContent:"center", textAlign:"center"}}> Hello {userFirstName}!</Text>
      <View  style={{flexDirection:"row",justifyContent: "space-between", margin:15}}>
      <StdButton
        text={"Add event"}
        buttonColour={"#9B7FBA"}
        buttonWidth={135}
        buttonPress={() =>    navigation.push("AddNewScheduleItem")}
      />
      <View style={{ borderRadius: 15, borderWidth: 0, overflow: "hidden",  padding: 0}}>
      <Picker
        selectedValue={type}
        style={{ height: 50, width: 125, backgroundColor:"#9B7FBA" ,color:"white"}}
        onValueChange={(itemValue) => setDateType(itemValue)}
      >
        <Picker.Item label="Monthly" value="month" />
        <Picker.Item label="Weekly" value="week" />
        <Picker.Item label="3days" value="3days" />
        <Picker.Item label="Daily" value="day" />
        </Picker></View>

        </View>
     
      <Calendar events={events}  mode={type.toString()} height={600} />
      {/*       <StdButton
        text="Edit Profile"
        uppercaseOn={false}
        buttonPress={() => navigation.push("EditProfile")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1
  },
});

export default ProfileScreen;