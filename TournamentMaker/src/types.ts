export interface Team {
  id: string;
  name: string;
  players: string[];
}

export interface Teams {
  teams: Team[];
}

export interface TeamFormValues {
  teamName: string;
  players: { name: string }[];
}

// prop types
export type TeamCardProps = {
  name: string;
  players: string[];
};
