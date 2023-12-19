import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

import Splash from "./screens/splash";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import AllStore from './screens/AllStore';
import DetailStore from './screens/DetailStore';

const Stack = createNativeStackNavigator();

const headerStyle = {
  headerTitleStyle: { color: "white" },
  headerStyle: {
    backgroundColor: "#FC6011",
  },
  headerTintColor: "white",
  headerTitleAlign: 'center',
};

const MainApp = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
      });
      setIsFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: "New Account",
              ...headerStyle,
              headerShown: true,
            }}
          />
          <Stack.Screen name="AllStore" component={AllStore} />
          <Stack.Screen name="DetailStore" component={DetailStore} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp;
