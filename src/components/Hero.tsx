import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-100 to-brand-yellow-100 opacity-70"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="md:w-3/5">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-green-900 mb-4">
            Оптимальные решения для вашего здоровья
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Персонализированные добавки на основе природных компонентов
          </p>
          <button className="px-8 py-3 bg-brand-green-600 text-white text-lg font-medium rounded-md hover:bg-brand-green-500 transition-colors transform hover:scale-105 duration-200">
            Начать
          </button>
        </div>
        
        {/* Decorative image */}
        <div className="hidden md:block absolute right-4 bottom-4 w-2/5">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Natural supplements" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 