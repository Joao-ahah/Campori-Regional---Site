import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useCountdown from '../../hooks/useCountdown';
import { COLORS, SHADOWS } from '../../constants/theme';

// Data do Campori: 20 a 23 de Novembro de 2025
const CAMPORI_DATE = '2025-11-20T00:00:00';

const CountdownTimer = () => {
  const timeLeft = useCountdown(CAMPORI_DATE);

  return (
    <div 
      className="py-12 bg-campori-dark-teal/50 backdrop-blur-sm rounded-xl shadow-xl"
      aria-label="Contagem regressiva para o Campori"
    >
      <h2 
        className="text-3xl font-bold text-center text-white mb-8"
      >
        Contagem Regressiva para o Campori
      </h2>
      
      <div 
        className="flex justify-center flex-wrap gap-4"
        role="timer"
        aria-live="polite"
      >
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-lg text-white">
          20 a 23 de Novembro de 2025
        </p>
      </div>
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = ({ value, label }: TimeUnitProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determinando o tamanho do container baseado no viewport
  const getSize = () => {
    if (windowWidth < 640) return 'w-24';
    if (windowWidth < 768) return 'w-28';
    return 'w-32';
  };

  // Determinando o tamanho da fonte baseado no viewport
  const getFontSize = () => {
    if (windowWidth < 768) return 'text-4xl';
    return 'text-5xl';
  };

  return (
    <motion.div
      className={`${getSize()} p-4 bg-campori-dark-blue rounded-lg text-center shadow-lg`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ boxShadow: SHADOWS.lg }}
      aria-label={`${value} ${label}`}
    >
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className={`${getFontSize()} font-bold text-campori-orange`}
        style={{ color: COLORS.orange }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-300 mt-1">
        {label}
      </div>
    </motion.div>
  );
};

export default CountdownTimer; 