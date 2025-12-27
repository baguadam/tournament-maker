import { useState } from "react";
import teamsData from "../../data/teams.json";
import { Team, Teams } from "../types";

const useTeams = () => {
  const [teams, setTeams] = useState<Teams>(teamsData);

  // operations
  const addTeam = (team: Team) => {
    setTeams({ teams: [...teams.teams, team] });
  };

  const addPlayer = (teamId: string, player: string) => {
    const newTeams: Team[] = teams.teams.map((team) =>
      team.id === teamId
        ? { ...team, players: [...team.players, player] }
        : team
    );

    setTeams({ teams: newTeams });
  };

  return { teams, addTeam, addPlayer };
};

export default useTeams;
