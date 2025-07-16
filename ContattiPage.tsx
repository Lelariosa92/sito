import React from 'react';
import Header from '../components/Header';

const ContattiPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="hero-gradient text-white section-padding">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contatti - Pagina in Costruzione
            </h1>
            <p className="text-xl mb-8">
              Questa pagina sarà disponibile presto con tutti i dettagli di contatto.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Torna alla Home
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContattiPage;