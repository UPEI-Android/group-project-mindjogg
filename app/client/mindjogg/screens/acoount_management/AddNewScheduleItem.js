import React,{useState} from "react";
import { Text,TextInput, View,StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import StdButton from "../../components/StdButton/StdButton";

const backend = "http://192.168.0.116:8080";

//to add date and time picker for start and end time on line 22
const AddNewScheduleItem = ({ navigation }) => {

    const [title,setScheduleTitle]=useState("No title");
    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [mode, setMode] = useState("date");
    const [showStart, setShowStart] = useState(false);

    const [modeEnd, setModeEnd] = useState("date");
    const [showEnd, setShowEnd] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShowStart(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
        setShowStart(true);
      setMode(currentMode);
    };
    
    const addNewEntry= async()=>{
 
    
       const data = JSON.stringify({
          title: title,
          start: date,
          end: endDate,
        });

        //will connect to backend and save new schedule data
        console.log(data);

        const userToken = await AsyncStorage.getItem("userToken");
         await axios.post(backend + "/users/addScheduleEntry", data, {
          headers: { "Content-Type": "application/json",  "auth-token":userToken},
        });
      }

  
    const showDatepicker = () => {
        showMode("date");
    };
  
    const showTimepicker = () => {
        showMode("time");
    };




    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowEnd(false);
        setEndDate(currentDate);
      };
    
      const showModeEnd = (currentMode) => {
          setShowEnd(true);
        setModeEnd(currentMode);
      };
      
    
      const showDatepickerEnd = () => {
        showModeEnd("date");
      };
    
      const showTimepickerEnd = () => {
        showModeEnd("time");
      };


    
  return (
    <View style={[{ flex: 1, justifyContent: "flex-start", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text style={{fontSize:30}}> Add new a Event</Text>
      <Text style={{fontSize:15}}>Date and Time selected:</Text>
      <Text style={{fontSize:15}}>{date.toLocaleString()}</Text>

      <View  style={{flexDirection:"column",justifyContent: "space-between"}}>
      <TextInput 
        style={styles.title} 
        textAlignVertical="top"
        placeholder="Enter Title"
        onChangeText={(title)=> setScheduleTitle(title)}
      />


   
      <View>
        <View>
            <View style={{marginVertical:10,flexDirection:"row"}}>
            <StdButton
            text={"Select Date"}
            buttonColour={"#9B7FBA"}
            buttonWidth={130}
            buttonPress={() =>    showDatepicker()}
           />
           <StdButton
            text={"End Date"}
            buttonColour={"#9B7FBA"}
            buttonWidth={130}
            buttonPress={() =>    showDatepickerEnd()}
        />
      </View>
      <View style={{marginVertical:10,flexDirection:"row"}}>
      <StdButton
        text={"Start time"}
        buttonColour={"#9B7FBA"}
        buttonWidth={130}
        buttonPress={() =>    showTimepicker()}
      />
        <StdButton
        text={"End time"}
        buttonColour={"#9B7FBA"}
        buttonWidth={130}
        buttonPress={() =>    showTimepickerEnd()}
      />
        </View>

      </View>

      <View>
    
      {showStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
            {showEnd && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode={modeEnd}
          is24Hour={true}
          onChange={onChangeEnd}
        />
      )}

        <StdButton
            text={"Add"}
            buttonColour={"#9B7FBA"}
            buttonWidth={125}
            buttonPress={() =>    {addNewEntry();navigation.push("YourProfile");}}
        />
    </View>
    </View>

    </View>
    </View>
  );
};



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
      marginVertical:10,
      width:150,
    }
});
export default AddNewScheduleItem;