import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Stethoscope, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator, Award, Guitar as Hospital, MapPin, Percent as Percentage, LineChart as ChartLine, PenTool as Tools, Leaf, Cog, Megaphone, Crown, Phone, Mail, MapPinIcon } from 'lucide-react';

const MediciPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    structureType: '',
    address: '',
    services: '',
    preferences: {
      noleggio: false,
      acquisto: false,
      sopralluogo: false,
      preventivo: false
    },
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
    
    if (name.startsWith('preferences.')) {
      const prefKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: (e.target as HTMLInputElement).checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
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
      
      tipo_struttura_domanda: "Tipo di Struttura",
      tipo_struttura_risposta: formData.structureType,
      
      indirizzo_domanda: "Città e Indirizzo",
      indirizzo_risposta: formData.address,
      
      servizi_domanda: "Servizi Offerti",
      servizi_risposta: formData.services,
      
      preferenze_domanda: "Preferenze",
      preferenze_risposta: Object.entries(formData.preferences)
        .filter(([_, value]) => value)
        .map(([key, _]) => key)
        .join(', '),
      
      privacy_domanda: "Accetto la privacy policy",
      privacy_risposta: formData.acceptPrivacy ? "Sì" : "No",
      
      timestamp: new Date().toISOString(),
      source: "InsegneVideo Website - Studi Medici",
      form_type: "Richiesta Preventivo Medico"
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
          name: '',
          email: '',
          phone: '',
          structureType: '',
          address: '',
          services: '',
          preferences: {
            noleggio: false,
            acquisto: false,
            sopralluogo: false,
            preventivo: false
          },
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
          <Stethoscope className="animate-pulse" size={16} />
          <span className="font-semibold">SETTORE MEDICO: Unisciti ai 500+ studi medici d'eccellenza che hanno scelto InsegneVideo</span>
          <div className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold ml-4 flex items-center space-x-1">
            <Clock size={14} />
            <span>
              ⏰ Preventivo gratuito scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section con Video */}
        <section className="relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  Unisciti ai <span className="text-yellow-300">500+ Studi Medici d'Eccellenza</span><br />
                  che hanno già scelto InsegneVideo
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Fai come i più grandi studi medici all'avanguardia d'Italia.<br />
                  Noleggio operativo 100% detraibile con garanzia totale.
                </p>
                <div className="flex justify-center items-center space-x-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300">500+</div>
                    <div className="text-sm">Studi Medici</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300">+42%</div>
                    <div className="text-sm">Pazienti Medi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm">Detraibilità</div>
                  </div>
                </div>
              </div>
              
              {/* Video Hero */}
              <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <video 
                    controls 
                    playsInline 
                    className="w-full h-auto rounded-lg"
                    poster="https://cdn1.genspark.ai/user-upload-image/video_frames/bc317431-0499-4a8f-8c68-a192996d0132"
                  >
                    <source src="https://cdn1.genspark.ai/user-upload-image/1/ff45b7cc-50cf-469b-bd84-a25a7e402641.mp4" type="video/mp4" />
                    Il tuo browser non supporta la riproduzione video.
                  </video>
                </div>
                <p className="text-center text-lg mt-6 opacity-90 flex items-center justify-center">
                  <span className="mr-2">▶️</span>
                  Guarda come i nostri display LED attraggono i pazienti
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Social Proof */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                I Più Grandi Studi Medici d'Italia Utilizzano InsegneVideo
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Dalle cliniche di prestigio di Milano ai centri specialistici di Roma, le strutture sanitarie 
                all'avanguardia hanno una cosa in comune: utilizzano le soluzioni display LED di InsegneVideo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-center">
                  <Hospital className="text-4xl text-blue-600 mb-4 mx-auto" size={48} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Studi di Eccellenza</h3>
                  <p className="text-gray-600">Strutture con fatturati superiori ai 2 milioni di euro</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-center">
                  <MapPin className="text-4xl text-green-600 mb-4 mx-auto" size={48} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Centri Prestigiosi</h3>
                  <p className="text-gray-600">Da Roma Nord alle cliniche di Milano Centro</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="text-center">
                  <Award className="text-4xl text-purple-600 mb-4 mx-auto" size={48} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sinonimo di Innovazione</h3>
                  <p className="text-gray-600">Studi medici all'avanguardia e innovativi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Immagini Realistiche */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Soluzioni Display LED per Ogni Struttura Sanitaria
              </h2>
              <p className="text-xl text-gray-600">
                Dalle cliniche dentali ai centri radiologici, dalle fisioterapie agli studi medici specialistici
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Studio Medico */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/73bac812-f8b3-4c17-8bce-d903a9f63f0d" 
                  alt="Studio Medico con Display LED" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Studio Medico Specialistico</h3>
                  <p className="text-gray-600 mb-4">Display LED che comunica professionalità e attira pazienti con servizi di cardiologia, dermatologia e medicina generale.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">Noleggio da €89/mese</span>
                    <span className="text-green-600 font-semibold">100% Detraibile</span>
                  </div>
                </div>
              </div>

              {/* Centro Analisi */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/5b43c764-4a07-4eb8-938c-e29a22d9f9f6" 
                  alt="Centro Analisi con Display LED" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Centro Analisi e Radiologia</h3>
                  <p className="text-gray-600 mb-4">Schermo LED che informa sui servizi di radiologia, ecografie, analisi del sangue e prenotazioni online.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">Noleggio da €120/mese</span>
                    <span className="text-green-600 font-semibold">100% Detraibile</span>
                  </div>
                </div>
              </div>

              {/* Clinica Dentale */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/c2010703-e9b8-4ce3-ad31-1cd0d90d036c" 
                  alt="Clinica Dentale con Display LED" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Clinica Dentale</h3>
                  <p className="text-gray-600 mb-4">Display LED in vetrina che attira pazienti con servizi di implantologia, ortodonzia e sbiancamento dentale.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">Noleggio da €95/mese</span>
                    <span className="text-green-600 font-semibold">100% Detraibile</span>
                  </div>
                </div>
              </div>

              {/* Centro Fisioterapia */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/e6ae6222-1125-4043-8c2b-76cc343a5fab" 
                  alt="Centro Fisioterapia con Display LED" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Centro Fisioterapia</h3>
                  <p className="text-gray-600 mb-4">Schermo LED che promuove servizi di fisioterapia, riabilitazione, osteopatia e massoterapia.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">Noleggio da €110/mese</span>
                    <span className="text-green-600 font-semibold">100% Detraibile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Vantaggi Fiscali */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Noleggio Operativo 100% Detraibile
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Con il noleggio operativo, ogni euro investito è completamente detraibile.<br />
                Nessun anticipo, nessun residuo patrimoniale, solo vantaggi fiscali.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-4xl text-green-600 mb-4">
                  <Percentage className="mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100% Detraibile</h3>
                <p className="text-gray-600">Detraibilità fiscale completa del canone mensile</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-4xl text-blue-600 mb-4">
                  <ChartLine className="mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Off-Balance</h3>
                <p className="text-gray-600">Nessun impatto sul bilancio aziendale</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-4xl text-purple-600 mb-4">
                  <Shield className="mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Garanzia 100%</h3>
                <p className="text-gray-600">Copertura totale per tutta la durata del noleggio</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <div className="text-4xl text-orange-600 mb-4">
                  <Tools className="mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tutto Incluso</h3>
                <p className="text-gray-600">Assistenza e manutenzione nel canone</p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Vantaggi Fiscali Aggiuntivi</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <Leaf className="text-green-600 text-2xl mb-2 mx-auto" size={32} />
                    <h4 className="font-semibold text-gray-800">Detrazione 65%</h4>
                    <p className="text-sm text-gray-600">Riqualificazione energetica LED</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Cog className="text-blue-600 text-2xl mb-2 mx-auto" size={32} />
                    <h4 className="font-semibold text-gray-800">Industria 4.0</h4>
                    <p className="text-sm text-gray-600">Ammortamento accelerato 130%</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Megaphone className="text-purple-600 text-2xl mb-2 mx-auto" size={32} />
                    <h4 className="font-semibold text-gray-800">Spese Pubblicitarie</h4>
                    <p className="text-sm text-gray-600">Deducibilità al 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confronto Competitor */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Perché Scegliere InsegneVideo
              </h2>
              <p className="text-xl text-gray-600">
                Confronta i nostri vantaggi con la concorrenza
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Caratteristiche</th>
                      <th className="py-4 px-6 text-center bg-blue-700">
                        <Crown className="mb-2 mx-auto" size={24} />
                        InsegneVideo
                      </th>
                      <th className="py-4 px-6 text-center">Competitor A</th>
                      <th className="py-4 px-6 text-center">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Installazione Gratuita</td>
                      <td className="py-4 px-6 text-center bg-green-50">
                        <CheckCircle className="text-green-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="text-red-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="text-red-600 text-xl mx-auto" size={24} />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Noleggio senza Anticipo</td>
                      <td className="py-4 px-6 text-center bg-green-50">
                        <CheckCircle className="text-green-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="text-red-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-yellow-600">Parziale</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Assistenza 24/7</td>
                      <td className="py-4 px-6 text-center bg-green-50">
                        <CheckCircle className="text-green-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-yellow-600">Parziale</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="text-red-600 text-xl mx-auto" size={24} />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Garanzia 100%</td>
                      <td className="py-4 px-6 text-center bg-green-50">
                        <CheckCircle className="text-green-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="text-red-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-yellow-600">Parziale</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-semibold">Personalizzazione Completa</td>
                      <td className="py-4 px-6 text-center bg-green-50">
                        <CheckCircle className="text-green-600 text-xl mx-auto" size={24} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-yellow-600">Parziale</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="text-red-600 text-xl mx-auto" size={24} />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold">Esperienza Settore Medico</td>
                      <td className="py-4 px-6 text-center bg-green-50">
                        <span className="text-green-600 font-bold">30+ anni</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-yellow-600">10 anni</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-red-600">5 anni</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Form di Richiesta */}
        <section id="richiesta" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Richiedi il Tuo Preventivo Gratuito
                </h2>
                <p className="text-xl text-gray-600">
                  Unisciti ai migliori studi medici d'Italia. Sopralluogo e preventivo gratuiti.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nome e Cognome *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Inserisci il tuo nome"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Inserisci la tua email"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Inserisci il tuo telefono"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Tipo di Struttura *</label>
                    <select 
                      name="structureType"
                      value={formData.structureType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seleziona...</option>
                      <option value="studio-medico">Studio Medico</option>
                      <option value="clinica-dentale">Clinica Dentale</option>
                      <option value="centro-analisi">Centro Analisi</option>
                      <option value="centro-radiologico">Centro Radiologico</option>
                      <option value="fisioterapia">Centro Fisioterapia</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Città e Indirizzo</label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Inserisci città e indirizzo del tuo studio"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Servizi Offerti</label>
                    <textarea 
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      rows={3} 
                      placeholder="Descrivi i servizi che offri (es. cardiologia, dermatologia, implantologia...)"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Preferenze</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="preferences.noleggio"
                          checked={formData.preferences.noleggio}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Noleggio Operativo</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="preferences.acquisto"
                          checked={formData.preferences.acquisto}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Acquisto</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="preferences.sopralluogo"
                          checked={formData.preferences.sopralluogo}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Sopralluogo Gratuito</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          name="preferences.preventivo"
                          checked={formData.preferences.preventivo}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Preventivo Dettagliato</span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="acceptPrivacy"
                        checked={formData.acceptPrivacy}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                        required
                      />
                      <span className="ml-2 text-gray-700">Accetto il trattamento dei dati personali ai sensi del GDPR *</span>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>📧</span>
                      <span>Richiedi Preventivo Gratuito</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonianze */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Cosa Dicono i Nostri Clienti
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Stethoscope className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dott. Mario Rossi</h4>
                    <p className="text-gray-600 text-sm">Cardiologia - Milano</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"Da quando ho installato il display LED, i miei pazienti sono aumentati del 40%. Il noleggio operativo è stato la scelta giusta."</p>
                <div className="flex text-yellow-500 mt-4">
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Stethoscope className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dott.ssa Laura Bianchi</h4>
                    <p className="text-gray-600 text-sm">Odontoiatria - Roma</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"Professionalità e assistenza eccellenti. Lo schermo LED ha dato una svolta alla mia clinica dentale."</p>
                <div className="flex text-yellow-500 mt-4">
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Stethoscope className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dott. Giuseppe Verdi</h4>
                    <p className="text-gray-600 text-sm">Centro Radiologico - Torino</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"Investimento perfetto. La detraibilità al 100% del noleggio operativo è stata determinante per la nostra scelta."</p>
                <div className="flex text-yellow-500 mt-4">
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                  <Star className="fill-current" size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="section-padding bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Unisciti ai Migliori Studi Medici d'Italia</h2>
            <p className="text-xl mb-8">
              Noleggio operativo 100% detraibile. Installazione gratuita. Garanzia totale.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                onClick={() => {
                  const element = document.getElementById('richiesta');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Richiedi Preventivo GRATUITO
              </button>
              <a 
                href="tel:+390282941180"
                className="bg-purple-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors inline-block text-center flex items-center space-x-2"
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

export default MediciPage;