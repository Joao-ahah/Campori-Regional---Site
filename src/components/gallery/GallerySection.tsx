import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Imagens do Unsplash para a galeria
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1470&auto=format&fit=crop',
    alt: 'Cerimônia de abertura',
    category: 'Cerimônias',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1474&auto=format&fit=crop',
    alt: 'Atividades aquáticas',
    category: 'Atividades',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=80&w=1470&auto=format&fit=crop',
    alt: 'Momentos de adoração',
    category: 'Espiritual',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1474&auto=format&fit=crop',
    alt: 'Jogos em equipe',
    category: 'Atividades',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1474&auto=format&fit=crop',
    alt: 'Caminhada na natureza',
    category: 'Aventura',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1405&auto=format&fit=crop',
    alt: 'Acampamento',
    category: 'Estrutura',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=1470&auto=format&fit=crop',
    alt: 'Especialidades',
    category: 'Aprendizado',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop',
    alt: 'Momento de confraternização',
    category: 'Companheirismo',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  // Imagem atualmente selecionada para o lightbox
  const currentImage = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <section id="galeria" className="py-20 bg-campori-dark-blue">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Galeria de Fotos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confira alguns momentos de eventos anteriores e veja o que esperar do Campori 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium">{image.alt}</p>
                  <span className="text-xs text-gray-300">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-campori-orange transition-colors"
            aria-label="Fechar galeria"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/60 transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white text-center">
              <p className="font-medium text-lg">{currentImage.alt}</p>
              <p className="text-sm text-gray-300">{currentImage.category}</p>
            </div>
          </div>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/60 transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection; 