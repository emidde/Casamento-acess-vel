import React from 'react';
import { Heart, CheckCircle, Star } from 'lucide-react';

export const FinalCopy = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-4 sm:mb-6">
            Planeje o Casamento dos Seus Sonhos — Sem Estresse, Sem Dívidas e Com Tudo Que Você Precisa em Um Só Lugar
          </h2>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl text-left">
            <div className="flex items-center mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-800">
                Sua história de amor merece o melhor começo
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Você sabia que é possível organizar um casamento completo com elegância, 
                praticidade e economia — mesmo com um orçamento apertado?
              </p>
              
              <p>
                Se você sonha com esse momento especial, mas se sente perdida com tanta 
                coisa para resolver, <strong className="text-pink-600">esse pack foi feito para você.</strong>
              </p>
              
              <p>
                Aqui você encontra os <strong>materiais certos, no momento certo</strong>, 
                para te ajudar a planejar cada detalhe com leveza, estilo e segurança. 💖
              </p>
            </div>
          </div>
        </div>

        {/* Oferta Especial */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 mr-2 fill-current" />
            <h3 className="text-2xl sm:text-3xl font-bold">Oferta Exclusiva</h3>
          </div>
          
          <p className="text-lg sm:text-xl mb-4 sm:mb-6">
            Você pode garantir <strong>todo esse conteúdo agora por apenas</strong>
          </p>
          
          <div className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6">
            R$14,90
          </div>
          
          <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8">
            ➡️ Clique no botão abaixo e comece a planejar seu casamento hoje mesmo!
          </p>
          
          <button className="w-full sm:w-auto bg-white text-purple-800 font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <a href="https://pay.kiwify.com.br/aXfbpKn">Quero meu planejamento por R$14,90</a>
          </button>
          
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>Garantia total</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>Suporte incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};