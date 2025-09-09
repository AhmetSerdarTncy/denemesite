export interface Match {
  id: number;
  date: string;
  tournament: string;
  opponent: string;
  score: string;
  map: string;
  status: "KAZANDI" | "KAYBETTİ" | "BERABERE";
  highlight?: string;
}

export interface Jersey {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface Player {
  id: number;
  ign: string;
  role: string;
  kd: string;
  agent: string;
}

export interface TeamInfo {
  founded: number;
  region: string;
  achievements: string[];
  sponsors: { name: string; logo: string }[];
}