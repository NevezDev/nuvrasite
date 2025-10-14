import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoCopyCopyCopy from '../assets/logo copy copy copy.png';

const phrases = [
  'Analisando dados...',
  'Otimizando impacto...',
  'Gerando conexões inteligentes...',
  'IA Nuvra Ativa.',
];

const HolographicInterfaceNuvra = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pulseEffect, setPulseEffect] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    const particleCount = window.innerWidth < 768 ? 40 : 80;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 100 + Math.random() * 150;
      particles.push({
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        hue: Math.random() > 0.5 ? 190 : 270,
      });
    }

    const circuits: Array<{
      radius: number;
      speed: number;
      offset: number;
      segments: number;
    }> = [
      { radius: 120, speed: 0.002, offset: 0, segments: 4 },
      { radius: 140, speed: -0.0015, offset: Math.PI / 4, segments: 4 },
      { radius: 160, speed: 0.001, offset: Math.PI / 2, segments: 6 },
    ];

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      circuits.forEach((circuit, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${idx % 2 === 0 ? 190 : 270}, 100%, 60%, 0.3)`;
        ctx.lineWidth = 1.5;

        const angle = time * circuit.speed + circuit.offset;

        for (let i = 0; i <= circuit.segments; i++) {
          const segmentAngle = (i / circuit.segments) * Math.PI + angle;
          const x = centerX + Math.cos(segmentAngle) * circuit.radius;
          const y = centerY + Math.sin(segmentAngle) * circuit.radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 250) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 100 + Math.random() * 50;
          particle.x = centerX + Math.cos(angle) * radius;
          particle.y = centerY + Math.sin(angle) * radius;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${particle.hue}, 100%, 60%, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    setMousePosition({ x: x * 10, y: y * 10 });
  };

  const handleClick = () => {
    setPulseEffect(true);
    setTimeout(() => setPulseEffect(false), 1000);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-[#00bfff]/30 bg-[#0b0b10]"
      onMouseMove={handleMouseMove}
      style={{
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #0b0b10 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -10, 0],
            scale: pulseEffect ? [1, 1.1, 1] : 1,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.5 }
          }}
          onClick={handleClick}
          style={{ pointerEvents: 'auto', cursor: 'pointer' }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 191, 255, 0.5), 0 0 40px rgba(155, 95, 255, 0.3)',
                '0 0 40px rgba(0, 191, 255, 0.8), 0 0 60px rgba(155, 95, 255, 0.5)',
                '0 0 20px rgba(0, 191, 255, 0.5), 0 0 40px rgba(155, 95, 255, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative rounded-full p-6 backdrop-blur-md bg-white/5 border border-white/10"
          >
            <img
              src={logoCopyCopyCopy}
              alt="Nuvra Logo"
              className="w-32 h-32 object-contain"
            />

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00bfff]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {pulseEffect && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-full border-4 border-[#00ffff]"
              />
            )}
          </motion.div>

          <div className="absolute -inset-8 pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * Math.PI * 2) / 6) * 80],
                  y: [0, Math.sin((i * Math.PI * 2) / 6) * 80],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-12 flex justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhrase}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              className="text-[#00bfff] text-lg font-['Orbitron'] tracking-wider"
              animate={{
                textShadow: [
                  '0 0 10px rgba(0, 191, 255, 0.5)',
                  '0 0 20px rgba(0, 191, 255, 0.8)',
                  '0 0 10px rgba(0, 191, 255, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {phrases[currentPhrase]}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-4 left-4 space-y-2 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0.3, 0.6, 0.3], x: 0 }}
            transition={{
              opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 },
              x: { duration: 0.5, delay: i * 0.1 }
            }}
            className="w-12 h-1 bg-gradient-to-r from-[#00bfff] to-transparent"
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 space-y-2 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: [0.3, 0.6, 0.3], x: 0 }}
            transition={{
              opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 },
              x: { duration: 0.5, delay: i * 0.1 }
            }}
            className="w-12 h-1 bg-gradient-to-l from-[#9b5eff] to-transparent ml-auto"
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 space-x-2 flex pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-[#00bfff]"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HolographicInterfaceNuvra;
