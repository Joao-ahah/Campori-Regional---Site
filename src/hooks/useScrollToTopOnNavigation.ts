import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook para rolar a página para o topo quando a navegação ocorre
 */
const useScrollToTopOnNavigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Simples e direto: rolar para o topo quando o pathname mudar
    window.scrollTo(0, 0);
    
    // Focar o conteúdo principal para acessibilidade
    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    }, 0);
  }, [pathname]);
};

export default useScrollToTopOnNavigation; 