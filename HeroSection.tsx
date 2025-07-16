import React from 'react';
import { CheckCircle, Calculator, Users, Calendar, Heart, Headphones } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-700"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dal 1998, Trasformiamo la Visibilità<br />
            <span className="text-primary">in Fatturato</span> per Oltre 2.000 Imprese
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            L'UNICA azienda in Italia che installa <strong>GRATIS</strong> prima di farti firmare.<br />
            Zero anticipo. Zero rischi. Paghi solo se funziona.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
            <button 
              onClick={() => {
                const element = document.getElementById('verifica-idoneita');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-4 w-full md:w-auto"
            >
              <CheckCircle className="mr-2" size={20} />
              Verifica Idoneità → 2 MIN
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('roi');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary text-lg px-8 py-4 w-full md:w-auto"
            >
              <Calculator className="mr-2" size={20} />
              Calcola il Tuo ROI
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="trust-indicator">
              <div className="text-primary text-2xl mr-3">
                <Users size={32} />
              </div>
              <div>
                <div className="font-bold text-lg text-dark">2.000+</div>
                <div className="text-sm text-gray-600">Installazioni</div>
              </div>
            </div>
            <div className="trust-indicator">
              <div className="text-primary text-2xl mr-3">
                <Calendar size={32} />
              </div>
              <div>
                <div className="font-bold text-lg text-dark">34 Anni</div>
                <div className="text-sm text-gray-600">Dal 1998</div>
              </div>
            </div>
            <div className="trust-indicator">
              <div className="text-primary text-2xl mr-3">
                <Heart size={32} />
              </div>
              <div>
                <div className="font-bold text-lg text-dark">98%</div>
                <div className="text-sm text-gray-600">Rinnova</div>
              </div>
            </div>
            <div className="trust-indicator">
              <div className="text-primary text-2xl mr-3">
                <Headphones size={32} />
              </div>
              <div>
                <div className="font-bold text-lg text-dark">24/7</div>
                <div className="text-sm text-gray-600">Assistenza</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;