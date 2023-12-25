import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Splash from "./screens/splash";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import AllStore from './screens/AllStore';
import DetailStore from './screens/DetailStore';
import DetailProduk from "./screens/DetailProduk";
import BayarProduk from "./screens/BayarProduk";
import ProfileScreen from "./screens/Profile";
import EditProfileScreen from './screens/Edit-Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const { MainPage, ProfilePage } = createNativeStackNavigator();
const MainPage = createNativeStackNavigator();
const ProfilePage = createNativeStackNavigator();
const HistoryPage = createNativeStackNavigator();

const MainPageNavigator = () => {
  return (
    <MainPage.Navigator
      initialRouteName="AllStore"
      screenOptions={headerStyle}
    >
      <MainPage.Screen
        name="AllStore"
        component={AllStore}
        options={{ headerShown: false }}
      />
      <MainPage.Screen
        name="DetailStore"
        component={DetailStore}
        options={{ headerShown: false }}
      />
      <MainPage.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{ headerShown: false }}
      />
      <MainPage.Screen
        name="BayarProduk"
        component={BayarProduk}
        options={{ headerShown: false }}
      />
    </MainPage.Navigator>
  )
}

const HistoryPageNavigator = () => {
  //! Taruh Beberapa Halaman seperti Profile, Main Navigator
}

const ProfilePageNavigator = () => {
  return (
    <ProfilePage.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={headerStyle}
    >
      <ProfilePage.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfilePage.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />

    </ProfilePage.Navigator>
  )
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Menu Utama") {
            iconName = 'home'
          } else if (route.name === "History Transaksi") {
            iconName = 'history'
          }
          else if (route.name === "Profile") {
            iconName = 'user'
          }

          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={focused ? '#FC6011' : color}
            />
          )
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text style={{ marginBottom: 10, color: focused ? '#FC6011' : color }}>
              {children}
            </Text>
          )
        },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0
        },
      })}
    >
      <Tab.Screen name="Menu Utama" component={MainPageNavigator} options={{ unmountOnBlur: true, headerShown: false }} />
      <Tab.Screen name="History Transaksi" component={HistoryPageNavigator} options={{ unmountOnBlur: true, headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfilePageNavigator} options={{ unmountOnBlur: true, headerShown: false }} />
    </Tab.Navigator>
  )
}

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
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf')
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
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="AllStore" component={AllStore} />
          <Stack.Screen name="DetailStore" component={DetailStore} />
          <Stack.Screen name="DetailProduk" component={DetailProduk} />
          <Stack.Screen name="BayarProduk" component={BayarProduk} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} /> */}
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
