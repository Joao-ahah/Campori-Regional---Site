import { motion } from 'framer-motion';
import CountdownTimer from '../components/home/CountdownTimer';
import ParticlesBackground from '../components/ParticlesBackground';
import HeroSection from '../components/home/HeroSection';
import { Link } from 'react-router-dom';
import MetaTags from '../components/common/MetaTags';

const HomePage = () => {
  return (
    <>
      <MetaTags 
        title="Início" 
        description="Site oficial do Campori de Desbravadores 2025 - Aventuras, atividades e informações sobre o maior evento de desbravadores."
        keywords="campori, desbravadores, campori 2025, aventura, acampamento, jovens adventistas"
      />
      
      <ParticlesBackground />
      
      <HeroSection />
      
      <motion.div
        id="home"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container-section py-16 text-center bg-campori-dark-teal/20"
      >
        <h2 className="section-title">Bem-vindo ao Campori 2025</h2>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
          Um evento inesquecível de aventura, amizade e crescimento espiritual para os Desbravadores
          da 14ª Região. Marque em sua agenda: <strong>20 a 23 de novembro de 2025</strong> no
          <strong> Parque Haras Martins, Tabuleiro do Norte-CE</strong>.
        </p>
        
        <div className="container-section relative z-10 mt-8 mb-16">
          <CountdownTimer />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <InfoCard 
            title="Sobre o Evento"
            description="Conheça mais sobre o propósito e as atividades planejadas para o Campori 2025"
            linkTo="/sobre"
            linkText="Saiba Mais"
          />
          
          <InfoCard 
            title="Local e Data"
            description="Informações sobre o local do evento, como chegar e datas confirmadas"
            linkTo="/local"
            linkText="Ver Detalhes"
          />
          
          <InfoCard 
            title="Galeria de Fotos"
            description="Veja imagens inspiradoras de eventos anteriores e o que esperar"
            linkTo="/galeria"
            linkText="Ver Galeria"
          />
        </div>
      </motion.div>
    </>
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
}

const InfoCard = ({ title, description, linkTo, linkText }: InfoCardProps) => (
  <div 
    className="card p-6 text-center hover:bg-campori-dark-teal/50 transition-all bg-campori-dark-blue/70 rounded-lg shadow-lg"
    aria-labelledby={`card-title-${title.replace(/\s/g, '-').toLowerCase()}`}
  >
    <h3 
      id={`card-title-${title.replace(/\s/g, '-').toLowerCase()}`} 
      className="text-xl font-semibold text-campori-orange mb-3"
    >
      {title}
    </h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link 
        to={linkTo} 
        className="btn btn-primary inline-block"
        aria-label={`${linkText} sobre ${title}`}
      >
        {linkText}
      </Link>
    </motion.div>
  </div>
);

export default HomePage; 