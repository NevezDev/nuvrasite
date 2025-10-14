import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@nuvrasolutions.com.br',
      link: 'mailto:contato@nuvrasolutions.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(75) 9 3199-3242',
      link: 'tel:+5575931993242'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Feira de Santana, BA - Brasil',
      link: null
    }
  ];

  return (
    <footer className="bg-[#0f0f10] border-t border-[#7b3ff1]/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f6ff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Orbitron']">
            <span className="bg-gradient-to-r from-white via-[#00f6ff] to-white bg-clip-text text-transparent">
              Informações de contato
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#7b3ff1] to-[#00f6ff] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#7b3ff1]/50 group-hover:shadow-[#00f6ff]/50 transition-shadow duration-300"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-white font-semibold text-lg mb-2 font-['Orbitron']">
                  {item.title}
                </h3>

                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-[#00f6ff] transition-colors duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 pt-8 border-t border-gray-800"
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-[#7b3ff1] via-[#00f6ff] to-[#7b3ff1] bg-clip-text text-transparent font-['Orbitron'] mb-4 cursor-pointer inline-block"
          >
            NUVRA
          </motion.h3>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Transformando ideias em experiências digitais que conectam pessoas e negócios ao futuro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Nuvra Solutions. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacidade" className="text-gray-500 hover:text-[#00f6ff] transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-gray-500 hover:text-[#00f6ff] transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
