import "react-native-gesture-handler";
import { React, useEffect, useState, useMemo, useReducer } from "react";
import { View, ActivityIndicator } from "react-native";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import DrawerNavigator from "./screens/navigation/DrawerNavigator";
import AuthenticationStackNavigator from "./screens/navigation/AuthenticationStackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./components/conext/authenticationContext";
import axios from "axios";

// URI for the backend, only need to update here now (globalized variable)

global.backend = "http://192.168.0.135:8080";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  function handleDeepLink(event) {
    const data = Linking.parse(event.url);
    setData(data);
  }

  useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);
    return () => {
      Linking.removeEventListener("url");
    };
  }, []);

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
      // Authentication will be performed by server and token will be returned
      let userToken = null;
      let response;
      try {
        // check if there's already a token - if there is, no need to send a request to the backend
        userToken = await AsyncStorage.getItem("userToken");
        if (userToken !== null) {
          dispatch({ type: "LOGIN", id: userName, token: userToken });
        } else {
          // set up the object to be sent
          const data = JSON.stringify({
            UserName: userName,
            Password: password,
          });

          response = await axios.post(global.backend + "/users/login", data, {
            headers: { "Content-Type": "application/json" },
          });

          if (response.status == 200) {
            userToken = response.data;
            //getting user data

            const user = await axios.get(global.backend + "/userInfo", {
              headers: {
                "Content-Type": "application/json",
                "auth-token": userToken,
              },
            });
            //setting user data and storing it in async storage
            const userData = user.data;
            await AsyncStorage.setItem("admin", JSON.stringify(userData.admin));
            await AsyncStorage.setItem(
              "userDOB",
              JSON.stringify(userData.userDOB)
            );
            await AsyncStorage.setItem(
              "userEmail",
              JSON.stringify(userData.userEmail)
            );
            await AsyncStorage.setItem("userFirstName", userData.userFirstName);
            await AsyncStorage.setItem(
              "userGoals",
              JSON.stringify(userData.userGoals)
            );
            await AsyncStorage.setItem(
              "userJournal",
              JSON.stringify(userData.userJournal)
            );
            await AsyncStorage.setItem(
              "userLastName",
              JSON.stringify(userData.userLastName)
            );
            await AsyncStorage.setItem(
              "userMiddleName",
              JSON.stringify(userData.userMiddleName)
            );
            await AsyncStorage.setItem(
              "userName",
              JSON.stringify(userData.userName)
            );
            await AsyncStorage.setItem(
              "userPhone",
              JSON.stringify(userData.userPhone)
            );
            await AsyncStorage.setItem(
              "userTasks",
              JSON.stringify(userData.userTasks)
            );
          } else {
            userToken = null;
          }

          await AsyncStorage.setItem("userToken", userToken);
          dispatch({ type: "LOGIN", id: userName, token: userToken });

          return response.status;
        }
      } catch (e) {
        if(!response) {
          console.error(e);
        }
      }
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
      let userToken = null;
      let status = 500;

      try {
        // check if there's already a token - if there is, no need to register as the user is already signed in
        userToken = await AsyncStorage.getItem("userToken");
        if (userToken !== null) {
          dispatch({ type: "REGISTER", id: userName, token: userToken });
        } else {
          const data = JSON.stringify({
            UserName: userName,
            Password: password,
            FirstName: firstName,
            LastName: lastName,
            admin: false,
            Email: email,
          });

          // make an API call to create user account with the userInfo
          // if something goes wrong, we still want to return the response's status so we can handle the error in another component

          await axios
            .post(global.backend + "/users/register", data, {
              headers: { "Content-Type": "application/json" },
            })
            .then((res) => (status = res.status))
            .catch((error) => (status = error.response.status));

          dispatch({ type: "REGISTER", id: userName, token: userToken });
          return status;
        }
      } catch (e) {
        console.error(e);
      }
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
