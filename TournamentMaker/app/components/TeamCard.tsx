import { StyleSheet, Text, View } from "react-native";
import { Team } from "../types";

const TeamCard = ({ name, players }: Team) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.content}>
          {players.map((p, i) => (
            <Text key={i} style={styles.player}>
              {p}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#e1ebe4",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    width: 300,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 16,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  player: {
    fontSize: 16,
  },
});

export default TeamCard;
