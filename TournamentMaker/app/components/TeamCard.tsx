import { StyleSheet, Text, View } from "react-native";
import { TeamCardProps } from "../types";

const TeamCard = ({ name, players }: TeamCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.content}>
        {players.map((p, i) => (
          <Text key={i} style={styles.player}>
            {p}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    width: "100%",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  content: {
    gap: 6,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 12,
  },
  player: {
    fontSize: 16,
  },
});

export default TeamCard;
