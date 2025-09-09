import { teamInfo, players } from "@/lib/data";
import { Player } from "@/types";

export default function TeamInfo() {
  return (
    <section id="takim" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-text">TAKIMIMIZ</h2>
        <p className="text-xl text-[#E2E8F0]/80 max-w-2xl mx-auto">
          2023 yılında kurulan takımımız, Valorant'da Türkiye'yi uluslararası arenada temsil etmeyi hedefliyor
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card">
          <h3 className="text-2xl font-bold mb-6">Hakkımızda</h3>
          <div className="space-y-4">
            <div>
              <span className="text-[#9333EA] font-semibold">Kuruluş:</span> {teamInfo.founded}
            </div>
            <div>
              <span className="text-[#9333EA] font-semibold">Bölge:</span> {teamInfo.region}
            </div>
            <div>
              <span className="text-[#9333EA] font-semibold">Misyonumuz:</span> Türkiye'deki en iyi Valorant takımı olmak ve uluslararası başarılar elde etmek
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-2xl font-bold mb-6">Başarılarımız</h3>
          <ul className="space-y-3">
            {teamInfo.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#F472B6] mr-2">▸</span> {achievement}
              </li>
            ))}
          </ul>
          
          <h4 className="text-lg font-bold mt-6 mb-3">Sponsorlarımız</h4>
          <div className="flex space-x-4">
            {teamInfo.sponsors.map((sponsor, index) => (
              <div key={index} className="bg-[#0F0F1E] p-3 rounded-lg">
                <div className="w-16 h-16 bg-[#6B46C1]/20 rounded flex items-center justify-center">
                  <span className="text-xs text-center">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3 className="text-3xl font-bold mb-8 text-center">KADROMUZ</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {players.map((player: Player) => (
            <div key={player.id} className="bg-[#0F0F1E] rounded-xl p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#6B46C1] to-[#F472B6] rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">P{player.id}</span>
              </div>
              <h4 className="text-xl font-bold mb-1">{player.ign}</h4>
              <p className="text-[#9333EA] mb-2">{player.role}</p>
              <div className="text-sm text-[#E2E8F0]/80">
                <div>K/D: {player.kd}</div>
                <div>Favori: {player.agent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}