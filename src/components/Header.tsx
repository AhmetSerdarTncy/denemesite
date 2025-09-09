"user client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#0F0F1E]/80 backdrop-blur-md z-50 border-b border-[#6B46C1]/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          TAKIM ADINIZ
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#takim" className="hover:text-[#9333EA] transition-colors">Takım</Link>
          <Link href="#maclar" className="hover:text-[#9333EA] transition-colors">Maçlar</Link>
          <Link href="#formalar" className="hover:text-[#9333EA] transition-colors">Formalar</Link>
          <Link href="#iletisim" className="hover:text-[#9333EA] transition-colors">İletişim</Link>
        </nav>
        
        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
}