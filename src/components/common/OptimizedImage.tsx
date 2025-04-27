import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Componente de imagem otimizado com lazy loading
 * @param src - URL da imagem
 * @param alt - Texto alternativo para acessibilidade
 * @param className - Classes CSS adicionais
 * @param width - Largura da imagem
 * @param height - Altura da imagem
 * @param priority - Se verdadeiro, carrega a imagem imediatamente sem lazy loading
 * @param onLoad - Função chamada quando a imagem carrega
 * @param onError - Função chamada se ocorrer erro ao carregar a imagem
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Resetar estados ao trocar a imagem
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    if (onError) onError();
  };

  // Estilo para efeito de fade-in
  const imageStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && !error && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
          <span>Imagem indisponível</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} w-full h-full object-cover`}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          decoding="async"
        />
      )}
    </div>
  );
};

export default OptimizedImage; 