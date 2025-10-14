import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { N8N_CHATBOT_URL } from '../config';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Olá! Sou a IA da Nuvra. Quer saber mais sobre nossos serviços ou tirar uma dúvida rápida?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Inicializa um sessionId persistente para manter contexto no n8n
  useEffect(() => {
    const existing = localStorage.getItem('nuvra_chat_session');
    if (existing) {
      setSessionId(existing);
    } else {
      const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem('nuvra_chat_session', id);
      setSessionId(id);
    }
  }, []);

  const mockResponses: { [key: string]: string } = {
    servicos: 'Oferecemos Desenvolvimento Web & Automação, Tráfego Pago & Marketing, Branding & Identidade Visual, e Integrações com IA & Chatbots. Qual te interessa?',
    preço: 'Nossos preços são personalizados de acordo com suas necessidades. Gostaria de solicitar uma proposta?',
    contato: 'Você pode falar conosco pelo WhatsApp ou Instagram, ambos disponíveis no topo da página!',
    portfolio: 'Temos diversos cases de sucesso! Role a página até a seção Portfólio para ver nossos projetos.',
    default: 'Interessante! Posso te ajudar com informações sobre nossos serviços, portfólio ou formas de contato. O que você gostaria de saber?',
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('serviço') || lowerInput.includes('servico')) return mockResponses.servicos;
    if (lowerInput.includes('preço') || lowerInput.includes('preco') || lowerInput.includes('custo')) return mockResponses.preço;
    if (lowerInput.includes('contato') || lowerInput.includes('falar')) return mockResponses.contato;
    if (lowerInput.includes('portfolio') || lowerInput.includes('projeto')) return mockResponses.portfolio;
    return mockResponses.default;
  };


  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Quando a URL do n8n está configurada, envia ao webhook
    if (N8N_CHATBOT_URL) {
      try {
        const history = [...messages, userMessage].map((m) => ({
          role: m.isUser ? 'user' : 'assistant',
          content: m.text,
          timestamp: m.timestamp.toISOString(),
        }));

        const res = await fetch(N8N_CHATBOT_URL, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage.text, sessionId, history }),
        });

        if (!res.ok) {
          const errBody = await res.text().catch(() => '');
          const botResponse: Message = {
            text: `Erro ao conectar: ${res.status} ${res.statusText}${errBody ? ' - ' + errBody.slice(0, 200) : ''}`,
            isUser: false,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botResponse]);
          return;
        }

        let replyText = '';
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const data = await res.json();
          replyText = (data.reply || data.message || data.text || '').toString();
          if (!replyText) replyText = JSON.stringify(data);
        } else {
          replyText = await res.text();
        }

        const botResponse: Message = {
          text: replyText || 'Sem resposta do assistente.',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } catch (err) {
        console.error('Chatbot conexão falhou:', err);
        const botResponse: Message = {
          text: 'Desculpe, houve um erro de rede/CORS ao conectar ao assistente. Tente novamente.',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } finally {
        setIsTyping(false);
      }
    } else {
      // Fallback local quando a URL do n8n não está configurada
      setTimeout(() => {
        const botResponse: Message = {
          text: getResponse(userMessage.text),
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 800);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full shadow-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full opacity-50 blur-xl"
        />
        <div className="relative">
          {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] h-[500px] bg-[#0b0b0f]/95 backdrop-blur-xl border border-[#7b3ff1]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00f6ff] to-[#7b3ff1] p-0.5"
                  >
                    <div className="w-full h-full bg-[#0b0b0f] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#00f6ff] to-[#7b3ff1] rounded-full" />
                    </div>
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-bold text-white font-['Orbitron']">IA Nuvra</h3>
                  <p className="text-xs text-gray-200">Online agora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] text-white'
                        : 'bg-gray-800/50 text-gray-200 border border-[#7b3ff1]/20'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800/50 border border-[#7b3ff1]/20 p-3 rounded-2xl">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-2 h-2 bg-[#00f6ff] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                        className="w-2 h-2 bg-[#00f6ff] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                        className="w-2 h-2 bg-[#00f6ff] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-[#7b3ff1]/20">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-gray-800/50 border border-[#7b3ff1]/30 rounded-full px-4 py-2 text-gray-200 focus:outline-none focus:border-[#00f6ff] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="p-2 bg-gradient-to-r from-[#7b3ff1] to-[#00f6ff] rounded-full"
                >
                  <Send size={20} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
