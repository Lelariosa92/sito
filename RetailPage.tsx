import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Store, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator, Eye, Percent, Rocket, Handshake, Phone, Mail, MapPin, Megaphone, Gift, Calendar, Video, Smartphone } from 'lucide-react';

const RetailPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 23,
    seconds: 15
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    address: '',
    description: '',
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
      nome_cognome_domanda: "Nome e Cognome",
      nome_cognome_risposta: formData.name,
      
      email_domanda: "Email",
      email_risposta: formData.email,
      
      telefono_domanda: "Telefono",
      telefono_risposta: formData.phone,
      
      tipo_negozio_domanda: "Tipo di Negozio",
      tipo_negozio_risposta: formData.businessType,
      
      indirizzo_domanda: "Città e Indirizzo del Negozio",
      indirizzo_risposta: formData.address,
      
      descrizione_domanda: "Descrivi il tuo negozio e cosa vorresti comunicare",
      descrizione_risposta: formData.description,
      
      privacy_domanda: "Accetto la privacy policy",
      privacy_risposta: formData.acceptPrivacy ? "Sì" : "No",
      
      timestamp: new Date().toISOString(),
      source: "InsegneVideo Website - Retail/Negozi",
      form_type: "Richiesta Sopralluogo Gratuito"
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
        alert('Grazie! Ti contatteremo entro 2 ore per organizzare il sopralluogo gratuito.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          address: '',
          description: '',
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
          <Store className="animate-pulse" size={16} />
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
          background: 'linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  CRISI? <span className="text-yellow-300">VINCE CHI COMUNICA MEGLIO!</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  Mentre i tuoi competitor restano invisibili, <strong>TU CONQUISTI OGNI PASSANTE</strong> che cammina davanti al tuo negozio
                </p>
                <div className="bg-red-600 text-white p-4 rounded-lg mb-8 animate-pulse">
                  <p className="text-lg font-bold">⚠️ ATTENZIONE: Ogni giorno che aspetti è un giorno di clienti persi per sempre!</p>
                </div>
                <button 
                  onClick={() => {
                    const element = document.getElementById('richiedi-preventivo');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
                >
                  <Rocket size={20} />
                  <span>TRASFORMA IL MIO NEGOZIO ORA</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                L'Opportunità che Potrebbe Sfuggirti Ogni Giorno
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-700 mb-4">❌ QUELLO CHE STA SUCCEDENDO:</h3>
                  <ul className="text-left space-y-3 text-gray-700">
                    <li>• I passanti camminano davanti al tuo negozio senza nemmeno notarlo</li>
                    <li>• La tua vetrina "statica" non comunica le promozioni</li>
                    <li>• I competitor con schermi LED ti stanno rubando clienti</li>
                    <li>• Perdi vendite perché non comunichi offerte speciali</li>
                    <li>• Il tuo negozio sembra "vecchio" rispetto alla concorrenza</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-700 mb-4">✅ QUELLO CHE DOVRESTI FARE:</h3>
                  <ul className="text-left space-y-3 text-gray-700">
                    <li>• <strong>CATTURARE</strong> l'attenzione di ogni passante</li>
                    <li>• <strong>COMUNICARE</strong> le tue promozioni in tempo reale</li>
                    <li>• <strong>DISTINGUERTI</strong> dalla concorrenza con tecnologia</li>
                    <li>• <strong>AUMENTARE</strong> il traffico nel tuo negozio</li>
                    <li>• <strong>MODERNIZZARE</strong> l'immagine del tuo business</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-400">
                <p className="text-lg font-bold text-gray-800 flex items-center justify-center">
                  <Zap className="text-yellow-600 mr-2" size={24} />
                  La crisi colpisce tutti, ma <span className="text-red-600 ml-1">VINCE CHI COMUNICA MEGLIO</span>. 
                  Non lasciare che i passanti ti sfuggano!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonianza Sociale */}
        <section className="py-16 text-white" style={{
          background: 'linear-gradient(135deg, rgba(79,172,254,0.95) 0%, rgba(0,242,254,0.95) 100%)'
        }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              I Negozi Che Fatturano di Più Usano InsegneVideo
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-8">
                <strong>Oltre 800 negozi in Italia</strong> hanno già scelto i nostri schermi LED. 
                Dalle boutique di Milano alle calzature di Roma, dalle cerimonie di Firenze ai negozi per bambini di Napoli.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-yellow-300">+65%</h3>
                  <p className="text-sm">Clienti in più</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-yellow-300">800+</h3>
                  <p className="text-sm">Negozi installati</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-yellow-300">48h</h3>
                  <p className="text-sm">Tempo di ROI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Trasformazioni */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Guarda Come Trasformiamo i Negozi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/23346c99-a726-4860-9063-4a2b3c8debee" 
                  alt="Negozio Abbigliamento con Schermo LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Abbigliamento</h3>
                  <p className="text-gray-600">Promozioni dinamiche che attraggono clienti: "SALDI 50% - NUOVA COLLEZIONE"</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/1e4d160a-9d00-41b4-b94b-b96ba5ecddc1" 
                  alt="Negozio Calzature con Schermo LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Calzature</h3>
                  <p className="text-gray-600">Offerte speciali sempre aggiornate: "SCARPE ESTATE 30% - SNEAKERS FIRMATE"</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/9ea72eab-4641-4cbf-b9ef-0d22986199ef" 
                  alt="Atelier Cerimonie con Schermo LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Cerimonie</h3>
                  <p className="text-gray-600">Eleganza e raffinatezza: "ABITI SPOSA - CERIMONIE - SARTORIA SU MISURA"</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/dd326708-91b5-4238-8403-31a85fce363d" 
                  alt="Negozio Bambini con Schermo LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Bambini</h3>
                  <p className="text-gray-600">Colori e allegria: "ABBIGLIAMENTO BIMBI - GIOCATTOLI - TUTTO PER LA SCUOLA"</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/50ba4e75-54a9-4815-9791-ccc2d2579a1f" 
                  alt="Centro Commerciale con Schermi LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Centro Commerciale</h3>
                  <p className="text-gray-600">Effetto moltiplicatore: ogni negozio attira più clienti</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/316ffe0d-fa0a-40db-9bab-5b021f68e5f1" 
                  alt="Prima e Dopo Negozio" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Prima VS Dopo</h3>
                  <p className="text-gray-600">La differenza è EVIDENTE: da negozio invisibile a magnete per clienti!</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800 mb-4">
                Soluzioni a partire da <span className="text-2xl text-red-600">80€/mese + IVA</span>
              </p>
              <p className="text-gray-600">Zero anticipo • Montaggio gratuito • Firmi solo DOPO aver visto l'effetto</p>
            </div>
          </div>
        </section>

        {/* Vantaggi Specifici */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Tutto Quello Che Puoi Realizzare
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Promozioni Quotidiane</h3>
                <p className="text-gray-600">Cambia offerte ogni giorno: "Lunedì -20%", "Martedì 3x2", "Mercoledì Regalo"</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Orari e Info</h3>
                <p className="text-gray-600">Mostra orari, contatti, novità, arrivi, liquidazioni in tempo reale</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Video Prodotti</h3>
                <p className="text-gray-600">Mostra collezioni, fitting, abbinamenti, sfilate in loop continuo</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Offerte Speciali</h3>
                <p className="text-gray-600">Sconti flash, ultimo pezzo, happy hour shopping, codici sconto</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Eventi Stagionali</h3>
                <p className="text-gray-600">San Valentino, Pasqua, Estate, Natale: adatta il messaggio ad ogni occasione</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Brand Identity</h3>
                <p className="text-gray-600">Logo, colori aziendali, slogan: rinforza la tua immagine di marca</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Social Media</h3>
                <p className="text-gray-600">Collega Instagram, Facebook, promuovi contest e hashtag</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Gestione da APP</h3>
                <p className="text-gray-600">Cambia contenuti dal tuo smartphone in qualsiasi momento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prezzi Trasparenti */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Prezzi Trasparenti e Convenienti - Investimento che si Ripaga Subito
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              Il tuo schermo LED costa meno di <strong>un caffè al giorno</strong> e si ripaga in <strong>48-72 ore</strong>
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-bold">Schermo Vetrina</h3>
                  <p className="text-3xl font-bold">120€/mese</p>
                  <p className="text-sm">+ IVA</p>
                </div>
                <div className="space-y-2 text-left">
                  <p><strong>Costo giornaliero:</strong> 4€</p>
                  <p><strong>ROI:</strong> 1 maglietta venduta = 7 giorni coperti</p>
                  <p><strong>Break-even:</strong> 2-3 capi extra al mese</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-bold">Schermo a Bandiera</h3>
                  <p className="text-3xl font-bold">130€/mese</p>
                  <p className="text-sm">+ IVA</p>
                </div>
                <div className="space-y-2 text-left">
                  <p><strong>Costo giornaliero:</strong> 4,30€</p>
                  <p><strong>ROI:</strong> 1 paio scarpe = 14 giorni coperti</p>
                  <p><strong>Break-even:</strong> 2 paia extra al mese</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-bold">Schermo a Parete</h3>
                  <p className="text-3xl font-bold">150€/mese</p>
                  <p className="text-sm">+ IVA</p>
                </div>
                <div className="space-y-2 text-left">
                  <p><strong>Costo giornaliero:</strong> 5€</p>
                  <p><strong>ROI:</strong> 1 vestito = 20 giorni coperti</p>
                  <p><strong>Break-even:</strong> 1 capo extra ogni 10 giorni</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-bold">Insegna LED</h3>
                  <p className="text-3xl font-bold">150€/mese</p>
                  <p className="text-sm">+ IVA</p>
                </div>
                <div className="space-y-2 text-left">
                  <p><strong>Costo giornaliero:</strong> 5€</p>
                  <p><strong>ROI:</strong> 1 accessorio = 10 giorni coperti</p>
                  <p><strong>Break-even:</strong> 3 clienti extra al mese</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-lg border-2 border-green-400 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">💡 Calcolo Pratico del Recupero:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-bold text-green-700">Abbigliamento</p>
                  <p className="text-sm">Maglietta 25€ = 6 giorni coperti</p>
                  <p className="text-sm">Vestito 80€ = 20 giorni coperti</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-green-700">Calzature</p>
                  <p className="text-sm">Sneakers 60€ = 15 giorni coperti</p>
                  <p className="text-sm">Scarpe eleganti 120€ = 30 giorni coperti</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-green-700">Accessori</p>
                  <p className="text-sm">Borsa 45€ = 11 giorni coperti</p>
                  <p className="text-sm">Gioiello 100€ = 25 giorni coperti</p>
                </div>
              </div>
              <p className="text-center text-lg font-bold text-green-800 mt-4">
                Il resto del mese è PURO GUADAGNO!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-3">🔹 NOLEGGIO OPERATIVO</h3>
                <p className="text-sm text-gray-600 mb-3">(Più Scelto)</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Detraibilità fiscale al 100%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Canoni fissi mensili
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Manutenzione inclusa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Assistenza 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Aggiornamenti software
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-purple-600 mb-3">🔹 ACQUISTO</h3>
                <p className="text-sm text-gray-600 mb-3">(Proprietà Immediata)</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Proprietà immediata
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Ammortamento fiscale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Investimento una tantum
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Nessun vincolo temporale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Valore patrimoniale
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-orange-600 mb-3">🔹 LEASING</h3>
                <p className="text-sm text-gray-600 mb-3">(Rate Diluite)</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Rate diluite nel tempo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Riscatto finale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Vantaggi fiscali
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Flessibilità di pagamento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Opzione di upgrade
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Garanzia 100% */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">
              <Shield className="mr-4" size={48} />
              La Nostra Garanzia Unica in Italia
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">✅ ZERO RISCHI PER TE</h3>
                  <ul className="text-left space-y-2">
                    <li>• Montaggio GRATUITO senza alcun impegno</li>
                    <li>• Installiamo prima di tutto</li>
                    <li>• Vedi subito l'effetto sul tuo negozio</li>
                    <li>• Solo DOPO firmi il contratto se sei soddisfatto</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">🎯 RISULTATI GARANTITI</h3>
                  <ul className="text-left space-y-2">
                    <li>• Se non ti convince, rimuoviamo tutto gratis</li>
                    <li>• Assistenza tecnica 24/7</li>
                    <li>• Manutenzione inclusa nel canone</li>
                    <li>• Aggiornamenti software gratuiti</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-400 text-black p-6 rounded-lg">
                <p className="text-xl font-bold">
                  Firmi il contratto solo DOPO aver visto l'effetto del nostro schermo LED. 
                  È così che lavoriamo noi di InsegneVideo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vantaggi Competitivi */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Perché i Negozi Scelgono InsegneVideo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Visibilità Estrema</h3>
                <p className="text-gray-600">I passanti ti notano da 50 metri di distanza. Impossibile essere ignorati.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Immagine Moderna</h3>
                <p className="text-gray-600">Il tuo negozio appare innovativo, tecnologico, al passo coi tempi.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Vendite in Crescita</h3>
                <p className="text-gray-600">+65% di clienti in media. Le promozioni video convertono molto di più.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Rinnova il Locale</h3>
                <p className="text-gray-600">Un display LED trasforma completamente l'aspetto del tuo negozio.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Relazione Clienti</h3>
                <p className="text-gray-600">I video creano connessione emotiva prima ancora che entrino.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Vantaggio Competitivo</h3>
                <p className="text-gray-600">Più visibile = Più bello = Più clienti della concorrenza.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Finale */}
        <section className="py-16 text-white" id="richiedi-preventivo" style={{
          background: 'linear-gradient(135deg, rgba(250,112,154,0.95) 0%, rgba(254,225,64,0.95) 100%)'
        }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Non Aspettare Che i Tuoi Competitor Ti Superino
            </h2>
            <p className="text-xl mb-8">
              Ogni giorno che passa senza il tuo schermo LED è un giorno di clienti persi per sempre
            </p>
            
            {/* Form di Richiesta */}
            <div className="max-w-2xl mx-auto bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Richiedi Montaggio Gratuito</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nome e Cognome *" 
                    required 
                    className="w-full p-3 rounded-lg text-gray-800 border-2 border-transparent focus:border-yellow-400 outline-none"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *" 
                    required 
                    className="w-full p-3 rounded-lg text-gray-800 border-2 border-transparent focus:border-yellow-400 outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefono *" 
                    required 
                    className="w-full p-3 rounded-lg text-gray-800 border-2 border-transparent focus:border-yellow-400 outline-none"
                  />
                  <select 
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg text-gray-800 border-2 border-transparent focus:border-yellow-400 outline-none"
                  >
                    <option value="">Tipo di Negozio *</option>
                    <option value="abbigliamento">Abbigliamento</option>
                    <option value="calzature">Calzature</option>
                    <option value="cerimonie">Cerimonie</option>
                    <option value="bambini">Bambini</option>
                    <option value="accessori">Accessori</option>
                    <option value="gioielleria">Gioielleria</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Città e Indirizzo del Negozio *" 
                  required 
                  className="w-full p-3 rounded-lg text-gray-800 border-2 border-transparent focus:border-yellow-400 outline-none"
                />
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Descrivi il tuo negozio e cosa vorresti comunicare..." 
                  className="w-full p-3 h-24 rounded-lg text-gray-800 border-2 border-transparent focus:border-yellow-400 outline-none resize-none"
                ></textarea>
                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={handleInputChange}
                    id="privacy" 
                    required 
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-left">
                    Accetto il trattamento dei dati personali secondo la privacy policy e autorizzo InsegneVideo a contattarmi per il sopralluogo gratuito.
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>PRENOTA SOPRALLUOGO GRATUITO</span>
                </button>
              </form>
              <p className="text-sm mt-4 opacity-90">
                Rispondiamo entro 2 ore • Sopralluogo entro 24 ore • Montaggio gratuito entro 48 ore
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <Phone className="text-3xl mb-2 mx-auto" size={32} />
                <h3 className="font-bold">Chiamaci Subito</h3>
                <p className="text-yellow-200">800 123 456</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <Mail className="text-3xl mb-2 mx-auto" size={32} />
                <h3 className="font-bold">Scrivi una Email</h3>
                <p className="text-yellow-200">info@insegnevideo.it</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <Phone className="text-3xl mb-2 mx-auto" size={32} />
                <h3 className="font-bold">WhatsApp</h3>
                <p className="text-yellow-200">+39 333 123 4567</p>
              </div>
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
                  const element = document.getElementById('richiedi-preventivo');
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
                className="bg-secondary text-white font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-block text-center flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Chiama: 02-82941180</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RetailPage;