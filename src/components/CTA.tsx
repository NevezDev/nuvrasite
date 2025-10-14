import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [ctaText, setCtaText] = useState('Vamos criar algo juntos?');

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const rect = (element as HTMLElement).getBoundingClientRect();
        const isNearBottom = rect.top < window.innerHeight * 0.5;
        setCtaText(isNearBottom ? 'Hora de começar sua transformação digital.' : 'Vamos criar algo juntos?');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contato" ref={ref} className="py-32 bg-[#0b0b0f] relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#00f6ff] to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7b3ff1]/5 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            key={ctaText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-8 font-['Orbitron']"
          >
            <span className="bg-gradient-to-r from-white via-[#00f6ff] to-white bg-clip-text text-transparent">
              {ctaText}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto"
          >
            Estamos prontos para transformar suas ideias em realidade digital. Entre em contato e vamos construir o futuro juntos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full font-semibold text-white text-lg overflow-hidden flex items-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 blur-xl"
              />
              <span className="relative z-10 flex items-center">
                Fale com a Nuvra
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center items-center space-x-8"
          >
            <SocialLink
              href="https://www.instagram.com/nuvra.solutions"
              icon={Instagram}
              label="Veja nossos bastidores"
            />
            <SocialLink
              href="https://wa.me/5511999999999"
              icon={() => (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              )}
              label="Fale conosco"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="relative group block"
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full blur-xl opacity-0 group-hover:opacity-50"
        />
        <div className="relative p-4 bg-gradient-to-r from-[#7b3ff1]/20 to-[#00f6ff]/20 border border-[#7b3ff1]/30 rounded-full text-gray-400 group-hover:text-[#00f6ff] group-hover:border-[#00f6ff] transition-all duration-300">
          <Icon />
        </div>
      </motion.a>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#0b0b0f] border border-[#7b3ff1]/30 px-4 py-2 rounded-lg text-sm whitespace-nowrap text-gray-300"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

export default CTA;
