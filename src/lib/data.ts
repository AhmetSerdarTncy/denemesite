import { Match, Jersey, Player, TeamInfo } from "@/types";

export const matches: Match[] = [
  {
    id: 1,
    date: "15.08.2023",
    tournament: "VCT Türkiye",
    opponent: "Galatasaray Esports",
    score: "2-1",
    map: "Haven",
    status: "KAZANDI",
    highlight: "/videos/match1.mp4",
  },
  {
    id: 2,
    date: "22.08.2023",
    tournament: "Valorant Challengers",
    opponent: "Fenerbahçe Esports",
    score: "0-2",
    map: "Bind",
    status: "KAYBETTİ",
  },
  {
    id: 3,
    date: "05.09.2023",
    tournament: "VCT Türkiye",
    opponent: "Beşiktaş Esports",
    score: "2-0",
    map: "Ascent",
    status: "KAZANDI",
  },
];

export const jerseys: Jersey[] = [
  {
    id: 1,
    name: "Ana Forma",
    price: "299 TL",
    image: "/images/jersey-home.png",
    description: "Takımın ana renkleriyle tasarlanmış özel koleksiyon forması",
  },
  {
    id: 2,
    name: "Deplasman Forma",
    price: "299 TL",
    image: "/images/jersey-away.png",
    description: "Deplasman maçları için tasarlanmış şık forma",
  },
  {
    id: 3,
    name: "Özel Tasarım",
    price: "399 TL",
    image: "/images/jersey-special.png",
    description: "Sınırlı sayıda üretilmiş özel tasarım forma",
  },
];

export const players: Player[] = [
  { id: 1, ign: "Player1", role: "Duelist", kd: "1.25", agent: "Jett" },
  { id: 2, ign: "Player2", role: "Controller", kd: "1.15", agent: "Brimstone" },
  { id: 3, ign: "Player3", role: "Initiator", kd: "1.08", agent: "Sova" },
  { id: 4, ign: "Player4", role: "Sentinel", kd: "1.12", agent: "Cypher" },
  { id: 5, ign: "Player5", role: "Flex", kd: "1.20", agent: "Chamber" },
];

export const teamInfo: TeamInfo = {
  founded: 2023,
  region: "Türkiye",
  achievements: [
    "VCT Türkiye 2023 - 3.lük",
    "Valorant Challengers 2023 - Play-off",
    "Türkiye Kupası 2023 - Çeyrek Final",
  ],
  sponsors: [
    { name: "Marka 1", logo: "/images/sponsor1.png" },
    { name: "Marka 2", logo: "/images/sponsor2.png" },
  ],
};