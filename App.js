import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Bras from "./screens/Bras";
import Leggings from "./screens/Leggings";
import Tops from "./screens/Tops";
import Sets from "./screens/Sets";
import Home from "./screens/Home";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#fff",
              width: 250,
            },
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "#000",
            headerTitleStlye: {
              fontWeight: "bold",
            },
            drawerActiveTintColor: "blue",
            drawerLabelStyle:{
              color: "#111"
            }
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              drawerLabel: "Home",
              title: "LuaYoga",
              drawerIcon: () => {
                
              }
            }}
            component={Home}
          />
          <Drawer.Screen
            name="Bras"
            options={{
              drawerLabel: "Bras",
              title: "LuaYoga",
              drawerIcon: () => {
                
              }
            }}
            component={Bras}
          />
          <Drawer.Screen
            name="Leggings"
            options={{
              drawerLabel: "Leggings",
              title: "LuaYoga",
              drawerIcon: () => {
                
              }
            }}
            component={Leggings}
          />
          <Drawer.Screen
            name="Sets"
            options={{
              drawerLabel: "Sets",
              title: "LuaYoga",
              drawerIcon: () => {
                
              }
            }}
            component={Sets}
          />
          <Drawer.Screen
            name="Tops"
            options={{
              drawerLabel: "Tops",
              title: "LuaYoga",
              drawerIcon: () => {
                
              }
            }}
            component={Tops}
          />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}