import React, { useState } from 'react';
import { X, Gift, Star, CheckCircle } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, onAccept, onDecline }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4">
              Espere! Oferta Especial Só Para Você
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Leve também todos os bônus por só <span className="text-pink-600 font-bold">+R$5!</span>
            </p>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">
                Bônus Exclusivos Inclusos:
              </h3>
              
              <div className="space-y-2 sm:space-y-3 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Planilha de Lista de Convidados Inteligente</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Guia de Fornecedores Econômicos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Templates de Decoração DIY</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Cronograma do Dia do Casamento</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Acesso a atualizações futuras</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-500">Valor dos bônus:</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-400 line-through">R$147,00</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-pink-600">Hoje por apenas:</p>
                <p className="text-2xl sm:text-3xl font-bold text-pink-600">+R$5,00</p>
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                Pacote completo por apenas:
              </p>
              <div className="text-3xl sm:text-4xl font-bold text-purple-800">
                R$19,90
              </div>
              <p className="text-sm text-gray-500">
                Economia total: R$424,10
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={onAccept}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sim! Quero o pacote completo por R$19,90
              </button>
              
              <button
                onClick={onDecline}
                className="w-full bg-gray-200 text-gray-700 font-semibold py-2 sm:py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-gray-300"
              >
                Não, quero continuar com R$14,90 mesmo
              </button>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span>Oferta por tempo limitado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};