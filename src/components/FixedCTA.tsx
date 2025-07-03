import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FixedCTAProps {
  onClick: () => void;
}

export const FixedCTA: React.FC<FixedCTAProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 p-3 sm:p-4 shadow-2xl z-40 sm:hidden">
      <div className="flex items-center justify-between max-w-sm mx-auto">
        <div className="text-white">
          <p className="text-xs opacity-90">Oferta especial</p>
          <p className="text-lg sm:text-xl font-bold">R$14,90</p>
        </div>
        <button
          onClick={onClick}
          className="bg-white text-purple-800 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Comprar Agora</span>
        </button>
      </div>
    </div>
  );
};