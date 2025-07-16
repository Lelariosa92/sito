import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Car, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator } from 'lucide-react';

const AutomotivePage: React.FC = () => {
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
      <div className="bg-orange-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-2 flex-wrap">
          <Car className="animate-pulse" size={16} />
          <span className="font-semibold">AUTOMOTIVE: Solo 2 installazioni disponibili questo mese nel tuo territorio</span>
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
          background: 'linear-gradient(135deg, rgba(255,77,0,0.95) 0%, rgba(0,78,137,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold">SPECIALIZZATI AUTOMOTIVE</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Stop alle <span className="text-yellow-300">Concessionarie Invisibili</span><br />
                  È Ora di <span className="text-yellow-300">Dominare la Strada</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  <strong>+85% vendite auto</strong> per Rossi Auto con il nostro display LED gigante.<br />
                  I gommisti con <span className="bg-orange-600 text-white px-2 py-1 rounded font-bold">Banner Video</span> vendono il <strong>180% in più</strong> di pneumatici.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
                  <button 
                    onClick={() => {
                      window.location.href = '/#verifica-idoneita';
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 w-full md:w-auto rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Car size={20} />
                    <span>Prova GRATUITA Automotive</span>
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/#roi';
                    }}
                    className="bg-white text-orange-600 border-2 border-white font-semibold text-lg px-8 py-4 w-full md:w-auto rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Calculator size={20} />
                    <span>Calcola ROI Vendite</span>
                  </button>
                </div>

                {/* Automotive Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+85%</div>
                    <div className="text-sm">Vendite Auto</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+180%</div>
                    <div className="text-sm">Pneumatici</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">6-8</div>
                    <div className="text-sm">Mesi ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">1km</div>
                    <div className="text-sm">Visibilità</div>
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
              <h2 className="text-4xl font-bold text-dark mb-4">La Cruda Realtà del Settore Automotive</h2>
              <p className="text-xl text-gray-600">I numeri che nessuno ti dice ma che determinano il tuo fatturato</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center flex items-center justify-center">
                <Zap className="mr-2" size={24} />
                Mentre la Concorrenza Investe in LED, Tu Perdi Clienti
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Il Dramma delle Concessionarie Italiane:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Il 78% dei clienti</strong> non sa che esistono promozioni attive</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Le auto in promozione</strong> restano invisibili nel piazzale</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>I passanti in auto</strong> non vedono le tue offerte a 80 km/h</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>I gommisti concorrenti</strong> con LED vendono il 300% in più</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Il Costo dell'Invisibilità:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">CONCESSIONARIE</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€2.347</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">GOMMISTI</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€567</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-xl font-bold text-red-700">
                  In questo momento, <span className="text-2xl">23 potenziali clienti</span> stanno passando davanti alla tua attività<br />
                  senza nemmeno accorgersi che esisti
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fotografie Installazioni */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Le Nostre Installazioni Automotive</h2>
              <p className="text-xl text-gray-600">Foto reali delle trasformazioni che abbiamo realizzato nel settore auto</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Concessionaria Display Parete */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/beef3967-2c2f-4743-8987-81b27a221fd2_wm"
                  alt="Concessionaria con display LED gigante"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Display LED Gigante
                  </h3>
                  <p className="text-gray-600 mb-4">Schermo LED su parete esterna per promozioni auto visibili da 1km di distanza. Dimensioni personalizzate.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">+85% vendite auto</span>
                    <span className="text-sm text-gray-500">Milano - Rossi Auto</span>
                  </div>
                </div>
              </div>

              {/* Concessionaria Totem */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/8a871adf-d615-417a-b69f-42f7085832aa_wm" 
                  alt="Concessionaria con totem LED nel piazzale"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Totem LED Piazzale Espositivo</h3>
                  <p className="text-gray-600 mb-4">Totem digitale nel piazzale per evidenziare offerte speciali e finanziamenti agevolati.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">+120% test drive</span>
                    <span className="text-sm text-gray-500">Roma - AutoItalia</span>
                  </div>
                </div>
              </div>

              {/* Gommista Banner */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/450203fc-c9bc-4df4-92e6-886c207ee8eb_wm" 
                  alt="Gommista con banner video LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Banner Video per Gommisti
                  </h3>
                  <p className="text-gray-600 mb-4">Banner video LED per gommisti, visibile da autostrada. Marchi pneumatici e prezzi sempre aggiornati.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">+180% pneumatici</span>
                    <span className="text-sm text-gray-500">Napoli - GommeExpress</span>
                  </div>
                </div>
              </div>

              {/* Meccanico */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/dd3b474e-f36a-4f9b-b355-e272bf1915e8_wm" 
                  alt="Officina meccanica con display LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Display LED Officina Meccanica</h3>
                  <p className="text-gray-600 mb-4">Prezzi trasparenti e servizi chiari. I clienti sanno subito cosa costa ogni intervento.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">+65% fiducia clienti</span>
                    <span className="text-sm text-gray-500">Torino - Meccanica Rossi</span>
                  </div>
                </div>
              </div>

              {/* Ricambista */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/d4615c86-cdb8-44dd-b5b8-e5fc25920fdb_wm" 
                  alt="Negozio ricambi auto con promozioni LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Display LED Ricambista con Promozioni</h3>
                  <p className="text-gray-600 mb-4">Promozioni dinamiche sempre aggiornate: "OFFERTA SPECIALE: -30% SU FILTRI BOSCH".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">+55% ricambi venduti</span>
                    <span className="text-sm text-gray-500">Bologna - AutoParts</span>
                  </div>
                </div>
              </div>

              {/* Prima e Dopo */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/2816ccf8-a492-4df9-88cd-d9226d8bded9_wm" 
                  alt="Trasformazione autorimessa prima e dopo LED"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Trasformazione: Prima vs Dopo</h3>
                  <p className="text-gray-600 mb-4">Prezzi chiari: "TAGLIANDO €159", "CAMBIO OLIO €85", "CONTROLLO FRENI €45".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">+95% trasparenza prezzi</span>
                    <span className="text-sm text-gray-500">Firenze - Service Auto</span>
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
              <h2 className="text-4xl font-bold text-dark mb-4">3 Storie Automotive che Ti Lasceranno Senza Parole</h2>
              <p className="text-xl text-gray-600">Da concessionarie in crisi a leader territoriali</p>
            </div>

            {/* Caso 1: Concessionaria Rossi Auto */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-orange-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Rossi Auto: Da 8 a 67 Auto Vendute al Mese</h3>
                  <p className="text-orange-600 font-semibold">Concessionaria Auto - Milano Tangenziale Est</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 7 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Situazione Critica (PRIMA):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Solo 8 auto vendute al mese (obiettivo 25)</li>
                    <li>• Invisibile dai 120.000 automobilisti al giorno</li>
                    <li>• Promozioni auto non comunicate efficacemente</li>
                    <li>• Concessionaria rischiava chiusura</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-6">La Soluzione InsegneVideo:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Display LED gigante su facciata</li>
                    <li>• Totem digitale nel piazzale espositivo</li>
                    <li>• Contenuti dinamici con offerte in tempo reale</li>
                    <li>• Visibilità garantita a 80 km/h</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">I Risultati (DOPO 8 MESI):</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Auto vendute/mese:</span>
                      <span className="font-bold text-orange-600">67 (+737%)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Test drive/settimana:</span>
                      <span className="font-bold text-orange-600">da 3 a 28</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Fatturato mensile:</span>
                      <span className="font-bold text-orange-600">+€420.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ranking territoriale:</span>
                      <span className="font-bold text-green-600">Da 8° a 1°</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Testimonianza:</h4>
                <p className="italic text-lg">"Stavamo per chiudere. Il display LED ci ha salvato. Ora vendo più auto di tutta la zona e siamo diventati la concessionaria di riferimento del territorio. Mio figlio può continuare l'attività di famiglia."</p>
                <p className="text-right mt-2 font-semibold">- Giuseppe Rossi, Titolare Concessionaria</p>
              </div>
            </div>

            {/* Caso 2: GommeExpress */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-orange-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">GommeExpress: Banner Video = +€38.000 al Mese</h3>
                  <p className="text-orange-600 font-semibold">Gommista - Napoli Uscita Autostrada</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 6 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Sfida:</h4>
                  <p className="text-sm mb-4">Gommista vicino autostrada ma invisibile agli automobilisti in transito. Solo clienti locali occasionali.</p>
                  
                  <h4 className="font-semibold mb-3">Installazione Record:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Banner Video LED (il più grande mai realizzato)</li>
                    <li>• Visibile da 1.2 km di distanza</li>
                    <li>• Marchi pneumatici animati (Michelin, Pirelli, Continental)</li>
                    <li>• Prezzi aggiornati in tempo reale</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Risultati Straordinari:</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Pneumatici venduti:</span>
                      <span className="font-bold text-orange-600">+180%</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Clienti autostrada:</span>
                      <span className="font-bold text-orange-600">da 0 a 45/giorno</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fatturato extra:</span>
                      <span className="font-bold text-orange-600">€38.000/mese</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="italic text-lg">"Il banner LED ha trasformato la mia attività. Prima vendevo solo ai clienti del quartiere, ora fermano anche quelli dell'autostrada. Ho assunto 2 meccanici e aperto il sabato."</p>
                <p className="text-right mt-2 font-semibold">- Antonio Esposito, Titolare</p>
              </div>
            </div>

            {/* Caso 3: Officina Moderna */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8 border-l-4 border-orange-600">
              <div className="flex items-start justify-between mb-4 flex-wrap">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Officina Moderna: Da Sconosciuta a Punto di Riferimento</h3>
                  <p className="text-orange-600 font-semibold">Officina Meccanica - Bologna Periferia</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">ROI: 8 MESI</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Il Problema (PRIMA):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Officina nascosta in zona industriale</li>
                    <li>• Solo 12 clienti fissi al mese</li>
                    <li>• Prezzi non trasparenti = sfiducia clienti</li>
                    <li>• Concorrenza con officine storiche</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-6">La Strategia InsegneVideo:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Display LED con listino prezzi trasparente</li>
                    <li>• Promozioni stagionali automatiche</li>
                    <li>• Tempi di attesa in tempo reale</li>
                    <li>• Certificazioni e garanzie evidenziate</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">La Trasformazione (10 MESI):</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span>Clienti mensili:</span>
                      <span className="font-bold text-orange-600">da 12 a 89</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Fiducia clienti:</span>
                      <span className="font-bold text-orange-600">+340%</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Fatturato mensile:</span>
                      <span className="font-bold text-orange-600">+€15.600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dipendenti assunti:</span>
                      <span className="font-bold text-green-600">2 meccanici</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Testimonianza:</h4>
                <p className="italic text-lg">"I prezzi chiari sul display hanno cambiato tutto. I clienti ora si fidano e tornano. 'TAGLIANDO €159' - 'CAMBIO OLIO €85' - sanno esattamente cosa spendono. Ho la lista d'attesa!"</p>
                <p className="text-right mt-2 font-semibold">- Marco Bianchi, Titolare Officina</p>
              </div>
            </div>
          </div>
        </section>

        {/* Funzionalità Esclusive */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Funzionalità Esclusive per il Settore Automotive</h2>
              <p className="text-xl text-gray-600">Tecnologie pensate specificamente per concessionarie, gommisti e officine</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Display LED Giganti</h3>
                <p className="text-gray-600 text-center">Schermi LED di qualsiasi dimensione per concessionarie, visibili da 1km di distanza anche a 80 km/h.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Banner Video per Gommisti</h3>
                <p className="text-gray-600 text-center">Banner video LED per gommisti, perfetti per visibilità da autostrada e strade principali. Dimensioni su misura.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Prezzi Dinamici</h3>
                <p className="text-gray-600 text-center">Aggiornamento automatico di prezzi, promozioni e disponibilità auto direttamente dal gestionale.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Marchi Automotive</h3>
                <p className="text-gray-600 text-center">Loghi animati dei principali marchi auto e pneumatici con certificazioni ufficiali.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Resistenza Stradale</h3>
                <p className="text-gray-600 text-center">Schermi progettati per resistere a vibrazioni, polvere e condizioni estreme tipiche del settore automotive.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Supporto Specializzato</h3>
                <p className="text-gray-600 text-center">Team tecnico specializzato nel settore automotive con esperienza in concessionarie e officine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* La Nostra Differenza sul Mercato */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">La Nostra Differenza sul Mercato Automotive</h2>
              <p className="text-xl text-gray-600">Il confronto che nessun altro fornitore osa fare</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-secondary text-white">
                  <div className="p-6 font-bold text-lg">CARATTERISTICA</div>
                  <div className="p-6 font-bold text-lg text-center border-l border-blue-400">NOI - InsegneVideo</div>
                  <div className="p-6 font-bold text-lg text-center border-l border-blue-400">Altri Fornitori Automotive</div>
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
                      <span className="font-semibold text-red-600">40-60%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Dimensioni display
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">ILLIMITATE</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">Standard limitati</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-white">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Contenuti automotive
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="font-semibold text-green-600">INCLUSI</span>
                    </div>
                  </div>
                  <div className="p-6 text-center border-l border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                      <X className="text-red-600" size={20} />
                      <span className="font-semibold text-red-600">€800-2000 extra</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-gray-50">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Se non aumenta le vendite
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

                <div className="grid grid-cols-3 bg-white">
                  <div className="p-6 font-medium text-gray-800 border-b border-gray-200">
                    Esperienza automotive
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
                <p className="text-orange-600 font-bold text-lg mb-4">Solo 2 installazioni automotive disponibili questo mese</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('richiesta-info-automotive');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Voglio la Prova GRATUITA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Richiesta Informazioni */}
        <section id="richiesta-info-automotive" className="section-padding bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Richiedi Informazioni per il Tuo Business Automotive</h2>
              <p className="text-xl mb-6">Solo 2 installazioni disponibili questo mese nel tuo territorio</p>
              
              {/* Countdown */}
              <div className="bg-red-600 text-white py-3 px-6 rounded-lg mb-8 inline-flex items-center space-x-2">
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
                      Tipo di attività automotive*
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      required
                    >
                      <option value="">Seleziona...</option>
                      <option value="concessionaria">Concessionaria Auto</option>
                      <option value="gommista">Gommista</option>
                      <option value="officina">Officina Meccanica</option>
                      <option value="ricambi">Negozio Ricambi</option>
                      <option value="carrozzeria">Carrozzeria</option>
                      <option value="autonoleggio">Autonoleggio</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome attività*
                    </label>
                    <input
                      type="text"
                      placeholder="Es. Rossi Auto"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email aziendale*
                    </label>
                    <input
                      type="email"
                      placeholder="info@tuaattivita.it"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Posizione attività
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    >
                      <option value="">Seleziona...</option>
                      <option value="strada-principale">Strada Principale</option>
                      <option value="vicino-autostrada">Vicino Autostrada</option>
                      <option value="centro-citta">Centro Città</option>
                      <option value="zona-industriale">Zona Industriale</option>
                      <option value="periferia">Periferia</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Obiettivo principale
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Es. Aumentare vendite auto, attirare clienti autostrada, mostrare promozioni..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-600"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      Accetto la privacy policy e autorizzo il trattamento dei dati per ricevere informazioni commerciali
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Car size={20} />
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
        <section className="section-padding bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Installiamo GRATIS, Decidi Dopo</h2>
            <p className="text-xl mb-8">
              Installiamo il tuo display LED automotive senza anticipo. Zero rischi. Decidi se firmare il noleggio solo dopo aver visto i risultati.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                onClick={() => {
                  window.location.href = '/#verifica-idoneita';
                }}
                className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
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

export default AutomotivePage;