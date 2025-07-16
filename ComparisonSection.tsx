import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      feature: "Prova prima di firmare",
      insegneVideo: { value: "SEMPRE, gratis", icon: "check", color: "green" },
      competitors: { value: "Mai", icon: "x", color: "red" }
    },
    {
      feature: "Anticipo richiesto",
      insegneVideo: { value: "€0", icon: "check", color: "green" },
      competitors: { value: "30-50%", icon: "x", color: "red" }
    },
    {
      feature: "Video professionale",
      insegneVideo: { value: "INCLUSO", icon: "check", color: "green" },
      competitors: { value: "€500-2000 extra", icon: "x", color: "red" }
    },
    {
      feature: "Se non funziona",
      insegneVideo: { value: "Smontiamo gratis", icon: "check", color: "green" },
      competitors: { value: "Problemi tuoi", icon: "x", color: "red" }
    },
    {
      feature: "Garanzia soddisfazione",
      insegneVideo: { value: "100% REALE", icon: "check", color: "green" },
      competitors: { value: "Solo parole", icon: "x", color: "red" }
    },
    {
      feature: "Clienti mensili",
      insegneVideo: { value: "Max 10 (qualità)", icon: "check", color: "green" },
      competitors: { value: "Illimitati (quantità)", icon: "x", color: "red" }
    }
  ];

  return (
    <section id="competitor" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">La Nostra Differenza sul Mercato</h2>
          <p className="text-xl text-gray-600">Il confronto che nessun altro osa fare</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary text-white">
              <div className="p-6 font-bold text-lg">CARATTERISTICA</div>
              <div className="p-6 font-bold text-lg text-center border-l border-blue-400">NOI - InsegneVideo</div>
              <div className="p-6 font-bold text-lg text-center border-l border-blue-400">Altri Fornitori del Settore</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                  {row.feature}
                </div>
                <div className="p-6 text-center border-l border-b border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    {row.insegneVideo.icon === 'check' ? (
                      <Check className="text-green-600" size={20} />
                    ) : (
                      <X className="text-red-600" size={20} />
                    )}
                    <span className={`font-semibold ${row.insegneVideo.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                      {row.insegneVideo.value}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center border-l border-b border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    {row.competitors.icon === 'check' ? (
                      <Check className="text-green-600" size={20} />
                    ) : (
                      <X className="text-red-600" size={20} />
                    )}
                    <span className={`font-semibold ${row.competitors.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                      {row.competitors.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-primary font-bold text-lg mb-4">Solo 3 posti disponibili questo mese</p>
            <button 
              onClick={() => {
                const element = document.getElementById('verifica-idoneita');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Voglio la Prova GRATUITA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;