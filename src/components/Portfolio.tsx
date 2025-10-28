import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    id: 2,
    title: 'Campanha SaaS B2B',
    category: 'Tráfego Pago',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Estratégia completa de tráfego pago com foco em geração de leads qualificados para software B2B.',
    stack: ['Google Ads', 'LinkedIn Ads', 'Analytics', 'CRM'],
    results: 'ROI de 520% e redução de 40% no CAC',
  },
  {
    id: 3,
    title: 'Brand Identity Startup',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Desenvolvimento completo de identidade visual para startup de tecnologia, do conceito à aplicação.',
    stack: ['Figma', 'Illustrator', 'Brand Guidelines', 'Motion Design'],
    results: 'Reconhecimento de marca aumentado em 95%',
  },
  {
    id: 4,
    title: 'Chatbot Inteligente',
    category: 'IA & Automação',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Assistente virtual com IA para atendimento ao cliente 24/7 com processamento de linguagem natural.',
    stack: ['Python', 'OpenAI API', 'NLP', 'WebSocket'],
    results: 'Redução de 65% no tempo de resposta',
  },
  {
    id: 6,
    title: 'Dashboard Analytics',
    category: 'Data Visualization',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sistema de visualização de dados em tempo real com insights automáticos e relatórios personalizados.',
    stack: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    results: 'Decisões 3x mais rápidas com dados em tempo real',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-gradient-to-b from-[#0f0f14] to-[#0b0b0f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#7b3ff1] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#00f6ff] rounded-full blur-[150px]" />
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
              Nosso Portfólio
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projetos que transformaram negócios e geraram resultados reais
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden border border-[#7b3ff1]/20 group-hover:border-[#00f6ff]/50 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-[#00f6ff] text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron'] group-hover:text-[#00f6ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

                  <div className="mt-4 flex items-center text-[#00f6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Ver detalhes</span>
                    <ExternalLink className="ml-2" size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-[#7b3ff1]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-[#0b0b0f]/80 backdrop-blur-sm rounded-full hover:bg-[#0b0b0f] transition-colors"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>

              <div className="p-8">
                <span className="text-[#00f6ff] text-sm font-semibold">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-4 font-['Orbitron']">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Stack Utilizada</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-[#7b3ff1]/20 to-[#00f6ff]/20 border border-[#7b3ff1]/30 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#7b3ff1]/10 to-[#00f6ff]/10 border border-[#7b3ff1]/30 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-2">Resultados Obtidos</h4>
                  <p className="text-[#00f6ff] text-lg font-semibold">{selectedProject.results}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
