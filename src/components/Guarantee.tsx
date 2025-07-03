import React from 'react';
import { Shield, MessageCircle, Clock, Users, FileCheck, Lock } from 'lucide-react';

const guaranteeItems = [
  {
    icon: Lock,
    title: 'Entrega imediata',
    description: 'Receba todos os materiais no seu email em até 5 minutos'
  },
  {
    icon: MessageCircle,
    title: 'Suporte via WhatsApp',
    description: 'Tire suas dúvidas diretamente com nossa equipe'
  },
  {
    icon: Clock,
    title: 'Acesso vitalício',
    description: 'Baixe quantas vezes quiser, para sempre'
  },
  {
    icon: Users,
    title: 'Mais de 5.000 alunas satisfeitas',
    description: 'Junte-se a nossa comunidade de noivas realizadas'
  },
  {
    icon: FileCheck,
    title: 'Compra segura',
    description: '100% de satisfação garantida ou seu dinheiro de volta'
  },
  {
    icon: Shield,
    title: 'Garantia total',
    description: 'Proteção completa em sua compra'
  }
];

export const Guarantee = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">
            Sua compra está 100% protegida
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Confiança e segurança em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {guaranteeItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Garantia de Satisfação de 30 Dias
            </h3>
            <p className="text-base sm:text-lg opacity-90">
              Se por qualquer motivo você não ficar satisfeita com os materiais, 
              devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};