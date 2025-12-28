import { ScrollView, StyleSheet, View } from "react-native";
import useTeams from "../hooks/useTeams";
import TeamCard from "../components/TeamCard";

const Teams = () => {
  const { teamsObject } = useTeams();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.list}>
        {teamsObject.teams.map((team) => (
          <View key={team.id} style={styles.cardWrap}>
            <TeamCard name={team.name} players={team.players} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f1f6f3ff",
  },
  list: {
    padding: 30,
    gap: 20,
  },
  cardWrap: {
    width: "100%",
  },
});

export default Teams;
