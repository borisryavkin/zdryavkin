import React from 'react';

interface HeroProps {
  onStartSurvey: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartSurvey }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-50 to-white"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light text-brand-green-900 leading-tight">
              Оптимальные решения для{' '}
              <span className="font-medium">здоровья</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Персонализированные добавки на основе природных компонентов, рекомендованны ведущими медицинскими специалистами!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStartSurvey}
                className="px-8 py-4 bg-brand-green-600 text-white text-lg font-medium rounded-full hover:bg-brand-green-500 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-xl"
              >
                Пройти опрос
              </button>
            </div>
          </div>
          
          {/* Decorative image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-green-100 rounded-[2rem] transform rotate-3"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Natural supplements" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 