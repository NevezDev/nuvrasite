import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00f6ff] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para página inicial
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-['Orbitron']">
            <span className="bg-gradient-to-r from-[#7b3ff1] via-[#00f6ff] to-[#7b3ff1] bg-clip-text text-transparent">
              Política de Privacidade
            </span>
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p className="text-sm text-gray-400 mb-6">
                Última atualização: 13 de outubro de 2025
              </p>
              <p>
                A Nuvra Solutions está comprometida em proteger a privacidade e segurança das informações pessoais de nossos clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                1. Informações que Coletamos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    1.1 Informações Fornecidas por Você
                  </h3>
                  <p>
                    Coletamos informações que você nos fornece diretamente, incluindo:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Informações da empresa</li>
                    <li>Mensagens e comunicações enviadas através de nossos formulários de contato</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    1.2 Informações Coletadas Automaticamente
                  </h3>
                  <p>
                    Quando você visita nosso site, podemos coletar automaticamente:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador e dispositivo</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Dados de cookies e tecnologias semelhantes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                2. Como Usamos Suas Informações
              </h2>
              <p className="mb-2">Utilizamos suas informações para:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Responder a suas solicitações e perguntas</li>
                <li>Enviar comunicações relacionadas aos nossos serviços</li>
                <li>Personalizar sua experiência em nosso site</li>
                <li>Analisar o uso do site e melhorar funcionalidades</li>
                <li>Detectar, prevenir e resolver problemas técnicos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                3. Compartilhamento de Informações
              </h2>
              <p className="mb-2">
                Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Com seu consentimento explícito</li>
                <li>Com prestadores de serviços que nos auxiliam em operações comerciais</li>
                <li>Para cumprir obrigações legais ou responder a solicitações governamentais</li>
                <li>Para proteger nossos direitos, propriedade ou segurança</li>
                <li>Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                4. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento regular de segurança</li>
                <li>Treinamento de funcionários sobre práticas de privacidade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                5. Seus Direitos
              </h2>
              <p className="mb-2">Você tem o direito de:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Acessar suas informações pessoais que mantemos</li>
                <li>Corrigir informações imprecisas ou incompletas</li>
                <li>Solicitar a exclusão de suas informações pessoais</li>
                <li>Opor-se ao processamento de suas informações</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
              <p className="mt-4">
                Para exercer esses direitos, entre em contato conosco através de contato@nuvrasolutions.com.br
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                6. Cookies e Tecnologias Semelhantes
              </h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador. No entanto, desabilitar cookies pode afetar a funcionalidade do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                7. Retenção de Dados
              </h2>
              <p>
                Retemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                8. Transferências Internacionais
              </h2>
              <p>
                Suas informações podem ser transferidas e mantidas em servidores localizados fora do seu país de residência. Tomamos medidas para garantir que suas informações recebam um nível adequado de proteção onde quer que sejam processadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                9. Menores de Idade
              </h2>
              <p>
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores. Se tomarmos conhecimento de que coletamos informações de um menor, tomaremos medidas para excluir essas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                10. Alterações a Esta Política
              </h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas publicando a nova política em nosso site e atualizando a data da "Última atualização". Recomendamos que você revise esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                11. Contato
              </h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre nossas práticas de privacidade, entre em contato conosco:
              </p>
              <div className="mt-4 space-y-2 ml-4">
                <p>
                  <strong className="text-white">E-mail:</strong> contato@nuvrasolutions.com.br
                </p>
                <p>
                  <strong className="text-white">Telefone:</strong> (75) 9 9977-9590
                </p>
                <p>
                  <strong className="text-white">Endereço:</strong> Feira de Santana, BA - Brasil
                </p>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-8 mt-12">
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                Conformidade com a LGPD
              </h2>
              <p>
                Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Estamos comprometidos em proteger seus direitos de privacidade e garantir a transparência no tratamento de dados pessoais.
              </p>
            </section>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para página inicial
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
