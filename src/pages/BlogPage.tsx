import { motion } from 'framer-motion';
import BlogSection from '../components/blog/BlogSection';
import ParticlesBackground from '../components/ParticlesBackground';

const BlogPage = () => {
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
            Blog e Notícias
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            Fique por dentro das últimas novidades e atualizações sobre o Campori 2025
          </p>
        </div>
      </motion.div>
      
      <BlogSection />
      
      <section className="py-20 bg-campori-dark-teal/30">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Artigos em Destaque
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-campori-dark-blue p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-campori-orange mb-3">
                A Importância dos Camporis na Formação dos Jovens
              </h3>
              <p className="text-gray-400 mb-4">Publicado em 13 de Maio de 2025</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Os Camporis têm um papel fundamental no desenvolvimento físico, mental, social e 
                espiritual dos jovens. Através das atividades realizadas, os participantes aprendem 
                valores como trabalho em equipe, liderança, respeito e superação de limites...
              </p>
              <motion.a
                href="/blog/artigo-1"
                className="text-campori-orange font-medium hover:text-white inline-flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Continue lendo
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.article>
            
            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-campori-dark-blue p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-campori-orange mb-3">
                Preparando seu Clube para o Campori 2025
              </h3>
              <p className="text-gray-400 mb-4">Publicado em 13 de Maio de 2025</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Um Campori requer preparação e organização. Neste artigo, compartilhamos dicas 
                valiosas para diretores e líderes ajudarem seus clubes a se prepararem 
                adequadamente para o grande evento que acontecerá em 2025...
              </p>
              <motion.a
                href="/blog/artigo-2"
                className="text-campori-orange font-medium hover:text-white inline-flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Continue lendo
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.article>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-campori-dark-blue">
    <div className="container-section text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Siga o Campori nas Redes Sociais
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 mt-10"
      > Fique por dentro de todas as novidades, bastidores e momentos especiais do nosso Campori através das redes sociais oficiais.
        {/* Instagram */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 mt-10"
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/14regiaoace/?igsh=MWx1cHZnaDFvYm84ZQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            className="w-10 h-10 text-campori-orange hover:text-white transition duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.4.5.6.2 1 .6 1.4 1.1.4.5.8 1.2 1.1 2.4.2.4.3 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.4-.2.6-.6 1-1.1 1.4-.5.4-1.2.8-2.4 1.1-.4.2-1.2.3-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.4-.5-.6-.2-1-.6-1.4-1.1-.4-.5-.8-1.2-1.1-2.4-.2-.4-.3-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.4.2-.6.6-1 1.1-1.4.5-.4 1.2-.8 2.4-1.1.4-.2 1.2-.3 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.2 0 7 0 5.8 0 5 .2 4.3.5c-.8.3-1.5.7-2.2 1.6C1.2 2.8.8 3.5.5 4.3.2 5 0 5.8 0 7c0 1.2 0 1.7 0 5s0 3.8.1 5c.1 1.2.3 2 .5 2.4.2.6.6 1 1.1 1.4.5.4 1.2.8 2.4 1.1.4.2 1.2.3 2.4.5 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1.2-.1 2-.3 2.4-.5.6-.2 1-.6 1.4-1.1.4-.5.8-1.2 1.1-2.4.2-.4.3-1.2.5-2.4.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1.2-.3-2-.5-2.4-.2-.6-.6-1-1.1-1.4-.5-.4-1.2-.8-2.4-1.1-.4-.2-1.2-.3-2.4-.5C15.6 0 15.2 0 12 0z"/>
            <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1zM18.4 4.6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 18.4 4.6z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@14regiaodbv-valedojaguarib55"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <svg
            className="w-10 h-10 text-campori-orange hover:text-white transition duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a2.918 2.918 0 0 0-2.05-2.063C19.685 3.5 12 3.5 12 3.5s-7.685 0-9.448.623A2.918 2.918 0 0 0 .502 6.186C0 8 0 12 0 12s0 4 .502 5.814a2.918 2.918 0 0 0 2.05 2.063C4.315 20.5 12 20.5 12 20.5s7.685 0 9.448-.623a2.918 2.918 0 0 0 2.05-2.063C24 16 24 12 24 12s0-4-.502-5.814zM9.75 15.023V8.977L15.545 12 9.75 15.023z"/>
          </svg>
        </a>
      </motion.div>
    </div>
  </section>


    </>
  );
};

export default BlogPage; 