import React from 'react';
import { Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="sticky-cta">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <div className="font-bold text-sm">Installazione GRATUITA</div>
            <div className="text-xs opacity-90">Solo 3 posti disponibili</div>
          </div>
          <button className="bg-white text-primary font-bold px-4 py-2 rounded-lg flex items-center space-x-2">
            <Phone size={16} />
            <a href="tel:+390282941180" className="text-primary">Chiama Ora</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;