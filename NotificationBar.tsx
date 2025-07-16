import React, { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';

const NotificationBar: React.FC = () => {
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

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="notification-bar text-white text-center py-3 px-4">
      <div className="flex items-center justify-center space-x-2 flex-wrap">
        <Zap className="animate-pulse" size={16} />
        <span className="font-semibold">
          ATTENZIONE: Solo 3 installazioni disponibili questo mese nella tua zona
        </span>
        <div className="countdown ml-4 flex items-center space-x-1">
          <Clock size={14} />
          <span>
            Scade tra: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;