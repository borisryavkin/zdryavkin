import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-brand-green-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Zdryavkin" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-2xl md:text-4xl font-serif text-brand-green-800 mb-6">
              О докторе Здрявкине
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Доктор Здрявкин – практикующий врач с более чем 15-летним опытом в области натуральной медицины и нутрициологии. Специализируется на персонализированном подходе к здоровью человека с помощью натуральных добавок.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Получив образование в лучших медицинских учреждениях Европы, доктор Здрявкин разработал уникальный подход к созданию пищевых добавок, который учитывает индивидуальные особенности каждого пациента.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Философия доктора Здрявкина основана на гармоничном сочетании достижений современной медицины и традиционных природных методов оздоровления.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 