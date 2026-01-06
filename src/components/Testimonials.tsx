import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "После двух месяцев приема персонализированных добавок от доктора Здрявкина, я заметил значительное улучшение энергии и общего самочувствия.",
      author: "Алексей М.",
      position: "Предприниматель"
    },
    {
      text: "Индивидуальный подход доктора Здрявкина помог мне решить проблемы с пищеварением, которые беспокоили меня годами.",
      author: "Елена К.",
      position: "Тренер по йоге"
    },
    {
      text: "Я принимаю комплекс от доктора Здрявкина уже полгода, и мое здоровье заметно улучшилось. Рекомендую!",
      author: "Сергей Д.",
      position: "Менеджер"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-sans font-extrabold text-center text-brand-green-800 mb-12">
          Отзывы наших клиентов
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-brand-green-50 rounded-lg p-8 shadow-sm">
            <div className="text-xl font-sans font-normal text-gray-800 mb-6">
              "{testimonials[currentIndex].text}"
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-green-200 rounded-full flex items-center justify-center text-brand-green-800 font-bold text-lg font-sans">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="font-semibold font-sans text-brand-green-700 text-base">{testimonials[currentIndex].author}</div>
                <div className="text-sm font-sans text-gray-500">{testimonials[currentIndex].position}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center text-brand-green-700 hover:bg-brand-green-200 transition-colors"
            >
              &larr;
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center text-brand-green-700 hover:bg-brand-green-200 transition-colors"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 