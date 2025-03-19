'use client';
import React, { useState } from 'react';
import {
  FaPhone,
  // FaEnvelope,
  // FaInstagram,
  FaBriefcase,
  FaUser,
} from 'react-icons/fa';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Обробка змін в полях форми
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const templateReplyId =
      process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_KEY;

    if (!serviceId || !templateId || !userId || !templateReplyId) {
      setSuccessMessage('❌ Configuration error. Please contact support.');
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name, // Передаємо ім'я
          last_name: formData.lastName, // Додаємо прізвище, якщо потрібно
          email: formData.email, // Передаємо email користувача
          message: formData.message, // Передаємо повідомлення
        },
        userId,
      );

      // Авто-відповідь користувачу
      await emailjs.send(
        serviceId,
        templateReplyId!, // ❗️ Це окремий шаблон
        {
          name: formData.name,
          email: formData.email,
          reply_to: process.env.EMAIL_USER,
        },
        userId,
      );

      if (response.status === 200) {
        // setSuccessMessage("✅ Your message has been sent successfully!");
        setSuccessMessage('✅ Je bericht is succesvol verzonden!');
        setFormData({ name: '', lastName: '', email: '', message: '' });

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      // setSuccessMessage("❌ Error sending message. Please try again.");
      setSuccessMessage(
        '❌ Fout bij het verzenden van het bericht. Probeer het opnieuw.',
      );
    }
  };

  return (
    <footer id="contact" className="bg-emerald-50 py-10">
      <div className="mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Ліва частина - Форма */}
        <div>
          <div className="flex items-center space-x-4">
            <hr className="w-16 border-t-2 border-green-900" />
            <span className="text-md font-light text-green-900">NEEM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">
              CONTACT OP
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Uw Naam"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Uw Achternaam"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Uw E-mailadres"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Bericht"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-900 text-white py-3 rounded-lg text-lg hover:bg-green-800 transition"
            >
              VERZENDEN
            </button>
            {/* ✅ Повідомлення про статус надсилання */}
            {successMessage && (
              <div
                className={`mt-4 text-center text-lg font-semibold ${
                  successMessage.includes('✅')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {successMessage}
              </div>
            )}
          </form>
        </div>

        {/* Права частина - Контактна інформація */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-900">Bedrijf</h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex font-semibold items-center gap-2 group hover:underline hover:text-green-700 transition"
                >
                  Home
                  <span className="text-lg transition-transform duration-300 animate-bounce">
                    ↑
                  </span>
                </a>
              </li>

              {/* <li>
                                <a href="#" className="flex items-center gap-2 group hover:underline hover:text-green-700 transition">
                                    Projecten
                                    <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1">↑</span>
                                </a>
                            </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-900">Contact</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-green-900" />
                <span>+31 (06) 57-63-48-94</span>
              </li>
              {/* <li className="flex items-center space-x-2">
                                <FaEnvelope className="text-green-900" />
                                <a href="mailto:info@alexanderzhuhan.nl" className="hover:underline">
                                    alex.zhyhan@hotmail.com
                                </a>
                            </li>

                            <li className="flex items-center space-x-2">
                                <FaEnvelope className="text-green-900" />
                                <a href="mailto:info@alexanderzhuhan.nl" className="hover:underline">
                                    alexanderzhyhan@gmail.com
                                </a>
                            </li> */}

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaUser className="text-green-900" />
                  {/* <span className="font-semibold">Werk:</span> */}
                  <span className="text-gray-700">alex.zhyhan@hotmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaBriefcase className="text-green-900" />
                  {/* <span className="font-semibold">Persoonlijk:</span> */}
                  <span className="text-gray-700">
                    alexanderzhyhan@gmail.com
                  </span>
                </li>
              </ul>

              {/* <li className="flex items-center space-x-2">
                                <FaInstagram className="text-green-900" />
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    alexanderzhuhan.nl
                                </a>
                            </li> */}
              <li className="flex items-center space-x-2">
                <FaHouseChimneyWindow className="text-green-900" />
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Lange Hilleweg 69 C, 3073 BJ, Rotterdam
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижній блок */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 text-sm mt-12 px-6 lg:px-16">
        <div className="text-center md:text-left">
          <p>
            &copy; COPYRIGHT 2016-2025 | KVK 96675993 Website by{' '}
            <a href="https://" className="text-green-900 hover:underline">
              BL ICT Bedrijf
            </a>
          </p>
        </div>

        <div className="text-center md:text-right flex flex-col justify-start">
          <p className="font-semibold text-green-950 italic text-3xl md:text-5xl leading-tight">
            Aleksandr Klusbedrijf
          </p>
          <p className="font-semibold text-gray-700 italic text-xl md:text-3xl mt-[-4px]">
            Interieurrenovaties
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
