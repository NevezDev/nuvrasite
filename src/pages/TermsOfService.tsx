import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
              Termos de Uso
            </span>
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p className="text-sm text-gray-400 mb-6">
                Última atualização: 13 de outubro de 2025
              </p>
              <p>
                Bem-vindo à Nuvra Solutions. Ao acessar e usar nosso site e serviços, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Por favor, leia estes termos cuidadosamente antes de usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar ou usar o site da Nuvra Solutions, você concorda em estar vinculado a estes Termos de Uso e à nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                2. Descrição dos Serviços
              </h2>
              <p className="mb-2">
                A Nuvra Solutions oferece serviços de desenvolvimento de software, incluindo mas não se limitando a:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Desenvolvimento de websites e aplicações web</li>
                <li>Desenvolvimento de aplicações mobile</li>
                <li>Soluções de inteligência artificial e automação</li>
                <li>Consultoria em tecnologia e transformação digital</li>
                <li>Manutenção e suporte técnico</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                3. Uso Aceitável
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    3.1 Você Concorda em:
                  </h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Usar nossos serviços apenas para fins legais e legítimos</li>
                    <li>Fornecer informações precisas e atualizadas</li>
                    <li>Manter a confidencialidade de suas credenciais de acesso</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                    <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    3.2 Você Não Pode:
                  </h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Usar nossos serviços para atividades ilegais ou fraudulentas</li>
                    <li>Tentar obter acesso não autorizado aos nossos sistemas</li>
                    <li>Interferir no funcionamento adequado dos serviços</li>
                    <li>Transmitir vírus, malware ou código malicioso</li>
                    <li>Violar direitos de terceiros ou infringir propriedade intelectual</li>
                    <li>Fazer engenharia reversa de nossos produtos ou serviços</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                4. Propriedade Intelectual
              </h2>
              <p>
                Todos os direitos de propriedade intelectual relacionados aos nossos serviços, incluindo mas não limitado a código-fonte, design, marcas registradas, logotipos e conteúdo, são de propriedade exclusiva da Nuvra Solutions ou de nossos licenciadores. Você não adquire nenhum direito de propriedade ao usar nossos serviços.
              </p>
              <p className="mt-4">
                Para projetos personalizados desenvolvidos especificamente para clientes, os direitos de propriedade intelectual serão definidos em contrato específico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                5. Acordos de Serviço
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    5.1 Propostas e Contratos
                  </h3>
                  <p>
                    Todos os projetos de desenvolvimento são formalizados através de propostas comerciais detalhadas e contratos específicos que definem escopo, prazos, valores e responsabilidades.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    5.2 Pagamentos
                  </h3>
                  <p>
                    Os termos de pagamento são estabelecidos em cada contrato específico. Geralmente incluem:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Pagamento inicial para início do projeto</li>
                    <li>Pagamentos parciais conforme marcos do projeto</li>
                    <li>Pagamento final após conclusão e aprovação</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00f6ff]">
                    5.3 Prazos e Entregas
                  </h3>
                  <p>
                    Comprometemo-nos a cumprir os prazos acordados. Atrasos causados por fatores fora de nosso controle ou por alterações de escopo solicitadas pelo cliente podem resultar em ajustes de cronograma.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                6. Garantias e Suporte
              </h2>
              <p className="mb-4">
                Fornecemos garantia de funcionamento e suporte técnico conforme especificado em cada contrato de serviço:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Período de garantia para correção de bugs e defeitos</li>
                <li>Suporte técnico durante e após a implementação</li>
                <li>Manutenção preventiva quando contratada</li>
                <li>Atualizações de segurança críticas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                7. Limitação de Responsabilidade
              </h2>
              <p className="mb-4">
                Na extensão máxima permitida por lei:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Nossos serviços são fornecidos "como estão" e "conforme disponíveis"</li>
                <li>Não garantimos que os serviços serão ininterruptos ou livres de erros</li>
                <li>Não nos responsabilizamos por danos indiretos, incidentais ou consequenciais</li>
                <li>Nossa responsabilidade total é limitada ao valor pago pelo serviço específico</li>
                <li>Não nos responsabilizamos por perdas causadas por fatores fora de nosso controle</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                8. Confidencialidade
              </h2>
              <p>
                Comprometemo-nos a manter a confidencialidade de todas as informações sensíveis compartilhadas durante nosso relacionamento comercial. Acordos de Confidencialidade (NDAs) específicos podem ser estabelecidos quando necessário.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                9. Rescisão
              </h2>
              <div className="space-y-4">
                <p>
                  Qualquer uma das partes pode rescindir os serviços mediante notificação por escrito, sujeito aos termos do contrato específico:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Rescisão imediata em caso de violação material dos termos</li>
                  <li>Rescisão mediante aviso prévio para serviços contínuos</li>
                  <li>Pagamento proporcional pelos serviços prestados até a data de rescisão</li>
                  <li>Devolução de materiais e informações confidenciais</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                10. Alterações nos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. Seu uso contínuo dos serviços após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                11. Indenização
              </h2>
              <p>
                Você concorda em indenizar, defender e isentar a Nuvra Solutions de quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos ou dívidas resultantes de:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Seu uso dos serviços</li>
                <li>Violação destes Termos de Uso</li>
                <li>Violação de direitos de terceiros</li>
                <li>Uso inadequado de conteúdo ou serviços fornecidos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                12. Lei Aplicável e Jurisdição
              </h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca de Feira de Santana, Estado da Bahia, com exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                13. Disposições Gerais
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Se qualquer disposição for considerada inválida, as demais permanecerão em vigor</li>
                <li>A falha em exercer direitos não constitui renúncia</li>
                <li>Estes termos não criam relação de parceria ou agência</li>
                <li>Não podemos ser responsabilizados por eventos de força maior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-['Orbitron']">
                14. Contato
              </h2>
              <p>
                Para questões sobre estes Termos de Uso ou nossos serviços, entre em contato:
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
              <p className="font-semibold text-white">
                Ao usar os serviços da Nuvra Solutions, você reconhece que leu, entendeu e concordou em estar vinculado a estes Termos de Uso.
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

export default TermsOfService;
