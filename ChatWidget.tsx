import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Simulate sending message
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Hai domande?</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="mb-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm">
              Ciao! Sono qui per aiutarti. Hai domande sulle nostre insegne LED?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Scrivi il tuo messaggio..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="chat-bubble flex items-center space-x-2"
      >
        <MessageCircle size={20} />
        <span>Chatta con noi</span>
      </button>
    </div>
  );
};

export default ChatWidget;