import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  // URL da imagem de fundo do Unsplash
  const backgroundImage = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop";
  const locationImage = "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop";
  
  return (
    <section 
      id="local" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 62, 0.9), rgba(1, 35, 42, 0.95)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
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
          Local do Evento
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <MapPin className="text-campori-orange mr-2" size={22} />
                <h3 className="text-xl font-bold text-white">Parque Haras Martins</h3>
              </div>
              <p className="text-gray-300 pl-8">
                Tabuleiro do Norte, CE
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Calendar className="text-campori-orange mr-2" size={22} />
                <h3 className="text-xl font-bold text-white">Data</h3>
              </div>
              <p className="text-gray-300 pl-8">
                20 a 23 de Novembro de 2025
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <Clock className="text-campori-orange mr-2" size={22} />
                <h3 className="text-xl font-bold text-white">Horários</h3>
              </div>
              <p className="text-gray-300 pl-8">
                Abertura: 20/11 às 19h30 <br />
                Encerramento: 23/11 às 12h00
              </p>
            </div>
            
            <div className="mt-2">
              <h3 className="text-xl font-bold text-white mb-4">Como Chegar</h3>
              <p className="text-gray-300 mb-6">
                
              </p>
              
              <a 
                href="https://maps.app.goo.gl/Wcgio4ZHN5Xja6KY6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center"
              >
                Ver no Google Maps
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl h-[350px] md:h-[500px] mb-6">
              <img 
                src="/fotoentrada.jpeg"
                alt="Parque Haras Martins - Local do Campori 2025"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 bg-campori-dark-blue p-4 rounded-lg shadow-lg">
              <h4 className="font-semibold text-campori-orange mb-2">Estrutura do Local</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Ampla área para acampamento</li>
                <li>Palco para programações</li>
                <li>Estrutura coberta para atividades</li>
                <li>Áreas de alimentação</li>
                <li>Banheiros e chuveiros</li>
                <li>Posto médico</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 