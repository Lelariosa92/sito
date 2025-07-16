import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShoppingCart, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator } from 'lucide-react';

const SupermercatiPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 23,
    seconds: 15
  });

  const [formData, setFormData] = useState({
    businessType: '',
    city: '',
    businessName: '',
    email: '',
    phone: '',
    size: '',
    objective: '',
    acceptPrivacy: false
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare data for Pabbly Connect webhook
    const webhookData = {
      tipo_attivita_domanda: "Tipo di attività retail",
      tipo_attivita_risposta: formData.businessType,
      
      citta_domanda: "Città",
      citta_risposta: formData.city,
      
      nome_attivita_domanda: "Nome attività",
      nome_attivita_risposta: formData.businessName,
      
      email_domanda: "Email aziendale",
      email_risposta: formData.email,
      
      cellulare_domanda: "Cellulare",
      cellulare_risposta: formData.phone,
      
      dimensioni_domanda: "Dimensioni attività",
      dimensioni_risposta: formData.size,
      
      obiettivo_domanda: "Obiettivo principale",
      obiettivo_risposta: formData.objective,
      
      privacy_domanda: "Accetto la privacy policy",
      privacy_risposta: formData.acceptPrivacy ? "Sì" : "No",
      
      timestamp: new Date().toISOString(),
      source: "InsegneVideo Website - Supermercati",
      form_type: "Richiesta Info Retail"
    };

    // Send data to Pabbly Connect webhook
    fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzZTA0MzQ1MjZjNTUzMjUxMzQi_pc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData)
    })
    .then(response => {
      if (response.ok) {
        alert('Richiesta inviata con successo! Ti contatteremo entro 24 ore.');
        setFormData({
          businessType: '',
          city: '',
          businessName: '',
          email: '',
          phone: '',
          size: '',
          objective: '',
          acceptPrivacy: false
        });
      } else {
        throw new Error('Errore nell\'invio');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Si è verificato un errore. Riprova o contattaci direttamente al 02-82941180');
    });
  };

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <>
      {/* Notification Bar */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-2 flex-wrap">
          <ShoppingCart className="animate-pulse" size={16} />
          <span className="font-semibold">RETAIL REVOLUTION: Solo 2 installazioni disponibili questo mese nella tua zona</span>
          <div className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold ml-4 flex items-center space-x-1">
            <Clock size={14} />
            <span>
              ⏰ Scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(220,38,38,0.95) 0%, rgba(30,64,175,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold">SPECIALIZZATI RETAIL & GDO</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Da <span className="text-yellow-300">Scaffali Ignorati</span> a<br />
                  <span className="text-yellow-300">Supermercato Affollato</span> in 30 Giorni
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  <strong>+156% vendite</strong> per il Supermercato Conad con schermi LED.<br />
                  I supermercati con <span className="bg-red-600 text-white px-2 py-1 rounded font-bold">Schermi Digitali</span> attirano il <strong>89% in più</strong> di passanti.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('richiesta-info-retail');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 w-full md:w-auto rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={20} />
                    <span>Schermi LED GRATIS per 30 Giorni</span>
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/#roi';
                    }}
                    className="bg-white text-red-600 border-2 border-white font-semibold text-lg px-8 py-4 w-full md:w-auto rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Calculator size={20} />
                    <span>Calcola il Tuo Incremento Vendite</span>
                  </button>
                </div>

                {/* Retail Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+156%</div>
                    <div className="text-sm">Vendite Medie</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">+89%</div>
                    <div className="text-sm">Passanti Entrano</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">3-6</div>
                    <div className="text-sm">Mesi ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold">€245</div>
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
              <h2 className="text-4xl font-bold text-dark mb-4">La Crisi Silenziosa dei Supermercati Italiani</h2>
              <p className="text-xl text-gray-600">I numeri che la grande distribuzione non vuole ammettere</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center flex items-center justify-center">
                <Zap className="mr-2" size={24} />
                Mentre Amazon e la Concorrenza Digitale Crescono, I Supermercati Tradizionali Perdono Clienti
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">La Tragedia del Retail Italiano:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Il 73% dei clienti</strong> entra solo se vede offerte interessanti</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>Le promozioni</strong> sui volantini non attirano più come prima</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>I passanti</strong> non sanno cosa è in offerta senza entrare</span>
                    </li>
                    <li className="flex items-start">
                      <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span><strong>La concorrenza</strong> con schermi LED sta rubando i vostri clienti</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Il Costo dell'Invisibilità Commerciale:</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">SUPERMERCATI</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€1.247</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">IPERMERCATI</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€2.890</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 mb-2">DISCOUNT</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">-€567</div>
                        <div className="text-sm text-gray-600">PERSI AL GIORNO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-xl font-bold text-red-700">
                  In questo momento, <span className="text-2xl">347 potenziali clienti</span> stanno passando davanti al tuo supermercato<br />
                  senza sapere delle tue offerte speciali
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fotografie Installazioni */}
        <section className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Le Nostre Installazioni Supermercati</h2>
              <p className="text-xl text-gray-600">Foto reali delle trasformazioni che abbiamo realizzato nella grande distribuzione</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Schermo LED Interno */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/9e7a4eab-6a8c-4c1c-a217-16dc0da61038_wm"
                  alt="Schermo LED interno supermercato"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Schermo LED Interno - Offerte Speciali</h3>
                  <p className="text-gray-600 mb-4">Display a parete che mostra offerte irresistibili: "PASTA €0.89", "POLLO €4.99/kg", "VERDURE 50% SCONTO".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+67% vendite prodotti in offerta</span>
                    <span className="text-sm text-gray-500">Roma - Conad Flaminio</span>
                  </div>
                </div>
              </div>

              {/* Vetrina Digitale */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/1a7fcdbd-f976-4f6b-bd1e-53226518c9d1_wm"
                  alt="Vetrina digitale supermercato italiano"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Vetrina Digitale - Scritte in Italiano</h3>
                  <p className="text-gray-600 mb-4">Messaggi chiari e locali: "OFFERTE SPECIALI", "FRUTTA FRESCA", "PRODOTTI ITALIANI", "APERTO FINO ALLE 22".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+134% clienti che entrano</span>
                    <span className="text-sm text-gray-500">Milano - Esselunga Centrale</span>
                  </div>
                </div>
              </div>

              {/* Maxischermo Esterno */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/14be424f-0b20-447e-a5b1-e40bec2362bc_wm"
                  alt="Maxischermo esterno supermercato con traffico"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Maxischermo Esterno - Visibilità Massima</h3>
                  <p className="text-gray-600 mb-4">Impatto devastante su traffico e passanti: "SUPERMERCATO OFFERTE", "FRUTTA FRESCA 30% SCONTO", "CARNE PREMIUM €8.99/kg".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+287% visibilità da strada</span>
                    <span className="text-sm text-gray-500">Napoli - Carrefour Via Roma</span>
                  </div>
                </div>
              </div>

              {/* Area Casse */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/5d18f085-2018-4798-90b8-efe6b4bf3854_wm"
                  alt="Area casse con display promozionali"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Area Casse - Promozioni Last Minute</h3>
                  <p className="text-gray-600 mb-4">Vendite dell'ultimo minuto: "PRODOTTI IN OFFERTA", "TESSERA FEDELTÀ SCONTO 20%", "PROMOZIONI WEEKEND".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+45% acquisti impulsivi</span>
                    <span className="text-sm text-gray-500">Torino - Coop Borgo San Paolo</span>
                  </div>
                </div>
              </div>

              {/* Ingresso dal Parcheggio */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/e9910353-37b4-4f3c-851f-534eff36d3b9_wm"
                  alt="Ingresso supermercato visto dal parcheggio"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Ingresso - Vista dal Parcheggio</h3>
                  <p className="text-gray-600 mb-4">Efficacia a distanza: "BENVENUTI AL SUPERMERCATO", "OFFERTE DELLA SETTIMANA", "VERDURE BIO €2.99".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+89% decisioni dal parcheggio</span>
                    <span className="text-sm text-gray-500">Bologna - Ipercoop Borgo</span>
                  </div>
                </div>
              </div>

              {/* Totem Digitale */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/cc2c5e09-8b82-448b-91a6-2f052ee1380c_wm"
                  alt="Totem digitale ortofrutta"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Totem Digitale - Reparto Ortofrutta</h3>
                  <p className="text-gray-600 mb-4">Prezzi sempre aggiornati: "MELE BIO €2.99/kg", "POMODORI FRESCHI €1.89/kg", "OFFERTA BANANE €1.49/kg".</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">+156% vendite prodotti freschi</span>
                    <span className="text-sm text-gray-500">Firenze - Unicoop Novoli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Urgenza */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
                <Clock className="mr-2 animate-pulse" size={24} />
                ATTENZIONE: I Tuoi Concorrenti Stanno Già Installando Schermi LED
              </h3>
              <p className="text-lg">
                Il Supermercato Conad a 500 metri dal tuo ha installato 3 schermi LED il mese scorso.<br />
                Le loro vendite sono aumentate del <strong>156%</strong>. E le tue?
              </p>
            </div>
          </div>
        </section>

        {/* Noleggio vs Vendita */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">Noleggio o Acquisto? Scegli la Tua Formula</h2>
              <p className="text-xl text-gray-600">Due soluzioni, un solo obiettivo: aumentare le tue vendite</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Noleggio (Preferito) */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">CONSIGLIATO</div>
                  <h3 className="text-2xl font-bold text-green-700">Noleggio Operativo</h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">da €245/mese</div>
                  <div className="text-sm text-gray-600">IVA inclusa - Tutto compreso</div>
                </div>

                <h4 className="font-bold mb-3">✅ VANTAGGI NOLEGGIO:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• <strong>Zero anticipo</strong> - Parti subito</li>
                  <li>• <strong>Prova gratuita 30 giorni</strong></li>
                  <li>• <strong>Assistenza 24/7</strong> inclusa</li>
                  <li>• <strong>Aggiornamenti software</strong> automatici</li>
                  <li>• <strong>Sostituzione immediata</strong> se guasto</li>
                  <li>• <strong>Deducibilità fiscale</strong> totale</li>
                  <li>• <strong>ROI veloce</strong> - Recuperi in 3-6 mesi</li>
                </ul>

                <div className="bg-white p-4 rounded-lg border-2 border-green-200 mb-4">
                  <h4 className="font-bold text-green-700 mb-2">📊 ESEMPIO ROI SUPERMERCATO:</h4>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>Costo mensile:</span>
                      <span className="font-bold">€245</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ricavi extra medi:</span>
                      <span className="font-bold text-green-600">€1.890/mese</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Guadagno netto:</span>
                      <span className="font-bold text-green-600">€1.645/mese</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const element = document.getElementById('richiesta-info-retail');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg w-full text-lg hover:bg-red-700 transition-colors"
                >
                  Inizia Prova Gratuita
                </button>
              </div>

              {/* Vendita */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-700">Acquisto Diretto</h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">da €4.500</div>
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
                  <h4 className="font-bold text-blue-700 mb-2">💰 ESEMPIO ROI IPERMERCATO:</h4>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>Investimento:</span>
                      <span className="font-bold">€5.200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ricavi extra medi:</span>
                      <span className="font-bold text-blue-600">€2.400/mese</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>ROI completo:</span>
                      <span className="font-bold text-blue-600">2.2 mesi</span>
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
              <p className="text-gray-600 mb-4">Il 84% dei nostri clienti retail sceglie il <strong>noleggio</strong> per iniziare senza rischi</p>
              <button 
                onClick={() => {
                  const element = document.getElementById('richiesta-info-retail');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Consulenza Gratuita → 15 MIN
              </button>
            </div>
          </div>
        </section>

        {/* Form Richiesta Informazioni */}
        <section id="richiesta-info-retail" className="section-padding bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Richiedi Informazioni per il Tuo Business Retail</h2>
              <p className="text-xl mb-6">Solo 2 installazioni disponibili questo mese nel tuo territorio</p>
              
              {/* Countdown */}
              <div className="bg-red-700 text-white py-3 px-6 rounded-lg mb-8 inline-flex items-center space-x-2">
                <Clock size={20} />
                <span className="font-bold">
                  Il tuo posto scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo di attività retail*
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    >
                      <option value="">Seleziona...</option>
                      <option value="supermercato">Supermercato</option>
                      <option value="ipermercato">Ipermercato</option>
                      <option value="discount">Discount</option>
                      <option value="negozio-abbigliamento">Negozio Abbigliamento</option>
                      <option value="elettronica">Elettronica</option>
                      <option value="farmacia">Farmacia</option>
                      <option value="panetteria">Panetteria</option>
                      <option value="centro-commerciale">Centro Commerciale</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Città*
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Es. Milano"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome attività*
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Es. Supermercato Rossi"
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="info@tuaattivita.it"
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+39 333 1234567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensioni attività
                    </label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Seleziona...</option>
                      <option value="piccolo">Piccolo (fino 200 mq)</option>
                      <option value="medio">Medio (200-800 mq)</option>
                      <option value="grande">Grande (800-2000 mq)</option>
                      <option value="ipermercato">Ipermercato (oltre 2000 mq)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Obiettivo principale
                  </label>
                  <textarea
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Es. Aumentare vendite prodotti in offerta, attirare più clienti, mostrare promozioni..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleInputChange}
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
                  <ShoppingCart size={20} />
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
              Installiamo i tuoi schermi LED senza anticipo. Zero rischi. Decidi se firmare il noleggio solo dopo aver visto l'aumento delle vendite.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                onClick={() => {
                  const element = document.getElementById('richiesta-info-retail');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
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

export default SupermercatiPage;