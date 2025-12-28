import { useState } from "react";
import teamsData from "../../data/teams.json";
import { Team, Teams } from "../types";

const useTeams = () => {
  const [teamsObject, setTeamsObject] = useState<Teams>(teamsData);

  // operations
  const addTeam = (team: Team) => {
    setTeamsObject((prev) => ({
      ...prev,
      teams: [...prev.teams, team],
    }));
  };

  const addPlayer = (teamId: string, player: string) => {
    setTeamsObject((prev) => ({
      ...prev,
      teams: prev.teams.map((team) =>
        team.id === teamId
          ? { ...team, players: [...team.players, player] }
          : team
      ),
    }));
  };

  return { teamsObject, addTeam, addPlayer };
};

export default useTeams;
