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
              <p className="text-gray-400 mb-4">Publicado em 15 de Julho de 2024</p>
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
              <p className="text-gray-400 mb-4">Publicado em 3 de Agosto de 2024</p>
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
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Assine Nossa Newsletter
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-gray-300 mb-8">
              Receba as últimas atualizações, notícias e informações importantes 
              sobre o Campori 2025 diretamente em seu e-mail.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-md bg-campori-dark-teal border border-gray-700 text-white focus:outline-none focus:border-campori-orange"
              />
              <button
                type="submit"
                className="btn btn-primary md:flex-shrink-0 px-6 py-3"
              >
                Inscrever-se
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage; 