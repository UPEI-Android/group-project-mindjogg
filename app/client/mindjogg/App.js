import "react-native-gesture-handler";
import { React, useEffect, useMemo, useReducer } from "react";
import { View, ActivityIndicator } from "react-native";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./screens/navigation/DrawerNavigator";
import AuthenticationStackNavigator from "./screens/navigation/AuthenticationStackNavigator";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "./components/conext/authenticationContext";
import axios from "axios";

function App() {
  // The initial state
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  // The reducer function
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo(() => ({
    signIn: async (userName, password) => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      let userToken;

      // Authentication will be performed by server and token will be returned
      try {
        // set up the object to be sent
        const data = JSON.stringify({
          UserName: userName,
          Password: password,
        });

       await axios.post('http://localhost:8080/users/login',
       data,
       {
         headers: { "Content-Type": "application/json" },
       }).then((res) => res.status == 200 ? userToken = res.data : userToken = null);
       
       await AsyncStorage.setItem("userToken", userToken);
    } catch(e) {
      console.error(e);
    }
    dispatch({ type: "LOGIN", id: userName, token: userToken });
    },

    signOut: async () => {
      // remove the token from storage
      try {
        await AsyncStorage.removeItem("userToken");
        dispatch({ type: "LOGOUT" });
      } catch (e) {
        console.error(e);
      }
    },
    
    signUp: async (firstName, lastName, userName, email, password) => {
      // In a production app, we need to send user data to server and get a token
      // after successful registration, also need to update our state
      let userToken;
      userToken = null;

      try {
        const data = JSON.stringify({
            UserName: userName,
            Password: password,
            FirstName: firstName,
            LastName: lastName,
            admin: false,
            Email: email,
        });

        // make an API call to create user account with the userInfo
        const response = await axios.post('http://localhost:8080/users/register', 
        data,
        {
          headers: { "Content-Type": "application/json" },
        });

        if (response.status == 201) {
          // account successfully created, redirect to login screen
        } else if (response.status == 400) {
          // account already exists
        } else {
          // something went wrong
        }

      } catch (e) {
        console.error(e);
      }
      dispatch({ type: "REGISTER", id: userName, token: userToken });
    },
  }));

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // After restoring token, we may need to validate the token in production apps from server

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#683795" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <DrawerNavigator />
        ) : (
          <AuthenticationStackNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
