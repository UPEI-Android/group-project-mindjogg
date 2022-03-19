import React,{useState,useEffect} from "react";
import { View ,ScrollView,Dimensions,StyleSheet} from "react-native";
import { globalStyles } from "../../styles/global";
import StdCard from "../../components/StdCard/StdCard";
import axios from "axios";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";



var count = 0;
const PositiveJournalMainScreen = ({ navigation }) => {

  const [journalEntries, setJournalEntries] = useState([]);

    /**
   * Gets a List of Journal Entries
   */
     const retrieveJournalEntries = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");

        const journalEntry = await axios.get(global.backend + "/users/getJournalEntries", {
          headers: {
            "Content-Type": "application/json",
            "auth-token":
            userToken }});
        return journalEntry.data.userJournal;
      } catch (err) {
        console.log(err);
      }   }
     

    useEffect(() => {
      retrieveJournalEntries().then((journalEntry) => {
        setJournalEntries(journalEntry);
      });
    }, [journalEntries.toString()]);

  return (
      <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
        <View style={styles.spaceContainer}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
                {/*Display the parsed information on cards*/}
                {journalEntries.map((journalEntry) => {
                  count++;
                  return (
                    <View key={count} style={styles.supportContainer}>
                      <View
                        key={journalEntry.id}
                        style={{ alignItems: "center", justifyContent: "flex-start" }}
                      >
                        <StdCard
                            title={journalEntry.title}
                            description={journalEntry.entry}
                            elevation={10}
                            width={250}
                            height={100}
                            cardPress={() => {
                              navigation.navigate(
                                "PositiveJournalDetailScreen",
                                journalEntry
                            );
                          }}
                        ></StdCard>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              <View style={styles.button}>

              <StdButton
                  text={"Add Entry"}
                  buttonColour={"#9B7FBA"}
                  buttonPress={() => navigation.push("PositiveJournalEditScreen")}
                />
                </View>
          </View>
        );
};

          const styles = StyleSheet.create({
            supportContainer: {
              flex: 1,
              flexDirection: "column",
              marginTop: Dimensions.get("window").height * 0.035,
              marginBottom: Dimensions.get("window").height * 0.035,

              //backgroundColor: globalStyles.purple.color,
              height: Dimensions.get("window").height * 0.1,
              width: Dimensions.get("window").width * 0.9,
              margin: 1,
            }, 
            spaceContainer: {
              flex: 1,
              flexDirection: "column",
              marginTop: Dimensions.get("window").height * 0.05,
              //backgroundColor: globalStyles.purple.color,
              height: Dimensions.get("window").height * 0.1,
              width: Dimensions.get("window").width * 0.7,
              margin: 5,
            }, 
            
            button: {
              alignItems: "center",
              marginBottom: 65,
              marginTop:20
            },
          });


export default PositiveJournalMainScreen;