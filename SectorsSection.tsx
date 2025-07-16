import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Utensils, Car, Store, Stethoscope, Building2, Scissors, ShoppingCart } from 'lucide-react';

const SectorsSection: React.FC = () => {
  const navigate = useNavigate();

  const sectors = [
    {
      id: 'farmacie',
      title: 'Farmacie',
      description: 'Uno Schermo LED = +39% di Fatturato\n\nDr. Marchetti: "Da €22 a €38 di scontrino medio solo mostrando servizi che già offrivo"',
      price: 'Zero anticipo',
      roi: 'Risultati garantiti',
      cta: 'Scopri Come →',
      icon: Plus,
      color: 'green',
      image: 'https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/9aaf57f8-49ad-42de-8bb8-77e131b1240c_wm'
    },
    {
      id: 'medici',
      title: 'Studi Medici',
      description: 'Agenda Piena Senza Pubblicità Costosa\n\n"Il display comunica professionalità. +42% prime visite senza spendere in ads" - Dr. Rossi',
      price: '100% deducibile',
      roi: 'Paghi dopo i risultati',
      cta: 'Riempi l\'Agenda →',
      icon: Stethoscope,
      color: 'blue',
      image: 'https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/7ac4278c-9eae-4fc2-8c58-80aa5367fbd6_wm'
    },
    {
      id: 'bar-ristoranti',
      title: 'Bar e Ristoranti',
      description: 'Da Tavoli Vuoti a Locale Sempre Pieno\n\n"Menu digitale = +38 coperti/sera. L\'investimento migliore degli ultimi 10 anni" - Chef Bianchi',
      price: 'Prova gratuita',
      roi: 'ROI in 4 mesi',
      cta: 'Riempi i Tavoli →',
      icon: Utensils,
      color: 'red',
      image: 'https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/3d8d5843-2493-44ff-8464-2d2a25b23074_wm'
    },
    {
      id: 'estetica',
      title: 'Parrucchieri e Centri Estetici',
      description: 'Instagram in Vetrina = Agenda Piena\n\n"Da 8 a 47 clienti/giorno mostrando trasformazioni reali. Incredibile!" - Anna Beauty, Napoli',
      price: 'Si paga da solo',
      roi: 'Garanzia totale',
      cta: 'Moltiplica le Prenotazioni →',
      icon: Scissors,
      color: 'pink',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'supermercati',
      title: 'Supermercati e Retail',
      description: 'Offerte Dinamiche = +28% Scontrino Medio\n\nDisplay che guidano gli acquisti. "Recuperato investimento in 6 mesi netti" - Conad City',
      price: 'Per ogni dimensione',
      roi: 'Zero rischi',
      cta: 'Aumenta lo Scontrino →',
      icon: ShoppingCart,
      color: 'blue',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'retail',
      title: 'Negozi',
      description: 'La Vetrina che Vende Anche Quando Sei Chiuso\n\n+45% ingressi perché "finalmente vedono cosa vendiamo, non solo la serranda" - Boutique Via Roma',
      price: 'Installazione inclusa',
      roi: 'Paghi coi risultati',
      cta: 'Moltiplica i Clienti →',
      icon: Store,
      color: 'purple',
      image: 'https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/cbbf60d0-35c1-44dc-bf14-5a012d2cbdf6_wm'
    },
    {
      id: 'agenzie',
      title: 'Agenzie e Uffici',
      description: 'Da "Sembrano Chiusi" a +41% Nuovi Clienti\n\nDisplay professionale = credibilità immediata. "Vale 10 campagne pubblicitarie" - Studio Verdi',
      price: 'Noleggio operativo',
      roi: 'Deducibile 100%',
      cta: 'Aumenta i Contatti →',
      icon: Building2,
      color: 'gray',
      image: 'https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/43371a51-2f86-4439-b07f-0252978d2adb_wm'
    },
    {
      id: 'automotive',
      title: 'Concessionari e Service',
      description: 'Test Drive +67%, Vendite +23% in 5 Mesi\n\n"Mostriamo auto, promo, finanziamenti H24. Il display vende mentre dormiamo" - BMW Store Milano',
      price: 'ROI garantito',
      roi: 'Sistema completo',
      cta: 'Vendi Più Auto →',
      icon: Car,
      color: 'orange',
      image: 'https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/beef3967-2c2f-4743-8987-81b27a221fd2_wm'
    }
  ];

  const handleSectorClick = (sectorId: string) => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
    navigate(`/${sectorId}`);
  };

  return (
    <section id="settori" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">Soluzioni per Ogni Settore</h2>
          <p className="text-xl text-gray-600">Clicca per vedere i risultati specifici del tuo settore</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={sector.id}
                className="sector-card"
                onClick={() => handleSectorClick(sector.id)}
              >
                <img
                  src={sector.image}
                  alt={`${sector.title} con insegna LED`}
                  className="sector-image"
                />
                <div className="p-6">
                  <div className={`w-16 h-16 bg-${sector.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`text-${sector.color}-600`} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{sector.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed whitespace-pre-line">{sector.description}</p>
                  <div className={`bg-${sector.color}-50 p-4 rounded-lg mb-6`}>
                    <div className={`text-xl font-bold text-${sector.color}-600 mb-1`}>{sector.price}</div>
                    <div className="text-sm text-gray-600">{sector.roi}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;