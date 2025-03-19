'use client';
import Slider from '@/components/Swiper/Swiper';
import React, { useState } from 'react';
import {
  FaDraftingCompass,
  FaTools,
  FaBath,
  FaTimes,
  FaPlus,
} from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const services = [
  {
    icon: <FaDraftingCompass size={40} />,
    title: 'BOUWTEKENINGEN',
    description:
      'Het opstellen van gedetailleerde bouwplannen met bekwame architecten en management. Of ze nu aan uw aannemer worden overhandigd of door ons worden beheerd, wij behandelen cruciale details voor optimale oplossingen.',
  },
  {
    icon: <FaTools size={40} />,
    title: 'BOUWVERGUNNINGEN',
    description:
      'Denkt u aan een uitbreiding van uw huis? Wij leveren uitgebreide plannen aan de gemeente en beheren het proces totdat uw aannemer met de nieuwe vergunning kan bouwen. Ons team staat klaar om uw visie tot leven te brengen.',
  },
  {
    icon: <FaBath size={40} />,
    title: 'TOTALE RENOVATIE',
    description:
      'Kies voor onze complete renovatiediensten. Als projectmanagers voor ons bouwteam handelen wij on-site communicatie, kwaliteitscontroles en prijsafstemming af, waardoor de noodzaak voor een afzonderlijke aannemer vervalt. Waarom ergens anders inhuren als wij het afgedekt hebben?',
  },
];

const accordionItems = [
  {
    title: 'Moeiteloos Projectbeheer',
    description:
      'Wij vereenvoudigen uw leven met uitgebreide diensten en bieden een alles-in-één oplossing voor al uw behoeften.',
    icon: '📑',
  },
  {
    title: 'Eenvoudige Klantbetrokkenheid',
    description:
      'Wij beheren communicatie efficiënt en houden klanten op de hoogte van eventuele veranderingen of complicaties gedurende het proces.',
    icon: '👍',
  },
  {
    title: 'Eerlijke Prijzen en Kwaliteitsborging',
    description:
      ' Onze toewijding ligt in transparante en eerlijke prijsstelling, zodat klanten waarde krijgen door duidelijk inzicht in de kosten.',
    icon: '📊',
  },
  {
    title: 'Wereldwijde Toegankelijkheid en Gemak',
    description:
      'Als internationaal bedrijf zijn we gespecialiseerd in het assisteren van expats bij hun renovaties, waarbij we duidelijkheid bieden over kosten en regelgeving, zelfs wanneer ze in het buitenland zijn.',
    icon: '🌍',
  },
];

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // // 🔹 Функція для плавного скролу
  // const handleScroll = (targetId: string) => {
  //     const targetElement = document.getElementById(targetId);
  //     if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: "smooth" });
  //     }
  // };

  return (
    <>
      <section className="py-16 bg-white px-4 md:px-12 lg:px-16">
        <div
          id="interier"
          className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4"
        >
          <hr className="w-16 border-t-2 border-green-950" />
          <span className="text-sm font-light tracking-wide text-green-900">
            ONZE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950">
            Projectbeheer
          </h2>
        </div>
        <p className="mt-4 text-lg text-gray-900 text-center md:text-left">
          Wij regelen alles van begin tot eind
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-green-900"
            >
              <div className="flex justify-center mb-4 text-green-900">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Проекти */}
        <div
          id="projects"
          className="p-6 md:p-14 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-10"
        >
          <div className="lg:w-1/2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4">
              <hr className="w-16 border-t-2 border-green-950" />
              <span className="text-sm font-light tracking-wide text-green-900">
                ONZE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-950">
                PROJECTEN
              </h2>
            </div>
            <p className="text-gray-900 mt-4 leading-relaxed">
              Met een passie voor tijdloos design en een praktische benadering
              van projectmanagement...
            </p>
            <p className="text-gray-900 mt-4 leading-relaxed">
              Bij Alexander Zhuhan bieden we meer dan alleen mooie interieurs.
              We creëren ruimtes waar je van zult houden en die je jarenlang
              zult koesteren, terwijl we zorgen voor een zo soepel en
              kwalitatief hoogstaand mogelijk proces van begin tot eind. Klaar
              om jouw ruimte te transformeren? Laten we jouw visie tot leven
              brengen.
            </p>
          </div>

          {/* Слайдер */}
          <div className="lg:w-1/2 w-full">
            <Slider id="flip" />
          </div>
        </div>

        {/* Акордеон Diensten */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4">
              <hr className="w-16 border-t-2 border-green-950" />
              <span className="text-sm font-light tracking-wide text-green-900">
                ONZE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-950">
                DIENSTEN
              </h2>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Transformeer uw huis met onze deskundige renovatieoplossingen...
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-900 text-white text-lg">
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold text-green-900">
                      {item.title}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <FaTimes className="text-green-900" />
                  ) : (
                    <FaPlus className="text-green-900" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секція */}
      <div className="bg-white mb-12 px-4">
        <div className="relative w-full max-w-4xl mx-auto mt-10 h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/img/img3.jpg"
            alt="Renovation Call-to-Action"
            layout="fill"
            objectFit="cover"
            className="rounded-lg brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
              NEEM CONTACT MET ONS OP VOOR UW RENOVATIE.
            </h2>
            <p className="text-white text-lg mt-4 max-w-2xl drop-shadow-md">
              Ontwerp uw ruimte en ontvang binnen enkele minuten een schatting.
            </p>

            {/* Анімована стрілка */}
            <motion.div
              className="mt-6"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
            >
              <FaArrowDown className="text-white text-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
