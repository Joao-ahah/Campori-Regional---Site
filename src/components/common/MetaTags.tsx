import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
}

/**
 * Componente para gerenciar meta tags de SEO
 * @param title - Título da página
 * @param description - Descrição para SEO
 * @param keywords - Palavras-chave para SEO
 * @param ogImage - URL da imagem para Open Graph
 * @param ogUrl - URL canônica para Open Graph
 * @param ogType - Tipo de conteúdo para Open Graph
 * @param twitterCard - Tipo de card para Twitter
 */
const MetaTags = ({
  title,
  description,
  keywords,
  ogImage = '/images/campori-og-image.jpg',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
}: MetaTagsProps) => {
  useEffect(() => {
    // Atualizar o título do documento
    document.title = `${title} | Campori 2025`;
    
    // Atualizar meta tags existentes ou criar novas
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', ogImage);
    if (ogUrl) updateMetaTag('og:url', ogUrl);
    updateMetaTag('og:type', ogType);
    
    // Twitter
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
  }, [title, description, keywords, ogImage, ogUrl, ogType, twitterCard]);
  
  // Função para atualizar ou criar meta tags
  const updateMetaTag = (name: string, content: string) => {
    let meta: HTMLMetaElement | null;
    
    // Verificar se é uma meta tag de propriedade (og: ou twitter:) ou nome
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta = document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', name);
        document.head.appendChild(meta);
      }
    } else {
      meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
    }
    
    meta.setAttribute('content', content);
  };

  // Este componente não renderiza nada visualmente
  return null;
};

export default MetaTags; 