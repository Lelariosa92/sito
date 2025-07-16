import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator, Plane, Car, Bolt, Mail as MailIcon, Home, Briefcase, Phone, Mail, MapPin, Crown } from 'lucide-react';

const AgenzePage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    agencyType: '',
    city: '',
    paymentPreference: '',
    notes: '',
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
      
      telefono_domanda: "Telefono",
      telefono_risposta: formData.phone,
      
      email_domanda: "Email",
      email_risposta: formData.email,
      
      tipo_agenzia_domanda: "Tipo di Agenzia",
      tipo_agenzia_risposta: formData.agencyType,
      
      citta_domanda: "Città",
      citta_risposta: formData.city,
      
      formula_preferita_domanda: "Formula Preferita",
      formula_preferita_risposta: formData.paymentPreference,
      
      note_domanda: "Note Aggiuntive",
      note_risposta: formData.notes,
      
      privacy_domanda: "Accetto la privacy policy",
      privacy_risposta: formData.acceptPrivacy ? "Sì" : "No",
      
      timestamp: new Date().toISOString(),
      source: "InsegneVideo Website - Agenzie",
      form_type: "Richiesta Installazione Gratuita"
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
          phone: '',
          email: '',
          agencyType: '',
          city: '',
          paymentPreference: '',
          notes: '',
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
      <div className="bg-blue-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-2 flex-wrap">
          <Building2 className="animate-pulse" size={16} />
          <span className="font-semibold">AGENZIE: Mentre Leggi Questa Pagina, 127 Potenziali Clienti Stanno Passando Davanti alla Tua Agenzia</span>
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold ml-4 flex items-center space-x-1">
            <Clock size={14} />
            <span>
              Il tuo posto scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
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
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  AGENZIE: BASTA CLIENTI<br />CHE PASSANO SENZA ENTRARE
                </h1>
                <div className="text-2xl md:text-3xl font-bold mb-8 text-yellow-300">
                  Mentre Leggi Questa Pagina, 127 Potenziali Clienti<br />
                  Stanno Passando Davanti alla Tua Agenzia
                </div>
                <div className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
                  <strong>Quanti stanno entrando?</strong> Se la risposta è "pochi" o "nessuno", questo messaggio può salvare la tua attività e moltiplicare le tue chiusure.
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('richiesta-info');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl animate-pulse transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <Zap size={20} />
                    <span>ATTIRA PIÙ CLIENTI ORA</span>
                  </button>
                  <button 
                    onClick={() => {
                      window.location.href = '/#roi';
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <Calculator size={20} />
                    <span>CALCOLA IL TUO ROI</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-white py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-black text-gray-800 text-center mb-12 flex items-center justify-center">
              <Zap className="text-red-500 mr-3" size={32} />
              L'Opportunità Che Stai Perdendo Ogni Giorno
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4">LA VERITÀ CRUDA:</h3>
              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  Il 89% delle persone decide se entrare in un'agenzia in 3 secondi
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  Una vetrina spenta o tradizionale perde il 74% dei potenziali clienti
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  I tuoi competitor con schermi LED stanno rubando i TUOI clienti
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  Ogni giorno perso sono centinaia di euro di commissioni in meno
                </li>
              </ul>
            </div>

            <div className="text-center">
              <img 
                src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/17a8e78e-b143-4bed-a9c5-d27e11516945" 
                alt="Confronto Prima e Dopo Agenzia" 
                className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
              />
              <p className="text-lg font-semibold text-gray-600 mt-4">La differenza è DRAMMATICA: sinistra invisibile, destra centro dell'attenzione</p>
            </div>
          </div>
        </section>

        {/* Solutions by Agency Type */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800 flex items-center justify-center">
              <Star className="text-blue-600 mr-3" size={32} />
              Soluzioni Specifiche per la Tua Agenzia
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Travel Agency */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/391db40b-b240-4507-8d36-0c85c7a0260c" 
                  alt="Agenzia Viaggi LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Plane className="text-blue-500 mr-2" size={24} />
                    AGENZIE VIAGGI
                  </h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "MALDIVE 7 GIORNI €899" - Offerte che fanno fermare i passanti
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Video paradisiaci di spiagge e resort che fanno sognare
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "PRENOTA OGGI - SCONTO 30%" con countdown che crea urgenza
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Testimonianze clienti felici che convincono a entrare
                    </li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-bold text-blue-800 mb-2">💡 IMMAGINA:</p>
                    <p className="text-sm text-gray-700 mb-2">Ogni giorno cambi offerta con un click: oggi "CARAIBI €799", domani "GIAPPONE €1.299"</p>
                    <p className="text-sm font-bold text-red-600">Quanti dei 127 passanti giornalieri stai perdendo SENZA questo display?</p>
                  </div>
                </div>
              </div>

              {/* Insurance Agency */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/8fef1bd1-5d5d-4f0d-89a5-66c1a2c0cc41" 
                  alt="Agenzia Assicurazioni LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Shield className="text-green-500 mr-2" size={24} />
                    ASSICURAZIONI
                  </h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "RC AUTO DA €180/ANNO" - Prezzi shock che attirano automobilisti
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "CASA PROTETTA €15/MESE" - Sicurezza a portata di tutti
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Calcolatore risparmio live: "RISPARMI €347/ANNO"
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "5 STELLE - 2.847 CLIENTI SODDISFATTI" che rassicurano
                    </li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-bold text-green-800 mb-2">💡 IMMAGINA:</p>
                    <p className="text-sm text-gray-700 mb-2">Con un click mostri "RISPARMIO GARANTITO €400/ANNO" e il contatore sale in tempo reale</p>
                    <p className="text-sm font-bold text-red-600">Quante polizze stai perdendo perché i passanti non sanno dei tuoi prezzi?</p>
                  </div>
                </div>
              </div>

              {/* Telecom/Energy Agency */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/eaac2213-5356-4303-b5bc-59e0e93b0561" 
                  alt="Agenzia Servizi Telefonici LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Bolt className="text-yellow-500 mr-2" size={24} />
                    TELECOM & ENERGIA
                  </h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "FIBRA 1000 MEGA €19.90" - Velocità che fa invidia
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "BOLLETTA DIMEZZATA GARANTITA" - Promesse che convincono
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Simulatore live: "RISPARMI €89/MESE SULLA BOLLETTA"
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "SOLO OGGI - ATTIVAZIONE GRATIS" con timer che scade
                    </li>
                  </ul>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm font-bold text-yellow-800 mb-2">💡 IMMAGINA:</p>
                    <p className="text-sm text-gray-700 mb-2">Mattina mostri "FIBRA €19.90", pomeriggio "LUCE E GAS -50%". Tutto con un click!</p>
                    <p className="text-sm font-bold text-red-600">Quanti contratti perdi perché nessuno sa delle tue super-offerte?</p>
                  </div>
                </div>
              </div>

              {/* Post Office */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/1e12affc-bd72-47a2-9a7d-49d87ca2905e" 
                  alt="Ufficio Postale LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <MailIcon className="text-red-500 mr-2" size={24} />
                    UFFICI POSTALI
                  </h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "SPID IN 5 MINUTI" - Servizi digitali che semplificano la vita
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "CONSEGNA DOMANI €3.90" - Velocità che batte Amazon
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "ATTESA: 3 MINUTI" - Trasparenza che rassicura
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "CONTO CORRENTE GRATIS PRIMO ANNO" - Offerte esclusive
                    </li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm font-bold text-red-800 mb-2">💡 IMMAGINA:</p>
                    <p className="text-sm text-gray-700 mb-2">Mostri "ATTESA ATTUALE: 2 MINUTI" e "SPEDIZIONE EXPRESS €3.90" in tempo reale</p>
                    <p className="text-sm font-bold text-red-600">Quante persone entrano dai competitor perché non sanno dei tuoi servizi veloci?</p>
                  </div>
                </div>
              </div>

              {/* Real Estate */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/bdd1a01a-b3d3-47d1-9881-d76455d95009" 
                  alt="Agenzia Immobiliare LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Home className="text-purple-500 mr-2" size={24} />
                    AGENZIE IMMOBILIARI
                  </h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "VILLA 4 CAMERE €280.000" - Case da sogno che fanno sognare
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Video tour virtuali che mostrano ogni dettaglio
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "NUOVA ESCLUSIVA - SOLO DA NOI" che crea desiderio
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "MUTUO APPROVATO IN 24H" - Servizi che facilitano l'acquisto
                    </li>
                  </ul>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm font-bold text-purple-800 mb-2">💡 IMMAGINA:</p>
                    <p className="text-sm text-gray-700 mb-2">Con un click passi da "VILLA €280K" a "ATTICO CENTRO €450K" con video tour mozzafiato</p>
                    <p className="text-sm font-bold text-red-600">Quanti potenziali acquirenti passano senza sapere delle tue esclusive?</p>
                  </div>
                </div>
              </div>

              {/* General Agencies */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                  <Building2 className="text-white" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Briefcase className="text-gray-600 mr-2" size={24} />
                    ALTRE AGENZIE
                  </h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "CONSULENZA GRATUITA" - Professionalità che rassicura
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "APERTI 7/7 - ANCHE LA DOMENICA" - Disponibilità totale
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "PRIMO APPUNTAMENTO GRATIS" - Offerte che invogliano
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      "20 ANNI DI ESPERIENZA" - Credibilità che convince
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                    <p className="text-sm font-bold text-gray-800 mb-2">💡 IMMAGINA:</p>
                    <p className="text-sm text-gray-700 mb-2">Cambi messaggio ogni ora: "CONSULENZA GRATIS", "APERTI DOMENICA", "ESPERTI DAL 2004"</p>
                    <p className="text-sm font-bold text-red-600">Quanti clienti scelgono altri perché non conoscono la tua professionalità?</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sezione Impatto Emotivo */}
            <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">⚠️ LA REALTÀ CHE NON VUOI AMMETTERE</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">SENZA Display LED:</h4>
                    <ul className="space-y-2 text-left">
                      <li>• 127 passanti al giorno = 127 opportunità PERSE</li>
                      <li>• Le tue migliori offerte restano INVISIBILI</li>
                      <li>• I clienti scelgono chi VEDONO meglio</li>
                      <li>• Ogni giorno perdi commissioni che non torneranno MAI</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">CON Display LED InsegneVideo:</h4>
                    <ul className="space-y-2 text-left">
                      <li>• 127 passanti vedono le TUE offerte migliori</li>
                      <li>• Cambi promozione con un CLICK dal telefono</li>
                      <li>• Sei l'UNICO che si nota tra tutti</li>
                      <li>• Ogni giorno GUADAGNI quello che prima perdevi</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 bg-white bg-opacity-20 p-6 rounded-lg">
                  <p className="text-2xl font-bold">
                    Mentre leggi questo, 3 potenziali clienti stanno passando davanti alla tua agenzia.<br />
                    <span className="text-yellow-300">QUANTI STANNO ENTRANDO?</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800 flex items-center justify-center">
              <Star className="text-yellow-500 mr-3" size={32} />
              Perché le Agenzie Vincenti Scelgono InsegneVideo
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">+67% Clienti in Più</h3>
                <p className="text-gray-600">Ogni passante diventa un potenziale cliente grazie alla comunicazione visiva irresistibile</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">+43% Chiusure</h3>
                <p className="text-gray-600">I clienti entrano già interessati e informati sulle tue offerte migliori</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Immagine Premium</h3>
                <p className="text-gray-600">La tua agenzia viene percepita come moderna, affidabile e all'avanguardia</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">ROI Garantito</h3>
                <p className="text-gray-600">L'investimento si ripaga in meno di 15 giorni con le commissioni extra</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800 flex items-center justify-center">
              <Calculator className="text-blue-600 mr-3" size={32} />
              Investimento Che Si Ripaga in Giorni
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Calcolo ROI Realistico per Agenzie</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600 mb-2">€140</div>
                  <div className="text-lg font-semibold text-gray-700">Costo medio mensile</div>
                  <div className="text-sm text-gray-500">Solo €4,67 al giorno</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">1-2</div>
                  <div className="text-lg font-semibold text-gray-700">Clienti extra settimana</div>
                  <div className="text-sm text-gray-500">Risultato tipico garantito</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 mb-2">300%</div>
                  <div className="text-lg font-semibold text-gray-700">ROI mensile</div>
                  <div className="text-sm text-gray-500">Puro guadagno extra</div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Esempi Pratici per Settore:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-blue-600">Agenzia Viaggi:</strong><br />
                    • 1 viaggio venduto extra (€300 commissione) = 2 mesi di canone coperti<br />
                    • 1 last minute/settimana = +€1.200/mese extra
                  </div>
                  <div>
                    <strong className="text-green-600">Assicurazioni:</strong><br />
                    • 1 polizza RC Auto extra (€150 commissione) = 1 mese coperto<br />
                    • 2 polizze/settimana = +€1.200/mese extra
                  </div>
                  <div>
                    <strong className="text-yellow-600">Telecom/Energia:</strong><br />
                    • 1 contratto fibra (€80 commissione) = 17 giorni coperti<br />
                    • 3 contratti/settimana = +€960/mese extra
                  </div>
                  <div>
                    <strong className="text-purple-600">Immobiliare:</strong><br />
                    • 1 vendita extra/trimestre (€2.000 commissione) = anno intero coperto<br />
                    • 1 affitto/mese = +€400 commissioni ricorrenti
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="bg-white py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-black text-center mb-12 text-gray-800 flex items-center justify-center">
              <Star className="text-green-600 mr-3" size={32} />
              Scegli la Formula Che Preferisci
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Noleggio Operativo */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg border-2 border-blue-200 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <Star className="text-yellow-500 mx-auto mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-blue-800">NOLEGGIO OPERATIVO</h3>
                  <div className="text-sm text-blue-600 font-semibold">⭐ PIÙ SCELTO</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Detraibilità fiscale al 100%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Canoni fissi mensili
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Manutenzione inclusa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Aggiornamenti gratuiti
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Assistenza 24/7
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600">Da 120€</div>
                  <div className="text-lg text-gray-600">mese + IVA</div>
                </div>
              </div>

              {/* Acquisto */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-lg border-2 border-green-200 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <Car className="text-green-600 mx-auto mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-green-800">ACQUISTO DIRETTO</h3>
                  <div className="text-sm text-green-600 font-semibold">💰 PROPRIETÀ IMMEDIATA</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Proprietà al 100%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Ammortamento fiscale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Nessun canone mensile
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Garanzia 3 anni
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Supporto tecnico incluso
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600">Da 4.800€</div>
                  <div className="text-lg text-gray-600">una tantum + IVA</div>
                </div>
              </div>

              {/* Leasing */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-lg border-2 border-purple-200 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <TrendingUp className="text-purple-600 mx-auto mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-purple-800">LEASING</h3>
                  <div className="text-sm text-purple-600 font-semibold">🔄 MASSIMA FLESSIBILITÀ</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Rate personalizzate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Riscatto finale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Vantaggi fiscali
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Durata flessibile
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    Upgrade possibili
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">Da 95€</div>
                  <div className="text-lg text-gray-600">rata + IVA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black mb-8 flex items-center justify-center">
              <Shield className="text-green-400 mr-3" size={48} />
              Garanzia InsegneVideo ZERO RISCHI
            </h2>
            
            <div className="bg-gray-800 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">La Nostra Promessa Unica in Italia:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    Montaggio GRATUITO senza alcun impegno
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    Installiamo prima di tutto
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    Vedi subito l'effetto sulla tua agenzia
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    Solo DOPO firmi se sei soddisfatto
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    Se non ti convince, rimuoviamo tutto gratis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    ZERO RISCHI per te
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-xl font-semibold text-yellow-300">
              "Firmi il contratto solo DOPO aver visto più clienti entrare nella tua agenzia.<br />
              È così che lavoriamo noi di InsegneVideo."
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="richiesta-info" className="bg-blue-600 py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-black text-center mb-8 text-white flex items-center justify-center">
              <Zap className="text-yellow-300 mr-3" size={32} />
              Trasforma la Tua Agenzia in 48 Ore
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome e Cognome *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefono *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tipo di Agenzia *</label>
                  <select 
                    name="agencyType"
                    value={formData.agencyType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" 
                    required
                  >
                    <option value="">Seleziona...</option>
                    <option value="viaggi">Agenzia Viaggi</option>
                    <option value="assicurazioni">Assicurazioni</option>
                    <option value="telecom">Telecom/Energia</option>
                    <option value="postale">Ufficio Postale</option>
                    <option value="immobiliare">Immobiliare</option>
                    <option value="altra">Altra Agenzia</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Città</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Formula Preferita</label>
                  <select 
                    name="paymentPreference"
                    value={formData.paymentPreference}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Seleziona...</option>
                    <option value="noleggio">Noleggio Operativo</option>
                    <option value="acquisto">Acquisto</option>
                    <option value="leasing">Leasing</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Note Aggiuntive</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-24" 
                    placeholder="Descrivi le tue esigenze specifiche..."
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleInputChange}
                      className="mr-3" 
                      required
                    />
                    <span className="text-sm text-gray-600">Accetto il trattamento dei dati personali secondo la privacy policy</span>
                  </label>
                </div>
                
                <div className="md:col-span-2 text-center">
                  <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-xl animate-pulse transform hover:scale-105 transition-all flex items-center justify-center space-x-2 mx-auto"
                  >
                    <Mail size={20} />
                    <span>RICHIEDI INSTALLAZIONE GRATUITA</span>
                  </button>
                  <p className="text-sm text-gray-500 mt-4">Rispondiamo entro 2 ore • Sopralluogo gratuito in 24h</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black mb-6 text-yellow-300">
              Non Aspettare Che i Tuoi Competitor Ti Superino
            </h2>
            
            <div className="text-xl mb-8 leading-relaxed">
              Ogni giorno che la tua agenzia rimane invisibile è un giorno di commissioni perse per sempre. 
              I tuoi competitor stanno già installando i loro schermi LED e stanno attraendo i TUOI clienti.
            </div>
            
            <div className="text-2xl font-bold text-red-400 mb-8">
              La finestra di opportunità si sta chiudendo. Agisci ADESSO.
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="tel:+390282941180"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl animate-pulse flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>CHIAMA ORA: 02-82941180</span>
              </a>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>WHATSAPP IMMEDIATO</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AgenzePage;