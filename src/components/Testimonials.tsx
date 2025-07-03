import React from 'react';
import { Star, MessageCircle, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Juliana S.',
    location: 'Recife - PE',
    text: 'Eu estava completamente perdida, achando que não conseguiria casar sem me endividar. Com esse pack, consegui organizar tudo em menos de 3 semanas. Foi a melhor compra da minha vida!',
    rating: 5
  },
  {
    name: 'Marcela e Tiago',
    location: 'São Paulo - SP',
    text: 'O guia das paletas salvou minha decoração, e o planner me ajudou até a negociar o buffet! Gastei R$6.480 no total e realizei meu sonho com tranquilidade.',
    rating: 5
  },
  {
    name: 'Nathália R.',
    location: 'Fortaleza - CE',
    text: 'Achei que por R$14,90 seria algo simples, mas me surpreendi com a qualidade. Obrigada de coração!',
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-3 sm:mb-4">
            O que outras noivas dizem sobre o método
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Depoimentos reais de quem já viveu essa experiência
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12 sm:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4 text-center">
                Veja como a Larissa conseguiu organizar o casamento dela com menos de R$5 mil
              </h3>
              <div className="aspect-video bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-pink-500 border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">Clique para assistir o depoimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mr-2 sm:mr-3" />
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <MapPin className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-3 sm:mb-4 text-sm sm:text-base">
                "{testimonial.text}"
              </blockquote>
              <p className="font-semibold text-purple-800 text-sm sm:text-base">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp Screenshots Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl">
          <h3 className="text-lg sm:text-2xl font-semibold text-purple-800 mb-4 sm:mb-6 text-center">
            Mensagens reais das nossas alunas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 sm:p-4 border-2 border-green-200">
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs sm:text-sm font-semibold text-green-700">WhatsApp</span>
                </div>
                <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 mb-2">
                    "Muito obrigada! Os materiais são incríveis e super completos. Já estou organizando tudo ❤️"
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Noiva {i}</span>
                    <span>✓✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};