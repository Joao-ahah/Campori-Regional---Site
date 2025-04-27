import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { COLORS, TRANSITIONS } from '../../constants/theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Forçar a visibilidade quando a rota muda
  useEffect(() => {
    setIsOpen(false);
    setVisible(true); // Garantir que a navbar esteja visível após mudança de rota
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Verificar se está scrollado para aplicar o fundo
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Controle de visibilidade baseado na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Rolando para baixo e já passou de 200px - esconder navbar
        setVisible(false);
      } else {
        // Rolando para cima ou no topo - mostrar navbar
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { title: 'Início', href: '/' },
    { title: 'Sobre', href: '/sobre' },
    { title: 'Local', href: '/local' },
    { title: 'Blog', href: '/blog' },
    { title: 'Boletins', href: '/boletins' },
    { title: 'Galeria', href: '/galeria' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-campori-dark-blue/95 shadow-lg' : 'bg-transparent'}`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(1, 35, 42, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        transition: TRANSITIONS.default,
        zIndex: 1000, // Garantir que está acima de outros elementos
        pointerEvents: 'auto', // Garantir que os cliques são interceptados
      }}
      initial={{ top: 0 }}
      animate={{ 
        top: visible ? 0 : -80,
        opacity: visible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-section py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Home Link */}
          <a 
            href="/" 
            className="flex items-center relative z-10 cursor-pointer"
          >
            <img
              src="/logo-campori.svg"
              alt="Logo Campori"
              className="h-12 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-campori-orange">
              Campori 2025
            </span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? (
                <X size={24} className="text-campori-orange" />
              ) : (
                <Menu size={24} className="text-campori-orange" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center space-x-8 relative z-10">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`transition-colors font-medium relative ${
                  isActive(item.href) ? 'text-campori-orange' : 'text-white hover:text-campori-orange'
                }`}
                style={{
                  color: isActive(item.href) ? COLORS.orange : COLORS.white,
                  transition: TRANSITIONS.default,
                  position: 'relative',
                  zIndex: 10
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 overflow-hidden relative z-50"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`transition-colors font-medium px-4 py-2 rounded-md ${
                      isActive(item.href) 
                        ? 'text-campori-orange bg-campori-dark-teal/30' 
                        : 'text-white hover:text-campori-orange hover:bg-campori-dark-teal/30'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 