import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Componente para animar a transição entre páginas
 * @param children - Conteúdo da página
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  // Efeito para garantir que a mudança de rota seja renderizada corretamente
  useEffect(() => {
    // Se a rota mudou, ou se estamos recarregando a mesma rota
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      
      // Aguardar a transição "fadeOut" terminar antes de atualizar 
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
        
        // Força uma rolagem para o topo
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }, 100); // Tempo um pouco menor que a duração da animação
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);
  
  return (
    <motion.div
      key={displayLocation.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: transitionStage === "fadeIn" ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 