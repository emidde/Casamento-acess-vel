import React from 'react';
import { Book, Palette, FileText, Receipt, BarChart3, Mail, Gift, Calendar, BookOpen } from 'lucide-react';

const products = [
  {
    icon: Book,
    title: 'Casamento Civil — Todos os detalhes',
    description: 'Cumpra todos os requisitos legais sem surpresas nem filas.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Palette,
    title: 'Guia de Paletas para o Casamento',
    description: 'Descubra as combinações perfeitas de cores para sua cerimônia.',
    color: 'from-pink-500 to-pink-600'
  },

  {
    icon: BarChart3,
    title: 'Planilha de Organização de Custos',
    description: 'Evite surpresas: saiba quanto vai gastar em cada etapa do casamento.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Gift,
    title: 'Guia de Enxoval com Lista',
    description: 'Leve apenas o que importa para sua nova fase: sem desperdício.',
    color: 'from-rose-500 to-rose-600'
  },
  {
    icon: Calendar,
    title: 'Guia dos Meses para Casar',
    description: 'Veja os prós e contras de cada mês para casar com sabedoria.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: BookOpen,
    title: 'O Método do Casamento Acessível',
    description: 'O passo a passo para realizar seu casamento gastando pouco — sem perder qualidade.',
    color: 'from-orange-500 to-orange-600'
  }
];

export const ProductGallery = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Mais de 10 materiais essenciais para planejar seu casamento com economia e organização
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Cover Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <product.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Todos esses materiais por apenas R$14,90
            </h3>
            <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6">
              <s>Valor total dos materiais: R$97,00</s> • <b>Promoção válida por tempo limitado</b>
            </p>
            <button className="w-full sm:w-auto bg-white text-purple-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <a href="https://pay.kiwify.com.br/aXfbpKn">Quero todos os materiais agora</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};