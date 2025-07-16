import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Phone, Mail, MapPin, Building2, Clock, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Video className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">InsegneVideo</h3>
                  <p className="text-sm text-gray-400">Dal 1998</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                L'UNICA azienda in Italia che installa GRATIS prima di farti firmare.
                Zero anticipo. Zero rischi. Paghi solo se funziona.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-primary" />
                  <span className="text-sm">2.000+ Installazioni</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm">26 Anni</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Settori</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/farmacie" className="text-gray-300 hover:text-primary transition-colors">
                    Farmacie
                  </Link>
                </li>
                <li>
                  <Link to="/bar-ristoranti" className="text-gray-300 hover:text-primary transition-colors">
                    Bar e Ristoranti
                  </Link>
                </li>
                <li>
                  <Link to="/automotive" className="text-gray-300 hover:text-primary transition-colors">
                    Concessionari e Service
                  </Link>
                </li>
                <li>
                  <Link to="/retail" className="text-gray-300 hover:text-primary transition-colors">
                    Retail/Negozi
                  </Link>
                </li>
                <li>
                  <Link to="/medici" className="text-gray-300 hover:text-primary transition-colors">
                    Studi Medici
                  </Link>
                </li>
                <li>
                  <Link to="/agenzie" className="text-gray-300 hover:text-primary transition-colors">
                    Agenzie/Uffici
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contatti</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Centralino Italia</p>
                    <a href="tel:+390282941180" className="text-gray-300 hover:text-primary transition-colors">
                      +39 02-82941180
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@insegne.video" className="text-gray-300 hover:text-primary transition-colors">
                      info@insegne.video
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Orari</p>
                    <p className="text-gray-300 text-sm">Lun-Ven: 9:00-18:00</p>
                    <p className="text-gray-300 text-sm">Sab: 9:00-13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div>
              <h4 className="text-xl font-bold mb-6">I Nostri Uffici</h4>
              <div className="space-y-6">
                
                {/* Ufficio Nord */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Building2 className="text-primary" size={18} />
                    <h5 className="font-semibold">Ufficio Commerciale Nord</h5>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                    <div className="text-gray-300 text-sm">
                      <p>Via Bagutta 13</p>
                      <p>20121 Milano, Italy</p>
                    </div>
                  </div>
                </div>

                {/* Ufficio Sud */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Building2 className="text-primary" size={18} />
                    <h5 className="font-semibold">Ufficio Commerciale Sud</h5>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                    <div className="text-gray-300 text-sm">
                      <p>Via dei Garofani 13</p>
                      <p>85100 Potenza, Italy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2024 Live Screen S.r.l. - P.IVA 02144420763</p>
              <p className="mt-1">Tutti i diritti riservati</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/termini" className="text-gray-400 hover:text-primary transition-colors">
                Termini di Servizio
              </Link>
              <Link to="/cookie" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">Pronto per Trasformare la Tua Visibilità?</p>
              <p className="text-sm opacity-90">Installazione GRATUITA - Zero anticipo - Paghi solo se funziona</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <a 
                href="tel:+390282941180" 
                className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Chiama Ora: 02-82941180
              </a>
              <button className="bg-secondary text-white font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Richiedi Sopralluogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;