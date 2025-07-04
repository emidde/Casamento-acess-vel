import React from 'react';
import { CheckCircle, DollarSign, FileText, Heart, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Planejamento sem stress',
    description: 'Organize tudo em menos de 7 dias com nossos modelos prontos'
  },
  {
    icon: DollarSign,
    title: 'Economia real',
    description: 'Casamentos completos abaixo de R$7 mil sem perder qualidade'
  },
  {
    icon: FileText,
    title: 'Modelos e checklists prontos',
    description: 'Mais de 10 materiais editáveis e personalizáveis'
  },
  {
    icon: Heart,
    title: 'Estilo e organização',
    description: 'Tudo em um só lugar para facilitar seu planejamento'
  },
  {
    icon: Shield,
    title: 'Acesso instantâneo',
    description: 'Receba todos os materiais imediatamente após a compra'
  }
];

export const Benefits = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">
            Por que escolher nosso método?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Descubra como milhares de noivas já organizaram casamentos incríveis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Mais de 500 noivas já transformaram seus sonhos em realidade
            </h3>
            <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6">
              Junte-se a nossa comunidade e descubra como é possível ter o casamento dos seus sonhos sem se endividar
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-base sm:text-lg font-semibold">Compra 100% segura e garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};