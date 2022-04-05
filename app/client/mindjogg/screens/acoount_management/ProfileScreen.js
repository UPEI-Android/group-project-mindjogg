import React,{useState,useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-big-calendar";
import  {Picker}  from "@react-native-picker/picker"
import axios from "axios";


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

  const [events, setEvents] = useState([{title:"no event",start:new Date(),end:new Date()}]);
  
  //custom theme for calender to match app
  const purpleTheme = {
    palette: {
      primary: {
        main: globalStyles.purple.color,
        contrastText: "#FFFFFF",
      },
      gray: {
        "100": globalStyles.purple.color,
        "200": globalStyles.purple.color,
        "300": globalStyles.purple.color,
        "500": globalStyles.purple.color,
        "800": globalStyles.purple.color,
      },
    },
  }

  /**
 * Gets a List of Events
 */
   const retrieveEvents = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");

      const tasks = await axios.get(global.backend + "/users/getSchedule", {
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
      <Text style={{fontSize:20, alignItems:"center", justifyContent:"center", textAlign:"center",fontWeight: "bold", color: globalStyles.purple.color}}> Hello {userFirstName}, check your schedule</Text>
     
     
      <Calendar events={events}   theme={purpleTheme} mode={type.toString()} height={600} />
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
        <Picker.Item label="Weekly" value="week" />
        <Picker.Item label="3days" value="3days" />
        <Picker.Item label="Daily" value="day" />
        </Picker></View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: globalStyles.pink.color
  },
});

export default ProfileScreen;