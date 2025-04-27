import { motion } from 'framer-motion';
import AboutSection from '../components/about/AboutSection';
import ParticlesBackground from '../components/ParticlesBackground';

const SobrePage = () => {
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
            Sobre o Campori 2025
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            Conheça mais sobre este grande evento e o que você pode esperar desta experiência única
          </p>
        </div>
      </motion.div>
      
      <AboutSection />
      
      <section className="py-20 bg-campori-dark-teal/30">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Nossa História
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Tradição de Excelência</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                O Campori é um evento tradicional que tem sido realizado há décadas, reunindo clubes de Desbravadores 
                para fortalecer valores, incentivar o companheirismo e desenvolver habilidades em meio à natureza.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A cada edição, milhares de jovens têm suas vidas transformadas através das atividades, desafios e 
                momentos de adoração compartilhados durante o evento.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Campori 2025: Uma Nova Jornada</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Para 2025, estamos preparando uma edição especial com o tema "Eternamente Desbravador", celebrando a jornada de fé, coragem e serviço que marca a vida de cada Desbravador, incentivando-os a seguir firmes em sua missão por toda a vida
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                O evento contará com atividades inovadoras, palestrantes inspiradores e uma infraestrutura 
                completa para proporcionar dias inesquecíveis a todos os participantes.
              </p>
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
            Perguntas Frequentes
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">Quem pode participar?</h3>
              <p className="text-gray-300">
                Clubes de Desbravadores regularmente registrados, com membros entre 10 e 15 anos, 
                acompanhados por seus líderes. Todos devem estar devidamente uniformizados.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">Como fazer a inscrição?</h3>
              <p className="text-gray-300">
                As inscrições são feitas pelo diretor do clube através do portal oficial. 
                Os detalhes completos estarão disponíveis na seção de inscrições do site.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">O que levar?</h3>
              <p className="text-gray-300">
                Equipamentos de camping, uniforme completo, roupas para atividades, 
                itens de higiene pessoal e documentos. Uma lista detalhada será enviada aos clubes inscritos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">Posso visitar o Campori?</h3>
              <p className="text-gray-300">
                Sim, haverá dias específicos para visitantes. Consulte a programação oficial 
                para mais informações sobre horários e procedimentos para visitantes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobrePage; 