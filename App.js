import { useState } from "react";

import { useFonts } from 'expo-font';

import SignInScreen from "./src/screens/SignInScreen";

import SignUpScreen from "./src/screens/SignUpScreen";

import AppLoading from "expo-app-loading";

import * as Font from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const getFonts = () =>
Font.loadAsync({
  "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
});

export default function App() {


 const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
    <NavigationContainer>
       <Stack.Navigator>
    <Stack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
    </NavigationContainer>
    )
  }
  else{
    return (

      <AppLoading 

    startAsync={getFonts}
    onFinish={() => setFontLoaded(true)}
    onError={err => console.log(err)}
    />
      )
  }

}
