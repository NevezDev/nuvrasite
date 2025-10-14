import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, TrendingUp, Palette, Bot } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web & Automação',
    description: 'Sites, apps e sistemas personalizados com as tecnologias mais modernas e automações que otimizam processos.',
    color: 'from-[#7b3ff1] to-[#9d5ff1]',
  },
  {
    icon: TrendingUp,
    title: 'Tráfego Pago & Marketing',
    description: 'Campanhas estratégicas em Google Ads, Meta Ads e outras plataformas para maximizar ROI e conversões.',
    color: 'from-[#00f6ff] to-[#00d4ff]',
  },
  {
    icon: Palette,
    title: 'Branding & Identidade Visual',
    description: 'Criação de marcas memoráveis com design único que comunica sua essência e valores.',
    color: 'from-[#7b3ff1] to-[#00f6ff]',
  },
  {
    icon: Bot,
    title: 'Integrações com IA & Chatbots',
    description: 'Assistentes virtuais inteligentes e automações com IA para melhorar atendimento e eficiência.',
    color: 'from-[#00f6ff] to-[#7b3ff1]',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servicos" ref={ref} className="py-24 bg-[#0b0b0f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b3ff1] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00f6ff] rounded-full blur-[150px]" />
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
              Nossos Serviços
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(135deg, ${service.color === 'from-[#7b3ff1] to-[#9d5ff1]' ? '#7b3ff1' : service.color === 'from-[#00f6ff] to-[#00d4ff]' ? '#00f6ff' : '#7b3ff1'}, ${service.color === 'from-[#7b3ff1] to-[#9d5ff1]' ? '#9d5ff1' : service.color === 'from-[#00f6ff] to-[#00d4ff]' ? '#00d4ff' : '#00f6ff'})`
                }}
              />

              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-[#7b3ff1]/20 rounded-2xl p-6 group-hover:border-[#00f6ff]/50 transition-all duration-500">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color}`}
                  >
                    <service.icon className="text-white" size={28} />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white font-['Orbitron'] group-hover:text-[#00f6ff] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-[#00f6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
