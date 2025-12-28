import { ScrollView, StyleSheet, View } from "react-native";
import useTeams from "../hooks/useTeams";
import TeamCard from "../components/TeamCard";

const Teams = () => {
  const { teamsObject } = useTeams();

  return (
    <View style={styles.container}>
      <ScrollView>
        {teamsObject.teams.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            name={team.name}
            players={team.players}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Teams;
