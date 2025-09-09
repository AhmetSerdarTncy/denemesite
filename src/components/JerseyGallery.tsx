"user client";

import { useState } from "react";
import { jerseys } from "@/lib/data";
import { Jersey } from "@/types";

export default function JerseyGallery() {
  const [selectedJersey, setSelectedJersey] = useState<Jersey>(jerseys[0]);

  return (
    <section id="formalar" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-text">TAKIM FORMALARI</h2>
        <p className="text-xl text-[#E2E8F0]/80 max-w-2xl mx-auto">
          Özel tasarım takım formalarımızı keşfedin
        </p>
      </div>
      
      <div className="card">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jersey Display */}
          <div className="bg-[#0F0F1E] rounded-xl p-8 flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="aspect-square bg-gradient-to-br from-[#6B46C1]/20 to-[#F472B6]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👕</div>
                  <div className="text-sm text-[#E2E8F0]/60">Forma Görseli</div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#6B46C1] px-4 py-1 rounded-full text-sm">
                360° GÖRÜNTÜLE
              </div>
            </div>
          </div>
          
          {/* Jersey Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedJersey.name}</h3>
            <p className="text-3xl font-bold text-[#F472B6] mb-4">{selectedJersey.price}</p>
            <p className="text-[#E2E8F0]/80 mb-6">
              {selectedJersey.description}
            </p>
            
            <div className="grid grid-cols-3 gap-2 mb-6">
              {jerseys.map((jersey) => (
                <button
                  key={jersey.id}
                  onClick={() => setSelectedJersey(jersey)}
                  className={`p-2 rounded-lg border-2 ${
                    selectedJersey.id === jersey.id
                      ? "border-[#9333EA]"
                      : "border-transparent"
                  }`}
                >
                  <div className="aspect-square bg-gradient-to-br from-[#6B46C1]/20 to-[#F472B6]/20 rounded flex items-center justify-center">
                    <span className="text-xs">{jersey.name}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <button className="w-full btn-primary text-lg py-3">
              SATIN AL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}