import { motion } from 'framer-motion';
import { Users, Map, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
  // Imagem de fundo do Unsplash
  const backgroundImage = "https://images.unsplash.com/photo-1471978445661-ad6ec1f5ba50?q=80&w=1470&auto=format&fit=crop";
  
  return (
    <section 
      id="sobre" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 62, 0.85), rgba(1, 35, 42, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sobre o Campori
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">O Que é o Campori?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O Campori é um acampamento de Desbravadores que reúne milhares de crianças e adolescentes de diferentes partes do país para
              vivenciar dias de aventura, aprendizado e crescimento espiritual. É um evento que marca a vida dos participantes
              com atividades especiais, novas amizades e experiências únicas.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Em 2025, o Campori trará atividades inovadoras, momentos de adoração, competições entre clubes de Desbravadores,
              e muito mais - tudo isso em meio à natureza e com um propósito espiritual.
            </p>
            <a href="#inscricao" className="btn btn-primary inline-block">
              Saiba como participar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <FeatureCard 
              icon={<Users className="text-campori-orange" size={36} />}
              title="Para Quem"
              description="Clubes de Desbravadores de todo país, com idade entre 10 e 15 anos, devidamente uniformizados e regulares."
              imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1432&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={<Map className="text-campori-orange" size={36} />}
              title="Aventura"
              description="Atividades na natureza, trilhas, atividades aquáticas e desafios que testam habilidades."
              imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={<BookOpen className="text-campori-orange" size={36} />}
              title="Aprendizado"
              description="Especialidades, oficinas de habilidades e conhecimentos para a vida toda."
              imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={<Award className="text-campori-orange" size={36} />}
              title="Companheirismo"
              description="Formação de novas amizades, trabalho em equipe e momentos inesquecíveis juntos."
              imageSrc="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1469&auto=format&fit=crop"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard = ({ icon, title, description, imageSrc }: FeatureCardProps) => {
  return (
    <div className="bg-campori-dark-blue p-6 rounded-lg shadow-lg overflow-hidden relative group">
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-semibold text-campori-orange mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AboutSection; 