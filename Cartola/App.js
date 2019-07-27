import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

/* SCREENS */
import Dashboard from "./screens/Dashboard";
import Competitions from "./screens/Competitions";
import Escalation from "./screens/Escalation";
import Friends from "./screens/Friends";

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/escalation.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Escalation: {
      screen: Escalation,
      navigationOptions: {
        tabBarLabel: "Escalação",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/escalation.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Competitions: {
      screen: Competitions,
      navigationOptions: {
        tabBarLabel: "Competições",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/escalation.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: "Amigos",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/escalation.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#ff8c00",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);
