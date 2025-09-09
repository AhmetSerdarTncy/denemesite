"user client";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-[#6B46C1]/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">TAKIM ADINIZ</h3>
            <p className="text-[#E2E8F0]/70">
              Valorant'da Türkiye'yi temsil eden profesyonel e-spor takımı
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-[#E2E8F0]/70">
              <li><a href="#takim" className="hover:text-[#9333EA]">Takım</a></li>
              <li><a href="#maclar" className="hover:text-[#9333EA]">Maçlar</a></li>
              <li><a href="#formalar" className="hover:text-[#9333EA]">Formalar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-[#E2E8F0]/70">
              <li>info@takiminiz.com</li>
              <li>+90 555 123 45 67</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#9333EA]">📘</a>
              <a href="#" className="text-2xl hover:text-[#9333EA]">🐦</a>
              <a href="#" className="text-2xl hover:text-[#9333EA]">📷</a>
              <a href="#" className="text-2xl hover:text-[#9333EA]">🎮</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#6B46C1]/30 mt-8 pt-8 text-center text-[#E2E8F0]/50">
          <p>© 2023 Takım Adınız. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}