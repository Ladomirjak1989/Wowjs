'use client';
import React from 'react';
import Link from 'next/link';
import useWow from '../hooks/useWow'; // ✅ Використовуємо хук
import 'animate.css';

const Banner = () => {
  useWow(); // Викликаємо кастомний хук
  return (
    <section
      className=" brightness-75 relative w-full h-[900px] md:h-[600px] flex items-center justify-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/img/imgbanner1.jpg')" }}
    >
      <div className="relative z-10 text-white px-4 sm:px-6 md:px-12 max-w-2xl mx-auto text-center sm:text-left">
        <h1 className="wow animate__animated animate__fadeInDown text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          END TO END RENOVATIEBEHEER
        </h1>
        <p className="wow animate__animated animate__fadeInDown mt-4 text-lg sm:text-xl font-light">
          Bij Alexander Zhyhan begrijpen we dat een renovatieproject een
          omvangrijke taak is.
        </p>

        <Link
          href="#contact"
          className="wow animate__animated animate__fadeInDown mt-6 border-4 px-8 sm:px-16 md:px-24 py-2 border-white text-white rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2 text-lg font-medium w-full sm:w-auto"
        >
          NEEM CONTACT OP
          <span className="custom-bounce inline-block transition-all duration-300">
            ↓
          </span>
        </Link>
      </div>

      {/* Інформаційний блок */}
      <div className="relative h-full w-full">
        <div className="wow animate__animated animate__fadeInDown absolute z-50 right-0 bottom-[-40px] bg-green-950 text-white p-6 md:p-8 text-sm md:text-base max-w-3xl ml-6 md:ml-12">
          <p>
            Daarom bieden wij een end-to-end renovatie-ervaring, waarbij we elke
            stap van het proces beheren, van ontwerp tot constructie en
            projectmanagement. Wij nemen alle zorgen uit handen, zodat u zich
            kunt concentreren op het eindresultaat.
          </p>
          <p className="mt-2 font-bold">Bel +31 (06) 57-63-48-94</p>
          <hr className="mt-2 w-64 border-green-700" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
