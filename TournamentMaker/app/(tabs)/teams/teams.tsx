import { ScrollView, StyleSheet, View } from "react-native";
import useTeams from "../../../src/hooks/useTeams";
import TeamCard from "../../../src/components/TeamCard";
import { Link } from "expo-router";

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

        <Link href="/teams/create" style={styles.button}>
          Új csapat hozzáadása
        </Link>
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
  button: {
    fontSize: 18,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Teams;
