import React from 'react';
import { TrendingUp } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      title: "Da Invisibile a Indispensabile: +127% Clienti",
      subtitle: "FARMACIA - Milano Centro",
      roi: "ROI: 4.5 MESI",
      before: "85 clienti/giorno",
      after: "193 clienti/giorno",
      testimonial: "Non è solo l'insegna. È che finalmente la gente SA che esistiamo. Mia figlia potrà continuare l'attività di famiglia.",
      author: "Dr. Marchetti"
    },
    {
      title: "Menu Digitale = Sala Piena: +€95.000 in 8 Mesi",
      subtitle: "RISTORANTE - Bergamo",
      roi: "ROI: 6 MESI",
      before: "12 coperti/sera",
      after: "38 coperti/sera (+216%)",
      extraInfo: "Fatturato extra: €95.000",
      testimonial: "Prima sembravamo chiusi anche da aperti. Ora la gente prenota per vedere 'il ristorante con lo schermo dei piatti veri'. Ho assunto 3 persone.",
      author: "Chef Giuseppe"
    },
    {
      title: "Da 8 a 47 Clienti al Giorno: La Rinascita",
      subtitle: "PARRUCCHIERE - Napoli",
      roi: "ROI: 5 MESI",
      before: "8 clienti/giorno",
      after: "47 clienti/giorno (+487%)",
      testimonial: "Mia moglie mi aveva detto di chiudere. Ora lavoriamo in 4 e c'è la lista d'attesa. I clienti fanno le foto alla nostra insegna.",
      author: "Marco, Parrucchiere"
    }
  ];

  return (
    <section id="risultati" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">I Risultati Parlano Chiaro</h2>
          <p className="text-xl text-gray-600">3 storie vere. 3 trasformazioni incredibili.</p>
        </div>

        {caseStudies.map((study, index) => (
          <div key={index} className="case-study">
            <div className="flex items-start justify-between mb-4 flex-wrap">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-2">{study.title}</h3>
                <p className="text-primary font-semibold">{study.subtitle}</p>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {study.roi}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center">
                  <TrendingUp className="mr-2" size={20} />
                  Metriche Prima/Dopo:
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Prima:</span>
                    <span className="font-bold">{study.before}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dopo:</span>
                    <span className="font-bold text-green-600">{study.after}</span>
                  </div>
                  {study.extraInfo && (
                    <div className="flex justify-between">
                      <span>Extra:</span>
                      <span className="font-bold text-green-600">{study.extraInfo}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Testimonianza:</h4>
                <p className="italic mb-3">"{study.testimonial}"</p>
                <p className="text-right font-semibold">- {study.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;