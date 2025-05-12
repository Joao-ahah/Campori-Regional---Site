import { motion } from 'framer-motion';
import LocationSection from '../components/location/LocationSection';
import ParticlesBackground from '../components/ParticlesBackground';
import { Car } from 'lucide-react';

const LocalPage = () => {
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
            Local do Evento
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            Informações sobre o Parque de Eventos, como chegar e a infraestrutura disponível
          </p>
        </div>
      </motion.div>
      
      <LocationSection />
      
      <section className="py-20 bg-campori-dark-blue">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Como Chegar
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <Car className="text-campori-orange mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">De Carro</h3>
              </div>
              <p className="text-gray-300 mb-4">
                O Parque Haras Martins está localizado em Tabuleiro do Norte - CE. 
                Há ampla área de estacionamento com segurança 24h.
              </p>
              
              <div className="bg-campori-dark-blue p-4 rounded-lg mb-6">
                <h4 className="text-campori-orange font-semibold mb-2">Endereço Exato</h4>
                <p className="text-gray-300">
                  Haras Martins, Tabuleiro do Norte - CE
                </p>
                <a 
                  href="https://maps.app.goo.gl/WvQrFVACBNkp2rWj7" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-campori-orange hover:underline mt-2 inline-block"
                >
                  Ver no Google Maps
                </a>
              </div>
              
              <div className="space-y-6 mt-4">
                <div className="bg-campori-dark-blue p-4 rounded-lg mb-6">
                  <h4 className="text-campori-orange font-semibold mb-2">A partir de Russas - CE</h4>
                  <p className="text-gray-300 mb-2">Tempo aproximado: 1h de viagem</p>
                  <p className="text-gray-300">
                    Siga pela BR-116 sentido norte por aproximadamente 40km até Tabuleiro do Norte. 
                    Na entrada da cidade, siga as sinalizações para o Haras Martins.
                  </p>
                </div>
                
                <div className="bg-campori-dark-blue p-4 rounded-lg mb-6">
                  <h4 className="text-campori-orange font-semibold mb-2">A partir de Limoeiro do Norte</h4>
                  <p className="text-gray-300 mb-2">Tempo aproximado: 30min de viagem</p>
                  <p className="text-gray-300">
                    Pegue a CE-265 em direção a Tabuleiro do Norte. São aproximadamente 25km 
                    até a cidade. Na entrada de Tabuleiro do Norte, siga as placas indicativas 
                    para o Haras Martins.
                  </p>
                </div>
                
                <div className="bg-campori-dark-blue p-4 rounded-lg mb-6">
                  <h4 className="text-campori-orange font-semibold mb-2">A partir de Morada Nova</h4>
                  <p className="text-gray-300 mb-2">Tempo aproximado: 1h45 de viagem</p>
                  <p className="text-gray-300">
                    Siga pela CE-138 até Limoeiro do Norte (aproximadamente 65km). 
                    De Limoeiro, pegue a CE-265 por mais 25km até Tabuleiro do Norte, 
                    onde está localizado o Haras Martins.
                  </p>
                </div>
                
                <div className="bg-campori-dark-blue p-4 rounded-lg mb-6">
                  <h4 className="text-campori-orange font-semibold mb-2">A partir de Jaguaretama</h4>
                  <p className="text-gray-300 mb-2">Tempo aproximado: 1h25 de viagem</p>
                  <p className="text-gray-300">
                    Pegue a CE-371 até o entroncamento com a BR-116 (cerca de 75km). 
                    Na BR-116, siga sentido norte por aproximadamente 50km até Tabuleiro do Norte.
                    Siga as sinalizações para o Haras Martins na entrada da cidade.
                  </p>
                </div>
                <div className="bg-campori-dark-blue p-4 rounded-lg mb-6">
                  <h4 className="text-campori-orange font-semibold mb-2">A partir de Quixeré</h4>
                  <p className="text-gray-300 mb-2">Tempo aproximado: 26min de viagem</p>
                  <p className="text-gray-300">
                  Siga pela CE-377 em direção a Tabuleiro do Norte. São aproximadamente 18km de estrada. 
                  Ao chegar à cidade, siga as placas e sinalizações para o Parque de Vaquejada Haras Martins.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-campori-dark-teal/30">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Hospedagem e Alimentação
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Área de Acampamento</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cada clube terá uma área designada para montar suas barracas, de acordo com o número de participantes. 
                A organização fornecerá um mapa detalhado da área de acampamento com antecedência.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                O local possui terreno plano e sombreado, ideal para acampamento, com pontos de água potável distribuídos 
                estrategicamente e iluminação noturna em todas as áreas comuns.
              </p>
              <div className="bg-campori-dark-blue p-4 rounded-lg">
                <h4 className="text-campori-orange font-semibold mb-2">Importante</h4>
                <p className="text-gray-300 text-sm">
                  Cada clube deve trazer seu próprio equipamento de camping, incluindo barracas, 
                  colchonetes, sacos de dormir e demais itens necessários.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Alimentação</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                O Campori oferece duas opções de alimentação para os clubes:
              </p>
              <div className="space-y-4">
                <div className="bg-campori-dark-blue p-4 rounded-lg">
                  <h4 className="text-campori-orange font-semibold mb-2">Cozinha Própria</h4>
                  <p className="text-gray-300 text-sm">
                    Cada clube pode trazer e montar sua própria cozinha em áreas designadas do acampamento.
                    Essa opção oferece maior autonomia e flexibilidade nas refeições.
                  </p>
                </div>
                
                <div className="bg-campori-dark-blue p-4 rounded-lg">
                  <h4 className="text-campori-orange font-semibold mb-2">Mega Cozinha</h4>
                  <p className="text-gray-300 text-sm">
                    Organizada pela equipe do Campori, a Mega Cozinha oferecerá todas as refeições diárias.
                    Esta opção é ideal para clubes que preferem não se preocupar com a logística de alimentação.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalPage; 