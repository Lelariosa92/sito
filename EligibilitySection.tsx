import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const EligibilitySection: React.FC = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    city: '',
    businessName: '',
    email: '',
    phone: '',
    hasSign: '',
    acceptPrivacy: false
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      // Form questions and answers
      tipo_attivita_domanda: "Tipo di attività",
      tipo_attivita_risposta: formData.businessType,
      
      citta_domanda: "Città",
      citta_risposta: formData.city,
      
      nome_attivita_domanda: "Nome attività",
      nome_attivita_risposta: formData.businessName,
      
      email_domanda: "Email aziendale",
      email_risposta: formData.email,
      
      cellulare_domanda: "Cellulare",
      cellulare_risposta: formData.phone,
      
      insegna_esistente_domanda: "Hai già un'insegna?",
      insegna_esistente_risposta: formData.hasSign,
      
      privacy_domanda: "Accetto la privacy policy",
      privacy_risposta: formData.acceptPrivacy ? "Sì" : "No",
      
      // Additional metadata
      timestamp: new Date().toISOString(),
      source: "InsegneVideo Website",
      form_type: "Verifica Idoneità"
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
        // Reset form
        setFormData({
          businessType: '',
          city: '',
          businessName: '',
          email: '',
          phone: '',
          hasSign: '',
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
    <section id="verifica-idoneita" className="section-padding bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Verifica se la Tua Attività è Idonea</h2>
          <p className="text-xl mb-6">Solo 3 posti disponibili nella tua zona questo mese</p>
          
          {/* Countdown */}
          <div className="bg-red-600 text-white py-3 px-6 rounded-lg mb-8 inline-flex items-center space-x-2">
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
                  Tipo di attività*
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Seleziona...</option>
                  <option value="farmacia">Farmacia</option>
                  <option value="ristorante">Ristorante</option>
                  <option value="bar">Bar/Caffetteria</option>
                  <option value="retail">Retail/Negozio</option>
                  <option value="medico">Studio Medico</option>
                  <option value="agenzia">Agenzia/Ufficio</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  placeholder="Es. Farmacia Rossi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hai già un'insegna?
                </label>
                <select
                  name="hasSign"
                  value={formData.hasSign}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Seleziona...</option>
                  <option value="no">No</option>
                  <option value="si-tradizionale">Sì, tradizionale</option>
                  <option value="si-led">Sì, LED</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  required
                />
                <span className="text-sm text-gray-600">
                  Accetto la privacy policy
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
            >
              <CheckCircle size={20} />
              <span>Verifica Idoneità → 2 MIN</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;