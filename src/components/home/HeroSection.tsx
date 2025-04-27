import { motion } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const handleResize = () => window.innerWidth;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // URL da imagem do Unsplash
  const heroBackgroundImage = "fotop.jpg";

  return (
    <section 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(1, 35, 42, 0.6), rgba(1, 35, 42, 0.8)), url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-campori-dark-blue/30 to-campori-dark-blue/90"></div>
      </div>
      
      <div className="container-section relative z-10 flex flex-col items-center text-center px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/logocam.png" 
            alt="Logo Campori 2025" 
            className="w-60 md:w-72 lg:w-100 mx-auto mt-16"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Campori Regional 14ª Região
          <span className="block text-campori-orange mt-2"> 2025</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white max-w-3xl"
        >
          Uma aventura inesquecível de fé, amizade e crescimento espiritual para Desbravadores do Vale do Jaguaribe
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <a 
          href="#home" 
          className="flex items-center flex-col text-white/70 hover:text-white transition-colors"
          aria-label="Rolar para o conteúdo principal"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection; 