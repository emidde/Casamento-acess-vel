import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  visible: boolean;
}

const names = [
  'Juliana', 'Nathália', 'Bianca', 'Priscila', 'Amanda',
  'Renata', 'Camila', 'Daniela', 'Mariana', 'Letícia'
];

export const PurchaseNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        name: names[currentIndex],
        visible: true
      };

      setNotifications(prev => [...prev, newNotification]);

      // Remove notification after 4 seconds
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(notif => 
            notif.id === newNotification.id 
              ? { ...notif, visible: false }
              : notif
          )
        );

        // Remove from array after fade out animation
        setTimeout(() => {
          setNotifications(prev => 
            prev.filter(notif => notif.id !== newNotification.id)
          );
        }, 300);
      }, 4000);

      setCurrentIndex(prev => (prev + 1) % names.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleClose = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id 
          ? { ...notif, visible: false }
          : notif
      )
    );

    setTimeout(() => {
      setNotifications(prev => 
        prev.filter(notif => notif.id !== id)
      );
    }, 300);
  };

  return (
    <div className="fixed bottom-24 sm:bottom-4 left-4 z-30 space-y-2 w-[90%] sm:w-auto max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            transform transition-all duration-300 ease-in-out
            ${notification.visible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
        >
          <div className="bg-[#F6E7FF] border border-purple-100 rounded-lg p-3 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <p className="text-sm font-medium text-[#5A3E85]">
                  <span className="font-semibold">{notification.name}</span> garantiu o pacote completo!
                </p>
              </div>
              <button
                onClick={() => handleClose(notification.id)}
                className="text-[#5A3E85] hover:text-purple-700 transition-colors ml-2"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};