export interface Team {
  id: string;
  name: string;
  players: string[];
}

export interface Teams {
  teams: Team[];
}

// prop types
export type TeamCardProps = {
  name: string;
  players: string[];
};
