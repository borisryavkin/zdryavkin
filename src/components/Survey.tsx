import React, { useState } from 'react';

interface SurveyData {
  age: string;
  gender: string;
  lifestyle: string[];
  healthGoals: string[];
  diet: string[];
  sleep: string;
  stress: string;
  activity: string;
}

interface Recommendation {
  title: string;
  description: string;
}

const Survey = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<SurveyData>({
    age: '',
    gender: '',
    lifestyle: [],
    healthGoals: [],
    diet: [],
    sleep: '',
    stress: '',
    activity: ''
  });

  const handleInputChange = (field: keyof SurveyData, value: string | string[]) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: keyof SurveyData, value: string) => {
    const currentValues = data[field] as string[];
    if (currentValues.includes(value)) {
      handleInputChange(field, currentValues.filter(v => v !== value));
    } else {
      handleInputChange(field, [...currentValues, value]);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-brand-green-900">Основная информация</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Возраст</label>
                <input
                  type="number"
                  value={data.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                  placeholder="Введите ваш возраст"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Пол</label>
                <select
                  value={data.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                >
                  <option value="">Выберите пол</option>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-brand-green-900">Образ жизни</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Уровень физической активности</label>
                <select
                  value={data.activity}
                  onChange={(e) => handleInputChange('activity', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                >
                  <option value="">Выберите уровень активности</option>
                  <option value="low">Малоподвижный</option>
                  <option value="medium">Умеренно активный</option>
                  <option value="high">Высоко активный</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Качество сна</label>
                <select
                  value={data.sleep}
                  onChange={(e) => handleInputChange('sleep', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent"
                >
                  <option value="">Выберите качество сна</option>
                  <option value="good">Хороший</option>
                  <option value="average">Средний</option>
                  <option value="poor">Плохой</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-brand-green-900">Цели и питание</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Цели здоровья (можно выбрать несколько)</label>
                <div className="space-y-2">
                  {['Энергия', 'Иммунитет', 'Красота', 'Стресс', 'Сон', 'Вес'].map((goal) => (
                    <label key={goal} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={data.healthGoals.includes(goal)}
                        onChange={() => handleMultiSelect('healthGoals', goal)}
                        className="rounded text-brand-green-600 focus:ring-brand-green-500"
                      />
                      <span>{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Особенности питания (можно выбрать несколько)</label>
                <div className="space-y-2">
                  {['Обычное', 'Вегетарианское', 'Веганское', 'Безглютеновое', 'Низкоуглеводное'].map((diet) => (
                    <label key={diet} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={data.diet.includes(diet)}
                        onChange={() => handleMultiSelect('diet', diet)}
                        className="rounded text-brand-green-600 focus:ring-brand-green-500"
                      />
                      <span>{diet}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-brand-green-900">Ваши рекомендации</h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-medium text-brand-green-800 mb-4">Персональные рекомендации</h4>
              <div className="space-y-4">
                {generateRecommendations(data)}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const generateRecommendations = (data: SurveyData) => {
    const recommendations: Recommendation[] = [];

    // Basic recommendations based on age and gender
    if (parseInt(data.age) > 40) {
      recommendations.push({
        title: 'Витамин D3',
        description: 'Поддерживает здоровье костей и иммунную систему'
      });
    }

    if (data.gender === 'female') {
      recommendations.push({
        title: 'Железо + Витамин C',
        description: 'Поддерживает уровень энергии и иммунитет'
      });
    }

    // Activity-based recommendations
    if (data.activity === 'high') {
      recommendations.push({
        title: 'Магний + B-комплекс',
        description: 'Поддерживает энергетический обмен и восстановление'
      });
    }

    // Sleep-based recommendations
    if (data.sleep === 'poor') {
      recommendations.push({
        title: 'Магний + Мелатонин',
        description: 'Поддерживает качество сна и расслабление'
      });
    }

    // Health goals based recommendations
    if (data.healthGoals.includes('Иммунитет')) {
      recommendations.push({
        title: 'Витамин C + Цинк',
        description: 'Укрепляет иммунную систему'
      });
    }

    if (data.healthGoals.includes('Стресс')) {
      recommendations.push({
        title: 'B-комплекс + Омега-3',
        description: 'Поддерживает нервную систему и снижает стресс'
      });
    }

    return recommendations.map((rec, index) => (
      <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
        <h5 className="font-medium text-brand-green-700">{rec.title}</h5>
        <p className="text-gray-600">{rec.description}</p>
      </div>
    ));
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-light text-brand-green-900">
            Персональный подбор <span className="font-medium">витаминов</span>
          </h2>
          <button
            onClick={() => setStep(step - 1)}
            className={`text-gray-500 hover:text-brand-green-600 ${step === 1 ? 'invisible' : ''}`}
          >
            ← Назад
          </button>
        </div>

        {renderStep()}

        <div className="mt-8 flex justify-between">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-3 h-3 rounded-full ${
                  s === step ? 'bg-brand-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => {
              if (step === 4) {
                window.location.href = '/sales';
              } else {
                setStep(step + 1);
              }
            }}
            className="px-6 py-2 bg-brand-green-600 text-white rounded-full hover:bg-brand-green-500 transition-colors"
            disabled={step === 4 && false}
          >
            {step === 4 ? 'Завершить' : 'Далее'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey; 