import React from 'react';
import { FaUserMd, FaLeaf, FaBox } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaUserMd className="w-12 h-12 text-brand-green-600" />,
      title: 'Индивидуальный подбор',
      description: 'Наши специалисты анализируют ваши индивидуальные потребности и создают уникальные формулы для вашего здоровья.'
    },
    {
      icon: <FaLeaf className="w-12 h-12 text-brand-green-600" />,
      title: 'Натуральные ингредиенты',
      description: 'Мы используем только проверенные и качественные природные компоненты для производства наших добавок.'
    },
    {
      icon: <FaBox className="w-12 h-12 text-brand-green-600" />,
      title: 'Доставка по подписке',
      description: 'Регулярная доставка обеспечивает непрерывный прием необходимых добавок без дополнительных хлопот.'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-serif text-center text-brand-green-800 mb-12">
          Наши преимущества
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium text-brand-green-700 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 