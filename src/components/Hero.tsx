import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mascotImage from '../assets/ChatGPT_Image_24_de_ago._de_2025__23_48_53-removebg-preview.png';

const Hero = () => {
  const [dynamicText, setDynamicText] = useState('analisando dados...');

  const phrases = [
    'analisando dados...',
    'otimizando impacto...',
    'gerando novas possibilidades...',
    'criando o futuro...'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setDynamicText(phrases[index]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0f] pt-20">
      <div className="absolute inset-0 z-0">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-[#00f6ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#7b3ff1]/10 via-transparent to-[#00f6ff]/10 animate-gradient-shift" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.p
              key={dynamicText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[#00f6ff] text-xs md:text-base mb-4 md:mb-6 font-mono tracking-wider"
            >
              {dynamicText}
            </motion.p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-['Orbitron'] leading-tight">
              <span className="block bg-gradient-to-r from-white via-[#00f6ff] to-white bg-clip-text text-transparent">
                Transformamos
              </span>
              <span className="block bg-gradient-to-r from-white via-[#00f6ff] to-white bg-clip-text text-transparent">
                ideias em
              </span>
              <span className="block bg-gradient-to-r from-[#7b3ff1] via-[#00f6ff] to-[#7b3ff1] bg-clip-text text-transparent">
                experiências digitais
              </span>
              <span className="block bg-gradient-to-r from-white via-[#7b3ff1] to-white bg-clip-text text-transparent">
                que conectam
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-12 leading-relaxed px-2 sm:px-0"
            >
              A Nuvra combina tecnologia, marketing e inteligência artificial para criar o futuro da sua presença digital e gerar conexões reais de forma humanizada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-stretch sm:items-center px-2 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contato')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full font-semibold text-white overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Solicitar Proposta</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#portfolio')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#00f6ff] rounded-full font-semibold text-[#00f6ff] hover:bg-[#00f6ff]/10 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Conheça Nossos Projetos
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end relative order-first lg:order-last"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] blur-3xl opacity-40 animate-pulse" />

                <motion.img
                  src={mascotImage}
                  alt="Mascote Nuvra"
                  className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 border-2 border-[#00f6ff] rounded-full blur-sm"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
