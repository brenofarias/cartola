import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

class TopPlayers extends Component {
  render() {
    return (
      <View style={styles.topPlayers}>
        <View style={styles.playerInfo}>
          <View>
            <Image
              source={require("../../assets/jogadores/jogador.png")}
              style={{ height: 100, width: 100 }}
            />
          </View>
          <View style={{ marginLeft: 15, marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Breno Farias
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>ATA</Text>
              <Text style={{ color: "#CCC" }}>São Paulo</Text>
            </View>
            <Text style={{ color: "#CCC" }}>Escalado por</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                2.000.542
              </Text>
              <Text style={{ color: "#CCC" }}>Cartoleiros</Text>
            </View>
          </View>
        </View>

        <View style={styles.playerInfo}>
          <View>
            <Image
              source={require("../../assets/jogadores/jogador.png")}
              style={{ height: 100, width: 100 }}
            />
          </View>
          <View style={{ marginLeft: 15, marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Breno Farias
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>ATA</Text>
              <Text style={{ color: "#CCC" }}>São Paulo</Text>
            </View>
            <Text style={{ color: "#CCC" }}>Escalado por</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                2.000.542
              </Text>
              <Text style={{ color: "#CCC" }}>Cartoleiros</Text>
            </View>
          </View>
        </View>

        <View style={styles.playerInfo}>
          <View>
            <Image
              source={require("../../assets/jogadores/jogador.png")}
              style={{ height: 100, width: 100 }}
            />
          </View>
          <View style={{ marginLeft: 15, marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Breno Farias
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>ATA</Text>
              <Text style={{ color: "#CCC" }}>São Paulo</Text>
            </View>
            <Text style={{ color: "#CCC" }}>Escalado por</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                2.000.542
              </Text>
              <Text style={{ color: "#CCC" }}>Cartoleiros</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TopPlayers;

const styles = StyleSheet.create({
  topPlayers: {
    height: "auto",
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
    borderColor: "#CCC",
    backgroundColor: "white"
  },
  playerInfo: {
    margin: 24,
    flexDirection: "row",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1
  }
});
