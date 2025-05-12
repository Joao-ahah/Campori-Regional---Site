import { motion } from 'framer-motion';
import GallerySection from '../components/gallery/GallerySection';
import ParticlesBackground from '../components/ParticlesBackground';

const GaleriaPage = () => {
  return (
    <>
      <ParticlesBackground />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-28 pb-10 bg-campori-dark-blue"
      >
        <div className="container-section">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-campori-orange mb-4">
            Galeria de Fotos
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            Uma jornada visual pelos melhores momentos dos Camporis anteriores
          </p>
        </div>
      </motion.div>
      
      <GallerySection />
      
      <section className="py-20 bg-campori-dark-teal/30">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Momentos Inesquecíveis
          </motion.h2>
          
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Cada Campori é repleto de momentos únicos que ficam marcados na memória dos participantes. 
            Compartilhe suas experiências e ajude a construir nossa galeria.
          </p>
          
          <div className="mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-campori-dark-blue p-8 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Envie suas fotos do Campori</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Tem fotos de Camporis anteriores? Compartilhe-as conosco para serem incluídas em nossa galeria oficial.
                As melhores imagens serão selecionadas para exibição permanente em nosso site.
              </p>
              
              <motion.a
                href="mailto:fotos@campori2025.com.br"
                className="btn btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Enviar Fotos
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-campori-dark-blue">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Vídeos em Destaque
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-campori-dark-teal flex items-center justify-center">
                <p className="text-gray-400 text-center px-4">
                  [Vídeo do YouTube: "Melhores Momentos Campori 2022"]
                </p>
              </div>
              <div className="p-4 bg-campori-dark-teal/50">
                <h3 className="text-lg font-semibold text-campori-orange mb-2">Retrospectiva Campori 2022</h3>
                <p className="text-gray-300 text-sm">
                  Relembre os momentos mais marcantes do último Campori regional, com depoimentos dos participantes.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-campori-dark-teal flex items-center justify-center">
                <p className="text-gray-400 text-center px-4">
                  [Vídeo do YouTube: "Cerimônia de Abertura - Campori 2020"]
                </p>
              </div>
              <div className="p-4 bg-campori-dark-teal/50">
                <h3 className="text-lg font-semibold text-campori-orange mb-2">Cerimônia de Abertura</h3>
                <p className="text-gray-300 text-sm">
                  A emocionante cerimônia que marcou o início do Campori de 2020, com apresentações especiais.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-campori-dark-teal flex items-center justify-center">
                <p className="text-gray-400 text-center px-4">
                  [Vídeo do YouTube: "Desafios e Aventuras - Campori 2019"]
                </p>
              </div>
              <div className="p-4 bg-campori-dark-teal/50">
                <h3 className="text-lg font-semibold text-campori-orange mb-2">Atividades e Aventuras</h3>
                <p className="text-gray-300 text-sm">
                  Conheça as principais atividades e desafios que os Desbravadores enfrentaram no Campori.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="https://www.youtube.com/@14regiaodbv-valedojaguarib55"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Ver Mais Vídeos
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GaleriaPage; 