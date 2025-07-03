import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 px-4 py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-purple-600">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+5.000 noivas</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              <span>Entrega imediata</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              <span>Acesso vitalício</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-purple-800 mb-4 sm:mb-6 leading-tight px-2">
            Organize o casamento dos seus sonhos{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              gastando pouco
            </span>
            {' '}— em menos de uma tarde!
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Receba agora mais de 10 materiais essenciais para planejar um casamento completo 
            gastando até 70% menos do que a média brasileira — acesso imediato.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Quero planejar meu casamento agora
            </button>
            <p className="text-sm text-gray-500 text-center">
              Por apenas <span className="font-bold text-pink-500">R$14,90</span> • Garantia total
            </p>
          </div>

          {/* Hero image placeholder */}
          <div className="relative max-w-4xl mx-auto px-2">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-inner">
                <div className="text-center p-4">
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-400 mx-auto mb-2 sm:mb-4" />
                  <p className="text-gray-600 text-sm sm:text-lg">Vídeo: Como a Larissa organizou seu casamento por menos de R$5 mil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};