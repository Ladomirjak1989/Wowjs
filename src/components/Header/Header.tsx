'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const navbarConfig = [
  { link: '/', text: 'Home' },
  { link: '#interier', text: 'Interieur Ontwerp' },
  { link: '#projects', text: 'Projecten' },
  { link: '#contact', text: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 Функція для плавного скролу
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full top-0 left-0 shadow-md z-50 bg-emerald-50 ">
      <div className="flex justify-between items-center p-4 lg:px-16">
        {/* Логотип */}
        <div className="text-2xl font-serif font-bold text-gray-900">
          <span className="text-green-900">Aleksandr Klusbedrijf</span>
          <p className="text-sm text-gray-600 tracking-widest">
            Interieurrenovaties
          </p>
        </div>

        {/* Меню для великих екранів */}
        <nav className="hidden md:flex space-x-6 text-gray-900 font-medium">
          {navbarConfig.map((item) =>
            item.link.startsWith('#') ? (
              <a
                key={item.link}
                href={item.link}
                onClick={(e) => handleScroll(e, item.link.substring(1))}
                className="cursor-pointer relative group transition"
              >
                {item.text}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={item.link}
                href={item.link}
                className="cursor-pointer relative group transition"
              >
                {item.text}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all group-hover:w-full"></span>
              </Link>
            ),
          )}
        </nav>

        {/* Кнопка меню для мобільних */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 text-2xl p-2 rounded-md border border-gray-300 hover:bg-gray-200 transition"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Затемнення фону при відкритті мобільного меню */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 md:hidden transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Мобільне меню */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 max-w-[280px] bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 p-6`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-900 text-3xl absolute top-5 right-5"
        >
          <FiX />
        </button>

        <ul className="flex flex-col space-y-6 mt-12 text-lg font-semibold text-gray-900">
          {navbarConfig.map((item) => (
            <li key={item.link} className="border-b border-gray-300 pb-2">
              {item.link.startsWith('#') ? (
                <a
                  href={item.link}
                  onClick={(e) => handleScroll(e, item.link.substring(1))}
                  className="block hover:text-green-900 transition"
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  href={item.link}
                  className="block hover:text-green-900 transition"
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
