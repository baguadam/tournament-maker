import { StyleSheet, Text } from "react-native";
import { Team } from "../types";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const TeamViewer = ({ name, players }: Team) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {name}
            {"\n"}
          </Text>
          {players.map((player, idx) => (
            <Text key={idx}>{player} </Text>
          ))}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TeamViewer;
