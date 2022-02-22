import React from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  ScrollView,
 } from "react-native";
import { globalStyles } from "../../styles/global";

const EmergencySupportMainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.sosButton}>
          <Text style={styles.headerTitleText}>
            Immediate Help Needed?
          </Text>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {}}
            >
              <Text style={styles.sosButtonText}> Call 911 </Text>
            </TouchableOpacity>
      </View>

      <View>
        <View style={styles.footerTitle}>
          <Text style={styles.footerTitleText}>Available Supports Near You</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.supportContainer}>
            <View style={{alignItems:"center", justifyContent: "center"}}>
            <Text>
              Hello
            </Text> 
            </View> 
          </View>
          <View style={styles.supportContainer}>
            <View style={{alignItems:"center", justifyContent: "center"}}>
            <Text>
              Hello
            </Text> 
            </View> 
          </View>
          <View style={styles.supportContainer}>
            <View style={{alignItems:"center", justifyContent: "center"}}>
            <Text>
              Hello
            </Text> 
            </View> 
          </View>
          <View style={styles.supportContainer}>
            <View style={{alignItems:"center", justifyContent: "center"}}>
            <Text>
              Hello
            </Text> 
            </View> 
          </View>
          <View style={styles.supportContainer}>
            <View style={{alignItems:"center", justifyContent: "center"}}>
            <Text>
              Hello
            </Text> 
            </View> 
          </View>
          <View style={styles.supportContainer}>
            <View style={{alignItems:"center", justifyContent: "center"}}>
            <Text>
              Hello
            </Text> 
            </View> 
          </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.pinkBackground.backgroundColor, 
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: globalStyles.purple.color,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.999,
    marginTop: Dimensions.get("window").height * 0.03,
  },
  sosButton: {
    alignItems: "center",
  },
  sosButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.white.color,
  },
  headerTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.purple.color,
    marginTop: Dimensions.get("window").height * 0.01,
  },
  footerTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: globalStyles.purple.color,
  },
  footerTitle: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.05,
  },
  supportContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.05,
    backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.4,
    margin: 5,
  }
  
});

export default EmergencySupportMainScreen;