import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap } from 'lucide-react';

const FarmaciePage: React.FC = () => {
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
      <div className="bg-green-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-2 flex-wrap">
          <Plus className="animate-pulse" size={16} />
          <span className="font-semibold">FARMACIE: Solo 2 installazioni disponibili questo mese</span>
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold ml-4 flex items-center space-x-1">
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
          background: 'linear-gradient(135deg, rgba(0,208,132,0.95) 0%, rgba(0,78,137,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <span className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-bold">SPECIALIZZATI IN FARMACIE</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Dalla Farmacia <span className="text-yellow-300">Invisibile</span><br />
                  alla Farmacia <span className="text-yellow-300">Indispensabile</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  <strong>+127% clienti</strong> in 6 mesi per la Farmacia Marchetti di Milano.<br />
                  La tua farmacia non può più permettersi di essere <strong>invisibile</strong>.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
                  <button 
                    onClick={() => {
                      window.location.href = '/#verifica-idoneita';
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 w-full md:w-auto rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus size={20} />
                    <span>Prova GRATUITA per Farmacie</span>
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/#roi';
                    }}
                    className="bg-white text-green-600 border-2 border-white font-semibold text-lg px-8 py-4 w-full md:w-auto rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <TrendingUp size={20} />
                    <span>Calcola il Tuo ROI</span>
                  </button>
                </div>

                {/* Pharmacy Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+127%</div>
                    <div className="text-sm">Clienti Medi</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">4-6</div>
                    <div className="text-sm">Mesi ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">500m</div>
                    <div className="text-sm">Visibilità</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Turni ASL</div>
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
              <h2 className="text-4xl font-bold text-dark mb-4">La Cruda Verità sulle Farmacie Italiane</h2>
              <p className="text-xl text-gray-600">Quello che nessuno ti dice ma tutti sanno</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center flex items-center justify-center">
                <Zap className="mr-2" size={24} />
                Stai Perdendo Clienti OGNI GIORNO
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">La Realtà Drammatica:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>3 persone su 4</strong> non sanno che la tua farmacia esiste</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Il 68% dei clienti</strong> va alla farmacia "più visibile"</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>I turni notturni</strong> sono un mistero per il 90% delle persone</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>La concorrenza</strong> sta già investendo in LED</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Il Costo dell'Invisibilità:</h4>
                  <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">-€847</div>
                      <div className="text-sm text-gray-600 mb-4">PERSI AL GIORNO</div>
                      <div className="text-lg font-semibold">= 25.410€ al mese</div>
                      <div className="text-sm text-gray-500">che vanno alla concorrenza</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-xl font-bold text-red-700">
                  Mentre leggi questo, <span className="text-2xl">7 clienti</span> stanno andando alla farmacia concorrente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fotografie Installazioni */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Le Nostre Installazioni per Farmacie</h2>
              <p className="text-xl text-gray-600">Foto reali delle trasformazioni che abbiamo realizzato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Farmacia LED Esterna */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/9aaf57f8-49ad-42de-8bb8-77e131b1240c_wm" 
                  alt="Farmacia con insegna LED esterna"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Insegna LED Esterna Premium</h3>
                  <p className="text-gray-600 mb-4">Croce verde HD visibile a 500 metri. Integrazione turni notturni ASL automatica.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">ROI: 4-6 mesi</span>
                    <span className="text-sm text-gray-500">Milano Centro</span>
                  </div>
                </div>
              </div>

              {/* Farmacia Vetrina */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/b7d7bfd1-5492-46eb-b4d9-390e7d4192a6_wm" 
                  alt="Farmacia con display in vetrina"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Display Vetrina Digitale</h3>
                  <p className="text-gray-600 mb-4">Promozioni, consigli salute e disponibilità farmaci sempre aggiornati.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">+45% vendite serali</span>
                    <span className="text-sm text-gray-500">Roma Prati</span>
                  </div>
                </div>
              </div>

              {/* Farmacia Sostituzione */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/99d93f9b-0669-4c22-8b67-a64750b4b6ec_wm" 
                  alt="Farmacia sostituzione insegna tradizionale"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Da Tradizionale a Digitale</h3>
                  <p className="text-gray-600 mb-4">Sostituzione completa dell'insegna tradizionale con LED di ultima generazione.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">+127% clienti</span>
                    <span className="text-sm text-gray-500">Napoli Centro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casi di Successo */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">3 Farmacie, 3 Rinascite Incredibili</h2>
              <p className="text-xl text-gray-600">Storie vere di farmacisti che hanno fatto la scelta giusta</p>
            </div>

            {/* Caso 1: Farmacia Marchetti */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Farmacia Marchetti: Da 85 a 193 Clienti al Giorno</h3>
                  <p className="text-green-600 font-semibold">Milano Centro - Zona Porta Garibaldi</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 4.5 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Il Problema (PRIMA):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 85 clienti al giorno (sotto media zona)</li>
                    <li>• Invisibile tra 4 farmacie nel raggio di 300m</li>
                    <li>• Turni notturni sconosciuti ai residenti</li>
                    <li>• Fatturato in calo da 3 anni</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-6">La Soluzione InsegneVideo:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Insegna LED 3x2m con croce verde HD</li>
                    <li>• Integrazione database ASL turni</li>
                    <li>• Display vetrina per promozioni</li>
                    <li>• Video promozionale incluso</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">I Risultati (DOPO 6 MESI):</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Clienti giornalieri:</span>
                      <span className="font-bold text-green-600">193 (+127%)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Fatturato mensile:</span>
                      <span className="font-bold text-green-600">+€18.400</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Visite turni notturni:</span>
                      <span className="font-bold text-green-600">+340%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ROI investimento:</span>
                      <span className="font-bold text-green-600">4.5 mesi</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Testimonianza:</h4>
                <p className="italic text-lg">"Non è solo l'insegna. È che finalmente la gente SA che esistiamo. Prima eravamo la farmacia invisibile, ora siamo il punto di riferimento del quartiere. Mia figlia potrà continuare l'attività di famiglia."</p>
                <p className="text-right mt-2 font-semibold">- Dr. Roberto Marchetti, Titolare</p>
              </div>
            </div>

            {/* Caso 2: Farmacia San Marco */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Farmacia San Marco: +€22.000 in Vendite Serali</h3>
                  <p className="text-green-600 font-semibold">Venezia Centro - Campo San Marco</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 5 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Sfida:</h4>
                  <p className="text-sm mb-4">Farmacia storica ma con scarsa visibilità serale. I turisti non riuscivano a trovarla dopo le 18:00.</p>
                  
                  <h4 className="font-semibold mb-3">Installazione:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Insegna LED bifacciale illuminata</li>
                    <li>• Croce verde rotante visibile dal ponte</li>
                    <li>• Messaggi multilingua (IT/EN/DE)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Risultati Specifici:</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Vendite 18-22:</span>
                      <span className="font-bold text-green-600">+185%</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Clienti turisti:</span>
                      <span className="font-bold text-green-600">+240%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fatturato extra:</span>
                      <span className="font-bold text-green-600">€22.000/mese</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="italic text-lg">"I turisti ora ci trovano anche di sera. Prima chiudevamo alle 19 con cassa vuota, ora facciamo il 40% del fatturato dopo le 18. L'insegna LED ha salvato la farmacia di famiglia."</p>
                <p className="text-right mt-2 font-semibold">- Dr.ssa Elena Rossi</p>
              </div>
            </div>

            {/* Caso 3: Farmacia Moderna */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Farmacia Moderna: Da Ultima a Prima in Zona</h3>
                  <p className="text-green-600 font-semibold">Bologna Centro - Via Indipendenza</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 6 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Situazione Critica:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ultima farmacia per fatturato in zona (5 concorrenti)</li>
                    <li>• Proprietario stava valutando la vendita</li>
                    <li>• Solo 62 clienti al giorno vs 180 della concorrenza</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-4">Strategia Aggressiva:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Insegna LED più grande della zona</li>
                    <li>• 2 display vetrina interattivi</li>
                    <li>• Sistema turni dinamico</li>
                    <li>• Campagna video personalizzata</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Rinascita (12 mesi):</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Ranking zona:</span>
                      <span className="font-bold text-green-600">Da 5° a 1°</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Clienti giornalieri:</span>
                      <span className="font-bold text-green-600">da 62 a 198</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Assunzioni:</span>
                      <span className="font-bold text-green-600">2 farmacisti</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Valore farmacia:</span>
                      <span className="font-bold text-green-600">+€180.000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="italic text-lg">"Stavo per vendere tutto. Ora ho la farmacia più redditizia della zona e sto aprendo una seconda sede. L'insegna LED non mi ha solo salvato il business, mi ha cambiato la vita."</p>
                <p className="text-right mt-2 font-semibold">- Dr. Marco Bianchi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Funzionalità Esclusive */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Funzionalità Esclusive per Farmacie</h2>
              <p className="text-xl text-gray-600">Tecnologie pensate specificamente per il settore farmaceutico</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Croce Verde HD</h3>
                <p className="text-gray-600 text-center">Croce verde LED ad alta definizione, visibile fino a 500 metri di distanza, conforme alle normative ASL.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Turni Automatici</h3>
                <p className="text-gray-600 text-center">Integrazione automatica con il database ASL per la visualizzazione dei turni notturni e festivi.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Conformità Normative</h3>
                <p className="text-gray-600 text-center">Tutte le installazioni rispettano le normative comunali e regionali per le insegne farmaceutiche.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Display Promozioni</h3>
                <p className="text-gray-600 text-center">Schermo dedicato per promozioni, consigli sanitari e disponibilità farmaci in tempo reale.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Controllo Remoto</h3>
                <p className="text-gray-600 text-center">Gestione completa da smartphone: accensione, spegnimento, messaggi personalizzati e monitoraggio.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Assistenza 24/7</h3>
                <p className="text-gray-600 text-center">Supporto tecnico dedicato 24 ore su 24, 7 giorni su 7, con intervento entro 4 ore.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="section-padding bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Installiamo GRATIS, Decidi Dopo</h2>
            <p className="text-xl mb-8">
              Installiamo la tua insegna LED senza anticipo. Zero rischi. Decidi se firmare il noleggio solo dopo aver visto i risultati.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                onClick={() => {
                  window.location.href = '/#verifica-idoneita';
                }}
                className="bg-white text-green-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Richiedi Sopralluogo GRATUITO
              </button>
              <a 
                href="tel:+390282941180"
                className="bg-secondary text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-block text-center"
              >
                Chiama: 800-123-456
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FarmaciePage;