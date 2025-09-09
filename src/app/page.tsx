import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamInfo from "@/components/TeamInfo";
import MatchHistory from "@/components/MatchHistory";
import JerseyGallery from "@/components/JerseyGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/valorant-bg.jpg')] opacity-20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            TAKIM ADINIZ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#E2E8F0] max-w-2xl mx-auto">
            Valorant'da Türkiye'yi temsil eden profesyonel e-spor takımı
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Maç Programı</button>
            <button className="border-2 border-[#9333EA] px-8 py-3 rounded-lg font-semibold hover:bg-[#9333EA] hover:text-black transition-all">
              Kadromuz
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        <TeamInfo />
        <MatchHistory />
        <JerseyGallery />
      </div>
      
      <Footer />
    </main>
  );
}