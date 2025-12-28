import { useState } from "react";
import teamsData from "../../data/teams.json";
import { Team, Teams } from "../types";

const useTeams = () => {
  const [teamsObject, setTeamsObject] = useState<Teams>(teamsData);

  // operations
  const addTeam = (team: Team) => {
    setTeamsObject({ teams: [...teamsObject.teams, team] });
  };

  const addPlayer = (teamId: string, player: string) => {
    const newTeams: Team[] = teamsObject.teams.map((team) =>
      team.id === teamId
        ? { ...team, players: [...team.players, player] }
        : team
    );

    setTeamsObject({ teams: newTeams });
  };

  return { teamsObject, addTeam, addPlayer };
};

export default useTeams;
