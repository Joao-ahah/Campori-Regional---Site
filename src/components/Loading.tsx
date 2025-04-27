import { motion } from 'framer-motion';

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
}

const Loading = ({ fullScreen = false, text = 'Carregando...' }: LoadingProps) => {
  const containerClass = fullScreen
    ? 'fixed inset-0 bg-campori-dark-blue/90 flex flex-col items-center justify-center z-50'
    : 'flex flex-col items-center justify-center py-8';

  return (
    <div className={containerClass}>
      <div className="relative w-16 h-16">
        {/* Círculo exterior */}
        <motion.div
          className="absolute inset-0 border-4 border-campori-orange/20 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Spinner animado */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-campori-orange rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Ponto central */}
        <motion.div 
          className="absolute left-1/2 top-1/2 w-3 h-3 bg-campori-orange rounded-full -ml-1.5 -mt-1.5"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      {text && (
        <motion.p 
          className="mt-4 text-white text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loading; 