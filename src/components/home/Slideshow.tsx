import { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Imagens do Unsplash com descrições detalhadas
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=1470&auto=format&fit=crop',
    caption: 'Momentos Inesquecíveis',
    description: 'Experiências que marcarão sua vida para sempre com lembranças que permanecerão por gerações.',
  },
  {
    url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1474&auto=format&fit=crop',
    caption: 'Aventuras na Natureza',
    description: 'Trilhas, expedições e atividades ao ar livre que conectam os jovens com a criação divina.',
  },
  {
    url: 'https://images.unsplash.com/photo-1536605045197-d1f21df26d4f?q=80&w=1470&auto=format&fit=crop',
    caption: 'Amizades para a Vida',
    description: 'Conexões genuínas e laços fraternos que transcendem o tempo e a distância.',
  },
  {
    url: 'https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=80&w=1470&auto=format&fit=crop',
    caption: 'Crescimento Espiritual',
    description: 'Momentos de reflexão, louvor e adoração para fortalecer a fé e os valores cristãos.',
  },
];

const Slideshow = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Garantir que o slideshow seja inicializado corretamente
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleSlideChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  // Definir altura baseada no tamanho da tela
  const getSlideHeight = () => {
    if (windowWidth < 640) return '60vh';
    if (windowWidth < 768) return '60vh';
    return '70vh';
  };

  const slideHeight = getSlideHeight();

  const slideContainerStyle = {
    width: '100%',
    height: slideHeight,
    overflow: 'hidden',
    position: 'relative' as const,
    borderRadius: '8px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  };

  const arrowButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '0.5rem',
    borderRadius: '9999px',
    zIndex: 10,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const indicatorStyle = {
    width: '12px',
    height: '12px',
    backgroundColor: '#df8e23',
    cursor: 'pointer',
    margin: '0 5px',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'opacity 0.3s ease',
  };

  const properties = {
    prevArrow: (
      <button 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 text-white hover:bg-black/70 transition"
        style={arrowButtonStyle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
      >
        <ChevronLeft size={24} />
      </button>
    ),
    nextArrow: (
      <button 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 text-white hover:bg-black/70 transition"
        style={arrowButtonStyle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
      >
        <ChevronRight size={24} />
      </button>
    ),
    duration: 6000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    scale: 1.2,
    arrows: true,
    autoplay: true,
    onChange: handleSlideChange,
    indicatorStyle: {
      ...indicatorStyle,
      opacity: 0.5,
    },
    activeIndicatorStyle: {
      ...indicatorStyle,
      opacity: 1,
    },
  };

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-xl" style={{ height: slideHeight }}>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover'
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent to-campori-dark-blue/90 flex items-end"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(1, 35, 42, 0.9))'
                }}
              >
                <div 
                  className="container-section pb-12"
                  style={{
                    maxWidth: '80rem',
                    margin: '0 auto',
                    padding: '4rem 1rem 3rem 1rem',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0, 
                      y: currentSlide === index ? 0 : 20 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 
                      className="text-3xl md:text-5xl font-bold text-white mb-2"
                      style={{
                        fontSize: windowWidth < 768 ? '1.875rem' : '3rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {slideImage.caption}
                    </h2>
                    <p 
                      className="text-lg md:text-xl text-gray-200 max-w-xl"
                      style={{
                        fontSize: windowWidth < 768 ? '1rem' : '1.25rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '36rem'
                      }}
                    >
                      {slideImage.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow; 