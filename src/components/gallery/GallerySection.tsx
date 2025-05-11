import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Imagens do Unsplash para a galeria
const galleryImages = [
  {
    id: 1,
    src: '/foto1.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 2,
    src: '/foto2.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 3,
    src: '/foto3.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 4,
    src: '/foto4.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 5,
    src: '/foto5.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 6,
    src: '/foto6.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 7,
    src: '/foto7.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 8,
    src: '/foto8.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 9,
    src: '/foto9.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 10,
    src: '/foto10.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 11,
    src: '/foto11.jpeg',
    alt: '',
    category: '',
  },
  {
    id: 12,
    src: '/foto12.jpeg',
    alt: '',
    category: '',
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
            className="absolute top-4 right-4 text-white hover:text-campori-orange transition-colors z-50"
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