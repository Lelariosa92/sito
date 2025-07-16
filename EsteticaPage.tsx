import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Scissors, TrendingUp, Users, Clock, CheckCircle, X, Star, Shield, Zap, Calculator, Eye, Percent, Rocket, Handshake, Phone, Mail, MapPin } from 'lucide-react';

const EsteticaPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    city: '',
    screenType: '',
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
      
      tipo_attivita_domanda: "Tipo di Attività",
      tipo_attivita_risposta: formData.businessType,
      
      citta_domanda: "Città e Provincia",
      citta_risposta: formData.city,
      
      schermo_interesse_domanda: "Quale schermo ti interessa di più?",
      schermo_interesse_risposta: formData.screenType,
      
      note_domanda: "Note aggiuntive",
      note_risposta: formData.notes,
      
      privacy_domanda: "Accetto la privacy policy",
      privacy_risposta: formData.acceptPrivacy ? "Sì" : "No",
      
      timestamp: new Date().toISOString(),
      source: "InsegneVideo Website - Estetica/Parrucchieri",
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
        alert('Richiesta inviata con successo! Ti ricontatteremo entro 2 ore lavorative.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          businessType: '',
          city: '',
          screenType: '',
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
      <div className="bg-pink-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-2 flex-wrap">
          <Scissors className="animate-pulse" size={16} />
          <span className="font-semibold">BEAUTY SECTOR: Solo 3 installazioni disponibili questo mese nella tua zona</span>
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
          background: 'linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 100%)'
        }}>
          <div className="section-padding text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold mb-6">
                TRASFORMA IL TUO SALONE<br />
                <span className="text-yellow-300">IN UN MAGNETE PER CLIENTI</span>
              </h1>
              <h2 className="text-2xl mb-8 text-blue-100">
                Con i nostri schermi LED ogni giorno attiri nuovi clienti<br />
                Mentre i tuoi competitor rimangono invisibili
              </h2>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                <p className="text-xl mb-4 flex items-center justify-center">
                  <CheckCircle className="text-green-300 mr-2" size={24} />
                  <strong>Ogni giorno una promozione diversa = Salone sempre pieno</strong>
                </p>
                <p className="text-lg">
                  Oggi "TAGLIO + PIEGA €25", domani "TRATTAMENTO CHERATINA €60".<br />
                  I passanti non resistono alle tue offerte video!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problema/Opportunità */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                L'Opportunità che Potrebbe Sfuggirti
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                      <Eye className="mr-2" size={24} />
                      SENZA Schermo LED
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <X className="text-red-500 mr-2" size={20} />
                        I passanti non ti notano
                      </li>
                      <li className="flex items-center">
                        <X className="text-red-500 mr-2" size={20} />
                        Le promozioni nessuno le vede
                      </li>
                      <li className="flex items-center">
                        <X className="text-red-500 mr-2" size={20} />
                        Sembri un salone del passato
                      </li>
                      <li className="flex items-center">
                        <X className="text-red-500 mr-2" size={20} />
                        I clienti scelgono chi è più visibile
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                      <Eye className="mr-2" size={24} />
                      CON Schermo LED InsegneVideo
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={20} />
                        Sei l'unico che si nota
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={20} />
                        Promozioni sempre sotto gli occhi
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={20} />
                        Sembri innovativo e moderno
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={20} />
                        I clienti scelgono te
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trasformazione Saloni */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Guarda Come Trasformiamo i Saloni
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Soluzioni a partire da <span className="text-green-600 font-bold text-2xl">80€/mese + IVA</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/ceecbcd6-6fad-4c3c-b441-26f3bb8362b4" 
                  alt="Parrucchiere con schermo LED vetrina" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Schermo Vetrina</h3>
                  <p className="text-gray-600">Promozioni che cambiano ogni giorno. I passanti si fermano, guardano e entrano.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/ea2722d3-1db8-4bc8-a67c-d9c57f718004" 
                  alt="Centro estetico con schermo LED parete" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Schermo a Parete</h3>
                  <p className="text-gray-600">Nell'area reception intrattieni e informi i clienti sui tuoi servizi.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/f7b652e1-6f41-46b6-8f2c-d7d2eb5fe18c" 
                  alt="Salone bellezza con insegna LED" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Insegna LED</h3>
                  <p className="text-gray-600">Sostituisce la vecchia insegna. Sei visibile anche da lontano, giorno e notte.</p>
                </div>
              </div>
            </div>

            {/* Confronto Prima/Dopo */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6">La Trasformazione è Impressionante</h3>
              <img 
                src="https://cdn1.genspark.ai/user-upload-image/gpt_image_generated/3903ee5c-fcd2-4518-a6b3-1c071b8e7974" 
                alt="Confronto prima e dopo con schermo LED" 
                className="w-full rounded-lg"
              />
              <p className="text-center text-gray-600 mt-4 text-lg">
                <strong>PRIMA:</strong> Invisibile tra mille saloni uguali &nbsp;&nbsp; | &nbsp;&nbsp; <strong>DOPO:</strong> L'unico che attira sguardi e clienti
              </p>
            </div>
          </div>
        </section>

        {/* Prezzi Trasparenti con ROI */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Prezzi Trasparenti e Convenienti
              </h2>
              <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl p-6 max-w-4xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                  <Rocket className="mr-2" size={24} />
                  Il Tuo Investimento si Ripaga in Pochissimi Giorni!
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">130€</div>
                    <div className="text-sm">Costo medio mensile</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4,30€</div>
                    <div className="text-sm">Costo al giorno</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1 Cliente</div>
                    <div className="text-sm">Ogni 3 giorni per ripagarlo</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl max-w-3xl mx-auto">
                <h4 className="text-xl font-semibold text-green-800 mb-4">Calcolo Pratico del Recupero:</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>1 Cliente extra con Taglio+Piega (35€)</strong> = 8 giorni di canone coperti</p>
                  <p><strong>1 Cliente extra con Trattamento (60€)</strong> = 14 giorni di canone coperti</p>
                  <p><strong>2 Clienti extra al mese</strong> = Investimento già ripagato + guadagno netto!</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-4xl mb-4">
                  <span className="text-blue-600">🖥️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schermo Vetrina</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">120€/mese</div>
                <div className="text-sm text-gray-600 mb-4">+ IVA - Prezzo medio</div>
                <div className="bg-green-100 text-green-800 p-2 rounded-lg text-sm font-semibold">
                  ROI: 3-5 giorni
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">
                  <span className="text-purple-600">🏳️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schermo Bandiera</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">130€/mese</div>
                <div className="text-sm text-gray-600 mb-4">+ IVA - Prezzo medio</div>
                <div className="bg-green-100 text-green-800 p-2 rounded-lg text-sm font-semibold">
                  ROI: 4-6 giorni
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">
                  <span className="text-green-600">📺</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schermo Parete</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">150€/mese</div>
                <div className="text-sm text-gray-600 mb-4">+ IVA - Prezzo medio</div>
                <div className="bg-green-100 text-green-800 p-2 rounded-lg text-sm font-semibold">
                  ROI: 5-7 giorni
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">
                  <span className="text-red-600">🪧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Insegna LED</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">150€/mese</div>
                <div className="text-sm text-gray-600 mb-4">+ IVA - Prezzo medio</div>
                <div className="bg-green-100 text-green-800 p-2 rounded-lg text-sm font-semibold">
                  ROI: 5-7 giorni
                </div>
              </div>
            </div>

            {/* Opzioni di Pagamento */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Scegli la Formula Che Preferisci</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-center mb-4">
                    <span className="text-blue-600 text-3xl">📅</span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800 text-center mb-4">NOLEGGIO OPERATIVO</h4>
                  <div className="text-center mb-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">CONSIGLIATO</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      Detraibilità fiscale 100%
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
                      Zero anticipo
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-center mb-4">
                    <span className="text-green-600 text-3xl">🛒</span>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 text-center mb-8">ACQUISTO</h4>
                  <ul className="space-y-2 text-gray-700">
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
                      Nessun canone mensile
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-center mb-4">
                    <span className="text-purple-600 text-3xl">💳</span>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-800 text-center mb-8">LEASING</h4>
                  <ul className="space-y-2 text-gray-700">
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
                      Flessibilità massima
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garanzia 100% */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <Shield className="text-green-500 mr-4" size={48} />
                La Nostra Garanzia 100%
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                L'unica garanzia del settore che elimina ogni tuo rischio
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Come Funziona la Nostra Garanzia Rivoluzionaria:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-lg">Installiamo GRATIS</h4>
                      <p className="text-gray-600">Montiamo il tuo schermo LED senza nessuna firma o pagamento</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-lg">Tu Provi Sul Campo</h4>
                      <p className="text-gray-600">Vedi con i tuoi occhi quanti clienti in più attiri</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-lg">SOLO SE Sei Soddisfatto</h4>
                      <p className="text-gray-600">Firmi il contratto e iniziamo la fatturazione</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <X className="mr-2" size={24} />
                    Se Non Sei Convinto?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Smontiamo tutto e ce ne andiamo. <strong>Zero costi, zero problemi, zero rischi per te.</strong>
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="text-green-800 font-semibold text-center">
                      È così che lavoriamo noi di InsegneVideo.<br />
                      Prima ti dimostriamo il valore, poi parliamo di business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vantaggi Competitivi */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Perché i Saloni Scelgono InsegneVideo
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <Eye className="text-blue-600 mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Massima Visibilità</h3>
                <p className="text-gray-600">Sei l'unico salone che si nota tra tutti gli altri. Impossibile non vederti.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <Percent className="text-green-600 mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Promozioni Efficaci</h3>
                <p className="text-gray-600">Cambi offerta ogni giorno. I passanti tornano per vedere le novità.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <Rocket className="text-purple-600 mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Immagine Innovativa</h3>
                <p className="text-gray-600">Chi usa tecnologie moderne viene percepito come professionale e aggiornato.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <Handshake className="text-red-600 mx-auto" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Relazione Clienti</h3>
                <p className="text-gray-600">Con i video mostri chi sei e cosa sai fare. I clienti ti scelgono prima di entrare.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form di Contatto */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Richiedi l'Installazione Gratuita
              </h2>
              <p className="text-xl text-blue-100">
                Compila il form e ti chiamiamo entro 2 ore per fissare l'appuntamento
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 text-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome e Cognome *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefono *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo di Attività *</label>
                  <select 
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Seleziona...</option>
                    <option value="parrucchiere">Parrucchiere</option>
                    <option value="centro_estetico">Centro Estetico</option>
                    <option value="barbiere">Barbiere</option>
                    <option value="salone_bellezza">Salone di Bellezza</option>
                    <option value="spa">SPA/Centro Benessere</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Città e Provincia *</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required 
                    placeholder="es. Milano (MI)" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Quale schermo ti interessa di più?</label>
                  <select 
                    name="screenType"
                    value={formData.screenType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Seleziona...</option>
                    <option value="vetrina">Schermo Vetrina (120€/mese)</option>
                    <option value="bandiera">Schermo Bandiera (130€/mese)</option>
                    <option value="parete">Schermo a Parete (150€/mese)</option>
                    <option value="insegna">Insegna LED (150€/mese)</option>
                    <option value="non_so">Non so, voglio consulenza</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Note aggiuntive</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" 
                    placeholder="Raccontaci del tuo salone e delle tue esigenze..."
                  ></textarea>
                </div>

                <div className="text-sm text-gray-600">
                  <label className="flex items-start">
                    <input 
                      type="checkbox" 
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleInputChange}
                      required 
                      className="mt-1 mr-2"
                    />
                    <span>Accetto il trattamento dei dati personali secondo la normativa privacy (GDPR). I miei dati saranno utilizzati esclusivamente per rispondere alla mia richiesta.</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 text-lg flex items-center justify-center space-x-2"
                >
                  <Rocket size={20} />
                  <span>RICHIEDI INSTALLAZIONE GRATUITA</span>
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p className="flex items-center justify-center">
                  <Clock className="mr-1" size={16} />
                  Ti ricontatteremo entro 2 ore lavorative
                </p>
                <p className="flex items-center justify-center mt-1">
                  <MapPin className="mr-1" size={16} />
                  Installiamo in tutta Italia
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EsteticaPage;