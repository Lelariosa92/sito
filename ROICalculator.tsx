import React, { useState } from 'react';

const ROICalculator: React.FC = () => {
  const [passantiGiorno, setPassantiGiorno] = useState(500);
  const [percentualeEntra, setPercentualeEntra] = useState(1); // 0.5%, 1%, 2%, 10%
  const [scontrinoMedio, setScontrinoMedio] = useState(25);

  // Opzioni per la percentuale che entra
  const percentualeOptions = [
    { value: 0.5, label: '0.5% - Senza schermo (% bassa)', multiplier: 1 },
    { value: 1, label: '1% - Con schermo (+40%)', multiplier: 1.4 },
    { value: 2, label: '2% - Con schermo + promozione (+100%)', multiplier: 2 }
  ];

  const calculateROI = () => {
    // Calcolo clienti attuali
    const clientiAttuali = Math.round((passantiGiorno * percentualeEntra) / 100);
    
    // Trova il moltiplicatore per la percentuale selezionata
    const selectedOption = percentualeOptions.find(opt => opt.value === percentualeEntra);
    const multiplier = selectedOption?.multiplier || 1;
    
    // Calcolo nuovi clienti con InsegneVideo
    const nuoviClienti = Math.round(clientiAttuali * multiplier);
    const clientiExtra = nuoviClienti - clientiAttuali;
    
    // Calcolo fatturato
    const fatturatoExtra = clientiExtra * scontrinoMedio * 30; // mensile
    
    // Costo mensile fisso
    const costoMensile = 185;
    
    // Guadagno netto
    const guadagnoNetto = fatturatoExtra - costoMensile;
    
    // ROI in mesi
    const roiMesi = costoMensile / (fatturatoExtra > 0 ? fatturatoExtra : 1);

    return {
      clientiExtra,
      fatturatoExtra,
      costoMensile,
      guadagnoNetto,
      roiMesi: roiMesi < 1 ? 1 : Math.round(roiMesi)
    };
  };

  const results = calculateROI();

  return (
    <section id="roi" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-dark mb-4">Calcola il Tuo ROI</h2>
          <p className="text-xl text-gray-600">Scopri quanto potresti guadagnare con la tua insegna video</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonna Sinistra - I Tuoi Dati */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-dark mb-8">I Tuoi Dati</h3>
              
              <div className="space-y-8">
                {/* Passanti al giorno */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Passanti al giorno:
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={passantiGiorno}
                      onChange={(e) => setPassantiGiorno(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>100</span>
                      <span>1000</span>
                      <span>5000</span>
                    </div>
                  </div>
                  <div className="text-center mt-2 text-xl font-bold text-primary">
                    {passantiGiorno.toLocaleString()}
                  </div>
                </div>

                {/* Percentuale che entra */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    % che entra ora:
                  </label>
                  <div className="space-y-3">
                    {percentualeOptions.map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="percentuale"
                          value={option.value}
                          checked={percentualeEntra === option.value}
                          onChange={(e) => setPercentualeEntra(parseFloat(e.target.value))}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scontrino medio */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Scontrino medio €:
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="200"
                    value={scontrinoMedio}
                    onChange={(e) => setScontrinoMedio(parseInt(e.target.value) || 25)}
                    className="w-full px-4 py-3 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Colonna Destra - Con InsegnaVideo */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-dark mb-8">Con Insegna Video:</h3>
              
              <div className="space-y-6">
                {/* Clienti in più al giorno */}
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="text-lg text-gray-700">Clienti in più al giorno:</div>
                  <div className="text-3xl font-bold text-orange-600">+{results.clientiExtra}</div>
                </div>

                {/* Fatturato extra mensile */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-lg text-gray-700">Fatturato extra mensile:</div>
                  <div className="text-3xl font-bold text-green-600">€{results.fatturatoExtra.toLocaleString()}</div>
                </div>

                {/* ROI previsto */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-lg text-gray-700">ROI previsto:</div>
                  <div className="text-3xl font-bold text-green-600">{results.roiMesi} mes{results.roiMesi === 1 ? 'e' : 'i'}</div>
                </div>

                {/* Investimento */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-bold text-dark mb-4">Investimento:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Canone mensile:</span>
                      <span className="font-bold text-xl">€{results.costoMensile}/mese</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-gray-700">Guadagno netto:</span>
                      <span className="font-bold text-xl text-green-600">€{results.guadagnoNetto.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    const element = document.getElementById('verifica-idoneita');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-colors"
                >
                  Voglio Questi Risultati!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 107, 53, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(255, 107, 53, 0.3);
        }

        .slider::-webkit-slider-track {
          height: 12px;
          border-radius: 6px;
          background: linear-gradient(to right, var(--primary) 0%, var(--primary) ${(passantiGiorno - 100) / (5000 - 100) * 100}%, #e5e7eb ${(passantiGiorno - 100) / (5000 - 100) * 100}%, #e5e7eb 100%);
        }
      `}</style>
    </section>
  );
};

export default ROICalculator;