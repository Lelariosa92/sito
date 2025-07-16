import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Utensils, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator } from 'lucide-react';

const BarRistorantiPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <>
      {/* Notification Bar */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-2 flex-wrap">
          <Utensils className="animate-pulse" size={16} />
          <span className="font-semibold">FOOD SECTOR: Solo 3 installazioni disponibili questo mese nella tua zona</span>
          <div className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold ml-4 flex items-center space-x-1">
            <Clock size={14} />
            <span>
              Scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(230,0,38,0.95) 0%, rgba(0,78,137,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold">SPECIALIZZATI SETTORE FOOD</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Da <span className="text-yellow-300">Tavoli Vuoti</span> a<br />
                  <span className="text-yellow-300">Ristorante Pieno</span> in 30 Giorni
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  <strong>+127% clienti</strong> per la Pizzeria Romano mostrando piatti appetitosi e offerte.<br />
                  I ristoranti con <span className="bg-red-600 text-white px-2 py-1 rounded font-bold">Display LED</span> attirano il <strong>43% in più</strong> di passanti.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
                  <button 
                    onClick={() => {
                      window.location.href = '/#verifica-idoneita';
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 w-full md:w-auto rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Utensils size={20} />
                    <span>Display per Ristoranti GRATIS</span>
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/#roi';
                    }}
                    className="bg-white text-red-600 border-2 border-white font-semibold text-lg px-8 py-4 w-full md:w-auto rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Calculator size={20} />
                    <span>Calcola Nuovi Clienti</span>
                  </button>
                </div>

                {/* Food Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+127%</div>
                    <div className="text-sm">Clienti Medi</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+43%</div>
                    <div className="text-sm">Coperti Sera</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">4-8</div>
                    <div className="text-sm">Mesi ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">€80</div>
                    <div className="text-sm">Da/Mese</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Problema */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">La Cruda Realtà del Settore Food Italiano</h2>
              <p className="text-xl text-gray-600">I numeri che i ristoratori non vogliono ammettere</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center flex items-center justify-center">
                <Zap className="mr-2" size={24} />
                Mentre i Tuoi Concorrenti Investono in Menu Digitali, Tu Perdi Clienti
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">La Tragedia dei Ristoranti Italiani:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Il 68% dei passanti</strong> non sa cosa cucini e passa oltre</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Le tue specialità</strong> restano invisibili al 80% dei passanti</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>I passanti</strong> non vedono le tue offerte speciali e prezzi</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>La concorrenza</strong> con display LED attira i tuoi potenziali clienti</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Il Costo dell'Invisibilità Gastronomica:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">RISTORANTI</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€347</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">PIZZERIE</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€267</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">BAR</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€187</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-xl font-bold text-red-700">
                  In questo momento, <span className="text-2xl">17 potenziali clienti</span> stanno passando davanti al tuo locale<br />
                  senza sapere cosa cucini di buono
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fotografie Installazioni */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Le Nostre Installazioni Food</h2>
              <p className="text-xl text-gray-600">Foto reali delle trasformazioni che abbiamo realizzato nel settore alimentare</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pizzeria */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/862cf330-d2a3-4a09-9c01-8e10b5381502_wm" 
                  alt="Pizzeria con menu LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Pizzeria - Menu LED Appetitoso</h3>
                  <p className="text-gray-600 mb-4">Menu digitale con foto irresistibili: "PIZZA MARGHERITA €8", "PIZZA DIAVOLA €10".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+68% ordini pizza</span>
                    <span className="text-sm text-gray-500">Roma - Pizzeria Romano</span>
                  </div>
                </div>
              </div>

              {/* Rosticceria */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/b751cfb6-f5ec-41dd-bdf3-4db33e210bdc_wm" 
                  alt="Rosticceria con display LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Rosticceria - Display Take Away</h3>
                  <p className="text-gray-600 mb-4">Prezzi chiari e appetitosi: "POLLO ARROSTO €12/kg", "LASAGNE €8", "ANTIPASTI €15".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+89% vendite take away</span>
                    <span className="text-sm text-gray-500">Milano - Rosticceria Boni</span>
                  </div>
                </div>
              </div>

              {/* Gelateria */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/398e5f14-100e-4436-be31-906c2fc98911_wm" 
                  alt="Gelateria con menu LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Gelateria - Menu Colorato Stagionale</h3>
                  <p className="text-gray-600 mb-4">Gusti sempre aggiornati: "GELATO ARTIGIANALE €3", "COPPA CASA €6", "GRANITE €4".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+156% vendite estive</span>
                    <span className="text-sm text-gray-500">Firenze - Gelateria Vivoli</span>
                  </div>
                </div>
              </div>

              {/* Ristorante Fine Dining */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/a5a2e6f7-9da4-452c-b5d8-cf3e836e2d85_wm" 
                  alt="Ristorante elegante con menu LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Ristorante - Menu Elegante Fine Dining</h3>
                  <p className="text-gray-600 mb-4">Piatti raffinati: "RISOTTO PORCINI €18", "BRANZINO CROSTA €24", "DEGUSTAZIONE €45".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+34% menu degustazione</span>
                    <span className="text-sm text-gray-500">Torino - Osteria del Borgo</span>
                  </div>
                </div>
              </div>

              {/* Bar Prima/Dopo */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/4879e82b-6534-41c1-b358-86acb3495ead_wm" 
                  alt="Bar trasformazione prima e dopo"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Bar - Trasformazione Prima vs Dopo</h3>
                  <p className="text-gray-600 mb-4">Menu dinamico: "CAPPUCCINO €1.50", "SPRITZ €6", "PANINI GOURMET €8".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+95% aperitivi serali</span>
                    <span className="text-sm text-gray-500">Napoli - Bar Centrale</span>
                  </div>
                </div>
              </div>

              {/* Food Truck */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/155153a3-8741-4e91-81aa-909b39f85d4e_wm" 
                  alt="Food truck con display LED mobile"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Food Truck - Display Mobile LED</h3>
                  <p className="text-gray-600 mb-4">Street food veloce: "ARANCINI €4", "PIADINA €7", "PORCHETTA €9".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+167% ordini street</span>
                    <span className="text-sm text-gray-500">Bologna - Truck Emiliano</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Noleggio vs Vendita */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Noleggio o Acquisto? Scegli la Tua Formula</h2>
              <p className="text-xl text-gray-600">Due soluzioni, un solo obiettivo: far crescere il tuo ristorante</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Noleggio (Preferito) */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">CONSIGLIATO</div>
                  <h3 className="text-2xl font-bold text-green-700">Noleggio Operativo</h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">da €185/mese</div>
                  <div className="text-sm text-gray-600">IVA inclusa - Tutto compreso</div>
                </div>

                <h4 className="font-bold mb-3">✅ VANTAGGI NOLEGGIO:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• <strong>Zero anticipo</strong> - Parti subito</li>
                  <li>• <strong>Prova gratuita</strong> - Decidi dopo aver visto i risultati</li>
                  <li>• <strong>Assistenza 24/7</strong> inclusa</li>
                  <li>• <strong>Aggiornamenti software</strong> automatici</li>
                  <li>• <strong>Sostituzione immediata</strong> se guasto</li>
                  <li>• <strong>Deducibilità fiscale</strong> totale</li>
                  <li>• <strong>ROI veloce</strong> - Recuperi in 4-6 mesi</li>
                </ul>

                <div className="bg-white p-4 rounded-lg border-2 border-green-200 mb-4">
                  <h4 className="font-bold text-green-700 mb-2">📊 ESEMPIO ROI PIZZERIA:</h4>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>Costo mensile:</span>
                      <span className="font-bold">€185</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ricavi extra medi:</span>
                      <span className="font-bold text-green-600">€1.200/mese</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Guadagno netto:</span>
                      <span className="font-bold text-green-600">€1.015/mese</span>
                    </div>
                  </div>
                </div>

                <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg w-full text-lg hover:bg-red-700 transition-colors">
                  Inizia Prova Gratuita
                </button>
              </div>

              {/* Vendita */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-700">Acquisto Diretto</h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">da €3.500</div>
                  <div className="text-sm text-gray-600">Una tantum - IVA esclusa</div>
                </div>

                <h4 className="font-bold mb-3">✅ VANTAGGI ACQUISTO:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• <strong>Proprietà completa</strong> dell'hardware</li>
                  <li>• <strong>Nessun canone mensile</strong></li>
                  <li>• <strong>Ammortamento fiscale</strong> in 5 anni</li>
                  <li>• <strong>Garanzia</strong> 2 anni inclusa</li>
                  <li>• <strong>Assistenza</strong> primo anno inclusa</li>
                  <li>• <strong>Personalizzazione</strong> massima</li>
                  <li>• <strong>Rivendita</strong> possibile</li>
                </ul>

                <div className="bg-white p-4 rounded-lg border-2 border-blue-200 mb-4">
                  <h4 className="font-bold text-blue-700 mb-2">💰 ESEMPIO ROI RISTORANTE:</h4>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>Investimento:</span>
                      <span className="font-bold">€4.200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ricavi extra medi:</span>
                      <span className="font-bold text-blue-600">€1.400/mese</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>ROI completo:</span>
                      <span className="font-bold text-blue-600">3 mesi</span>
                    </div>
                  </div>
                </div>

                <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full text-lg hover:bg-blue-700 transition-colors">
                  Richiedi Preventivo
                </button>
              </div>
            </div>

            <div className="text-center mt-8 bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-dark mb-4">🤔 Non Sai Quale Scegliere?</h4>
              <p className="text-gray-600 mb-4">Il 89% dei nostri clienti food sceglie il <strong>noleggio da €80/mese</strong> per iniziare senza rischi</p>
              <button className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Consulenza Gratuita → 15 MIN
              </button>
            </div>
          </div>
        </section>

        {/* Casi di Successo */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">3 Storie Food che Ti Lasceranno a Bocca Aperta</h2>
              <p className="text-xl text-gray-600">Da locali vuoti a ristoranti pieni ogni sera</p>
            </div>

            {/* Caso 1: Pizzeria Romano */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Pizzeria Romano: Da 12 a 89 Coperti Serali</h3>
                  <p className="text-red-600 font-semibold">Pizzeria - Roma Trastevere</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 5 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Il Dramma (PRIMA):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Solo 12 coperti serali (su 60 posti)</li>
                    <li>• Menu scritto a mano illeggibile</li>
                    <li>• Clienti indecisi = tavoli che se ne vanno</li>
                    <li>• Pizze speciali sconosciute al 90%</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-6">La Soluzione Menu LED:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Menu LED con foto appetitose delle pizze</li>
                    <li>• Prezzi chiari e ben visibili</li>
                    <li>• Promozioni automatiche "HAPPY HOUR 18-20"</li>
                    <li>• Ingredienti evidenziati per ogni pizza</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">I Risultati (DOPO 6 MESI):</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Coperti serali:</span>
                      <span className="font-bold text-red-600">89 (+641%)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Scontrino medio:</span>
                      <span className="font-bold text-red-600">da €18 a €26</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Fatturato mensile:</span>
                      <span className="font-bold text-red-600">+€22.400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lista d'attesa weekend:</span>
                      <span className="font-bold text-green-600">SEMPRE</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Testimonianza:</h4>
                <p className="italic text-lg">"Il menu LED ha salvato la pizzeria. I clienti ora vedono le foto delle pizze e ordinano subito. 'PIZZA DIAVOLA €10' - 'CAPRICCIOSA €11' - tutto chiaro. Ho assunto 2 pizzaioli!"</p>
                <p className="text-right mt-2 font-semibold">- Giuseppe Romano, Pizzaiolo</p>
              </div>
            </div>

            {/* Caso 2: Bar Centrale */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Bar Centrale: Da 8 a 47 Clienti al Giorno</h3>
                  <p className="text-red-600 font-semibold">Bar - Napoli Centro Storico</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 4 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Crisi:</h4>
                  <p className="text-sm mb-4">Bar storico ma invisibile. Solo 8 clienti fissi al giorno. Aperitivi inesistenti. Rischio chiusura.</p>
                  
                  <h4 className="font-semibold mb-3">Installazione Salvavita:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Menu LED esterno con aperitivi</li>
                    <li>• Prezzi chiari: "SPRITZ €6", "NEGRONI €7"</li>
                    <li>• Promozioni automatiche "HAPPY HOUR 18-20"</li>
                    <li>• Panini gourmet evidenziati</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Rinascita:</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Clienti giornalieri:</span>
                      <span className="font-bold text-red-600">47 (+487%)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Aperitivi serali:</span>
                      <span className="font-bold text-red-600">da 0 a 35/sera</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fatturato extra:</span>
                      <span className="font-bold text-red-600">€8.900/mese</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="italic text-lg">"Mia moglie mi aveva detto di chiudere. Ora lavoriamo in 4 e c'è la lista d'attesa per l'aperitivo. I clienti fanno le foto al nostro menu LED!"</p>
                <p className="text-right mt-2 font-semibold">- Marco, Barista</p>
              </div>
            </div>

            {/* Caso 3: Osteria del Borgo */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Osteria del Borgo: Menu Degustazione Sold Out</h3>
                  <p className="text-red-600 font-semibold">Ristorante Fine Dining - Torino Centro</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 6 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Il Problema (PRIMA):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Menu degustazione sconosciuto (solo 2 al mese)</li>
                    <li>• Piatti raffinati non valorizzati</li>
                    <li>• Clienti ordinano sempre i soliti piatti</li>
                    <li>• Chef frustrato per creatività sprecata</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-6">Menu LED Elegante:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Display elegante con piatti fotografati</li>
                    <li>• Menu degustazione evidenziato</li>
                    <li>• Descrizioni dettagliate ingredienti</li>
                    <li>• Abbinamenti vini suggeriti</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">L'Esplosione (8 MESI):</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Menu degustazione:</span>
                      <span className="font-bold text-red-600">da 2 a 28/mese</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Scontrino medio:</span>
                      <span className="font-bold text-red-600">da €35 a €58</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Prenotazioni:</span>
                      <span className="font-bold text-red-600">+156%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recensioni 5 stelle:</span>
                      <span className="font-bold text-green-600">+340%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Testimonianza:</h4>
                <p className="italic text-lg">"Il menu LED ha trasformato la percezione del ristorante. I clienti ora vedono la qualità dei nostri piatti e scelgono il menu degustazione. Siamo sempre pieni!"</p>
                <p className="text-right mt-2 font-semibold">- Chef Alessandro, Osteria del Borgo</p>
              </div>
            </div>
          </div>
        </section>

        {/* La Nostra Differenza sul Mercato */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">La Nostra Differenza sul Mercato Food</h2>
              <p className="text-xl text-gray-600">Il confronto che nessun altro fornitore osa fare</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-secondary text-white">
                  <div className="p-6 font-bold text-lg">CARATTERISTICA</div>
                  <div className="p-6 font-bold text-lg text-center border-l border-blue-400">NOI - InsegneVideo</div>
                  <div className="p-6 font-bold text-lg text-center border-l border-blue-400">Altri Fornitori Food</div>
                </div>

                {/* Rows */}
                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Prova prima di firmare
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">SEMPRE, gratis</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">Mai</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-white">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Anticipo richiesto
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">€0</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">30-50%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Foto menu professionali
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">INCLUSE</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">€500-1500 extra</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-white">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Se non aumenta i clienti
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">Smontiamo gratis</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">Problemi tuoi</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Aggiornamenti menu
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">ILLIMITATI</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">€50 a modifica</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-white">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Esperienza settore food
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">34 anni specializzati</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">Generici</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-red-600 font-bold text-lg mb-4">Solo 3 installazioni food disponibili questo mese</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('richiesta-info-food');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Voglio la Prova GRATUITA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Richiesta Informazioni */}
        <section id="richiesta-info-food" className="section-padding bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Richiedi Informazioni per il Tuo Locale Food</h2>
              <p className="text-xl mb-6">Solo 3 installazioni disponibili questo mese nella tua zona</p>
              
              {/* Countdown */}
              <div className="bg-red-700 text-white py-3 px-6 rounded-lg mb-8 inline-flex items-center space-x-2">
                <Clock size={20} />
                <span className="font-bold">
                  Il tuo posto scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </span>
              </div>

              {/* Form */}
              <form className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo di locale food*
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    >
                      <option value="">Seleziona...</option>
                      <option value="ristorante">Ristorante</option>
                      <option value="pizzeria">Pizzeria</option>
                      <option value="bar">Bar/Caffetteria</option>
                      <option value="trattoria">Trattoria/Osteria</option>
                      <option value="rosticceria">Rosticceria</option>
                      <option value="gelateria">Gelateria</option>
                      <option value="food-truck">Food Truck</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Città*
                    </label>
                    <input
                      type="text"
                      placeholder="Es. Milano"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome locale*
                    </label>
                    <input
                      type="text"
                      placeholder="Es. Pizzeria Romano"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email aziendale*
                    </label>
                    <input
                      type="email"
                      placeholder="info@tuolocale.it"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cellulare*
                    </label>
                    <input
                      type="tel"
                      placeholder="+39 333 1234567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numero coperti/posti
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Seleziona...</option>
                      <option value="1-20">1-20 posti</option>
                      <option value="21-50">21-50 posti</option>
                      <option value="51-100">51-100 posti</option>
                      <option value="100+">Oltre 100 posti</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Obiettivo principale
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Es. Aumentare coperti serali, mostrare menu appetitoso, attirare più clienti..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      Accetto la privacy policy e autorizzo il trattamento dei dati per ricevere informazioni commerciali
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Utensils size={20} />
                  <span>Richiedi Sopralluogo GRATUITO → 2 MIN</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Ti contatteremo entro 24 ore per fissare il sopralluogo gratuito
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="section-padding bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Installiamo GRATIS, Decidi Dopo</h2>
            <p className="text-xl mb-8">
              Installiamo il tuo display LED senza anticipo. Zero rischi. Decidi se firmare il noleggio solo dopo aver visto più passanti entrare.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                onClick={() => {
                  window.location.href = '/#verifica-idoneita';
                }}
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Richiedi Sopralluogo GRATUITO
              </button>
              <a 
                href="tel:+390282941180"
                className="bg-secondary text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-block text-center"
              >
                Chiama: 02-82941180
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BarRistorantiPage;