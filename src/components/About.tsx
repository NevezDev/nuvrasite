import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Target } from 'lucide-react';
import HolographicInterfaceNuvra from './HolographicInterfaceNuvra';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="sobre" ref={ref} className="py-24 bg-gradient-to-b from-[#0b0b0f] to-[#0f0f14] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7b3ff1] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00f6ff] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-[#7b3ff1] via-[#00f6ff] to-[#7b3ff1] bg-clip-text text-transparent">
              Sobre a Nuvra
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white font-['Orbitron']">
              Soluções criativas com foco em performance
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Somos uma empresa de soluções criativas com foco em performance e inovação. Da estratégia ao código, desenvolvemos soluções digitais sob medida.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Combinamos expertise em tecnologia, marketing digital e inteligência artificial para criar experiências que não apenas impressionam, mas geram resultados reais e mensuráveis.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="p-3 bg-gradient-to-r from-[#7b3ff1]/20 to-[#00f6ff]/20 rounded-lg border border-[#7b3ff1]/30">
                  <Target className="text-[#00f6ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Foco em Resultados</h4>
                  <p className="text-gray-400 text-sm">Métricas reais e crescimento mensurável</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="p-3 bg-gradient-to-r from-[#7b3ff1]/20 to-[#00f6ff]/20 rounded-lg border border-[#7b3ff1]/30">
                  <Zap className="text-[#00f6ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Inovação Constante</h4>
                  <p className="text-gray-400 text-sm">Sempre à frente das tendências</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <div className="p-3 bg-gradient-to-r from-[#7b3ff1]/20 to-[#00f6ff]/20 rounded-lg border border-[#7b3ff1]/30">
                  <Sparkles className="text-[#00f6ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Experiência Completa</h4>
                  <p className="text-gray-400 text-sm">Do planejamento à execução</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <HolographicInterfaceNuvra />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
