import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="/" className="font-handwritten text-2xl md:text-3xl text-brand-green-800 hover:text-brand-green-600 transition-colors">
              Dr. Zdryavkin
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#benefits" className="text-gray-700 hover:text-brand-green-600 transition-colors">Преимущества</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-brand-green-600 transition-colors">О нас</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-brand-green-600 transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-brand-green-600 transition-colors">Контакты</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 