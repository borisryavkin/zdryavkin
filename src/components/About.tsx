import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-green-100 rounded-[2rem] transform -rotate-3"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/dr-zdryavkin.jpg" 
                alt="Dr. Zdryavkin" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light text-brand-green-900">
              О докторе <span className="font-medium">Рявкине</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
              Президент медицинской корпорации «ДЭНАС МС», предприятия по производству и распространению ИЧМС-аппаратов безмедикаментозного лечения, получивших название «ДЭНАС». В 1999 году с отличием закончил Уральскую Государственную медицинскую Академию по специальности врач-невропатолог.

В 2006 году издание Forbes отмечало, что у владельцев компании, братьев Александра и Сергея Рявкиных, «достаточно средств для финансирования собственных разработок и создания новых моделей», широкое распространение которых среди населения осуществлялось через сеть независимых агентов по принципу сетевого маркетинга.              </p>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 