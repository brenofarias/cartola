import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView
} from "react-native";
import TopPlayers from "./components/TopPlayers";

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <StatusBar backgroundColor="#FF8C00" barStyle="light-content" />
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.scrollY } } }
          ])}
        >
          <View style={{ backgroundColor: "#FF8C00", height: 50 }}>
            <Animated.View style={styles.containers}>
              <Text style={styles.textView}>Dashboard</Text>
            </Animated.View>
          </View>
          <View style={styles.infos}>
            <View style={styles.timePrice}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10,
                  color: "#C0C0C0",
                  textAlign: "center"
                }}
              >
                PREÇO DO TIME
              </Text>
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                R$131.19
              </Text>
            </View>
            <View style={styles.marketClose}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10,
                  color: "#C0C0C0",
                  textAlign: "center"
                }}
              >
                MERCADO FECHA
              </Text>
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                HOJE às 15:00
              </Text>
            </View>
            <View style={styles.allMoney}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10,
                  color: "#C0C0C0",
                  textAlign: "center"
                }}
              >
                VOCÊ AINDA TEM
              </Text>
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                R$18.37
              </Text>
            </View>
          </View>
          <View style={styles.myTeam}>
            <View style={styles.teamInfo}>
              <View>
                <Image
                  source={require("../assets/sp.png")}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.teamName}>Exilados F.C.B</Text>
                <Text style={styles.userName}>Breno Farias</Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    marginTop: 5,
                    color: "#ff8c00"
                  }}
                >
                  VER PERFIL
                </Text>
              </View>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#CCC",
                flexDirection: "row",
                marginHorizontal: 20,
                height: 80
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  borderRightWidth: 1,
                  borderColor: "#CCC",
                  marginBottom: 5
                }}
              >
                <Text style={{ fontSize: 12, color: "#C0C0C0", marginTop: 15 }}>
                  Jog. Pont.
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>0/12</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 12, color: "#C0C0C0", marginTop: 15 }}>
                  Parcial
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>---</Text>
              </View>
            </View>
          </View>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            MAIS ESCALADOS
          </Text>
          <TopPlayers />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Dashboard;

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
  },
  infos: {
    // flex: 1,
    flexDirection: "row",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    borderBottomWidth: 0.2,
    borderColor: "#CCC",
    backgroundColor: "white"
    // shadowOffset: { width: 10, height: 10 },
    // shadowColor: "black",
    // shadowOpacity: 0.2
  },
  timePrice: {
    flex: 1,
    borderRightWidth: 0.2,
    borderColor: "#CCC",
    height: 50
  },
  marketClose: {
    flex: 1,
    borderRightWidth: 0.2,
    borderColor: "#CCC",
    height: 50
  },
  allMoney: {
    flex: 1,
    borderRightWidth: 0.2,
    borderColor: "#CCC",
    height: 50
  },
  myTeam: {
    // flex: 1,
    // flexDirection: "column",
    height: 200,
    backgroundColor: "#FFF",
    borderRadius: 5,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    // borderBottomWidth: 0.2,
    borderColor: "#CCC",
    backgroundColor: "white"
  },
  teamInfo: {
    margin: 24,
    flex: 1,
    flexDirection: "row"
  },
  teamName: {
    fontWeight: "bold",
    textAlign: "center"
  },
  userName: {
    // textAlign: "center",
    fontSize: 12,
    color: "#C0C0C0"
  }
});
