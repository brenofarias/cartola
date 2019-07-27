import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, Animated } from "react-native";

class Friends extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#ff8c00", height: 50 }}>
          <Animated.View style={styles.containers}>
            <Text style={styles.textView}>Amigos</Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Friends;

const styles = StyleSheet.create({
  containers: {
    flexDirection: "row"
  },
  textView: {
    marginHorizontal: 20,
    marginTop: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "500"
  }
});
