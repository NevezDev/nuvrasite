import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Cpu,
  Sparkles,
  TrendingUp,
  Users,
  Heart,
  BarChart3,
} from 'lucide-react';

const WhyNuvra = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const differentials = [
    {
      icon: Brain,
      title: 'Integração Total com IA',
      description:
        'Unimos automação e personalização humana. Nossos sistemas entendem o comportamento do público e ajustam comunicações em tempo real.',
    },
    {
      icon: Cpu,
      title: 'Tecnologia Proprietária',
      description:
        'Com o NuvraHub, centralizamos automações, atendimento e performance em um só lugar — rápido, inteligente e escalável.',
    },
    {
      icon: Sparkles,
      title: 'Design Inteligente & Imersivo',
      description:
        'Cada detalhe é planejado para emocionar e converter, desde projetos simples a complexos e animados, temos uma estética que une futuro e elegância.',
    },
    {
      icon: TrendingUp,
      title: 'Visão Estratégica de Negócio',
      description:
        'Não entregamos apenas um site, entregamos estratégias que posicionam sua marca e fortalecem sua presença digital.',
    },
    {
      icon: Users,
      title: 'Setor Criativo Completo',
      description:
        'Temos um setor de marketing completo, com garota-propaganda, filmmaker/fotógrafo, designer, social media e profissionais de branding. Unimos tecnologia, estratégia e emoção em cada projeto.',
    },
    {
      icon: Heart,
      title: 'Humanização no Digital',
      description:
        'Diferente de outras empresas que oferecem soluções e automações engessadas e secas, nosso sistema mantém o toque humano, focado em ampliar relacionamentos e empatia.',
    },
    {
      icon: BarChart3,
      title: 'Transparência & Performance',
      description:
        'Métricas claras, entregas no prazo e dashboards inteligentes para acompanhar cada resultado em tempo real.',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-[#0b0b0f] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,246,255,0.08)_0%,transparent_70%)]" />

      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-white via-[#00f6ff] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,246,255,0.3)]">
              Por que escolher a Nuvra
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4"
          >
            As marcas do futuro escolhem a Nuvra porque aqui, tecnologia e
            criatividade caminham juntas. Criamos soluções que unem propósito,
            inovação e impacto real.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="group relative bg-gradient-to-br from-[#0f0f14] to-[#1a1a24] p-6 md:p-8 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7b3ff1]/5 to-[#00f6ff]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#7b3ff1]/20 to-[#00f6ff]/20 rounded-xl border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300">
                    <item.icon
                      className="text-[#00f6ff] group-hover:scale-110 transition-transform duration-300"
                      size={32}
                    />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white font-['Orbitron'] group-hover:text-[#00f6ff] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] blur-xl opacity-20 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Na Nuvra, o digital ganha alma. Criamos soluções que unem
            tecnologia, propósito e pessoas.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contato')}
            className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full font-semibold text-white text-sm sm:text-base md:text-lg overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow duration-300"
          >
            <span className="relative z-10">
              Quero entender como a Nuvra pode transformar meu negócio
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff] to-[#7b3ff1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNuvra;
