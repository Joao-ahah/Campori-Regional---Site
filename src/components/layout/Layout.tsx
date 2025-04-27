import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FooterNav from './FooterNav';
import ScrollToTop from '../ScrollToTop';
import useScrollToTopOnNavigation from '../../hooks/useScrollToTopOnNavigation';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Componente de layout principal da aplicação
 * @param children - Conteúdo da página
 */
const Layout = ({ children }: LayoutProps) => {
  // Hook para scroll ao topo quando a navegação ocorre
  useScrollToTopOnNavigation();
  
  useEffect(() => {
    // Garantir que o tema escuro esteja aplicado
    document.body.classList.add('bg-campori-dark-blue', 'text-white');
    document.documentElement.classList.add('scroll-smooth');
    
    // Adicionar atributo para acessibilidade
    document.documentElement.lang = 'pt-BR';
    
    return () => {
      // Limpeza caso o componente seja desmontado
      document.body.classList.remove('bg-campori-dark-blue', 'text-white');
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  // Garantir que cliques funcionem corretamente
  useEffect(() => {
    // Remover possíveis camadas invisíveis ou elementos que bloqueariam cliques
    const cleanupBlockingElements = () => {
      const blockers = document.querySelectorAll('.pointer-events-none');
      blockers.forEach(blocker => {
        blocker.classList.remove('pointer-events-none');
      });
    };
    
    cleanupBlockingElements();
    return cleanupBlockingElements;
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <header className="z-[1000]">
          <Navbar />
        </header>
        <main 
          id="main-content" 
          className="flex-grow pb-16 md:pb-0" 
          role="main"
          tabIndex={-1}
          style={{ 
            position: 'relative',
            zIndex: 1 
          }}
        >
          {children}
        </main>
        <Footer />
        <FooterNav />
      </div>
    </>
  );
};

export default Layout; 