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
              О докторе <span className="font-medium">Здрявкине</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Доктор Здрявкин – практикующий врач с более чем 15-летним опытом в области натуральной медицины и нутрициологии. Специализируется на персонализированном подходе к здоровью человека с помощью натуральных добавок.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Получив образование в лучших медицинских учреждениях Европы, доктор Здрявкин разработал уникальный подход к созданию пищевых добавок, который учитывает индивидуальные особенности каждого пациента.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Философия доктора Здрявкина основана на гармоничном сочетании достижений современной медицины и традиционных природных методов оздоровления.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 