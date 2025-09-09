import { matches } from "@/lib/data";
import { Match } from "@/types";

export default function MatchHistory() {
  return (
    <section id="maclar" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-text">MAÇ GEÇMİŞİ</h2>
        <p className="text-xl text-[#E2E8F0]/80 max-w-2xl mx-auto">
          Takımımızın oynadığı maçların sonuçları ve detayları
        </p>
      </div>
      
      <div className="card">
        <div className="space-y-4">
          {matches.map((match: Match) => (
            <div key={match.id} className="bg-[#0F0F1E] p-6 rounded-lg border-l-4 border-[#6B46C1]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-1">{match.opponent}</h3>
                  <p className="text-[#9333EA] text-sm">
                    {match.tournament} • {match.map}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-0 text-right">
                  <div className={`text-2xl font-bold ${
                    match.status === "KAZANDI" ? "text-green-400" : 
                    match.status === "KAYBETTİ" ? "text-red-400" : "text-yellow-400"
                  }`}>
                    {match.score}
                  </div>
                  <div className="text-sm text-gray-400">{match.date}</div>
                </div>
              </div>
              
              {match.highlight && (
                <div className="mt-4">
                  <button className="text-sm text-[#F472B6] hover:underline flex items-center">
                    <span>Maç Özetini İzle</span>
                    <span className="ml-1">→</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}