import { View } from "react-native";
import useTeams from "./hooks/useTeams";
import TeamViewer from "./components/TeamViewer";

export default function Index() {
  const { teams } = useTeams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {teams.teams.map((team) => (
        <TeamViewer
          key={team.id}
          id={team.id}
          name={team.name}
          players={team.players}
        />
      ))}
    </View>
  );
}
