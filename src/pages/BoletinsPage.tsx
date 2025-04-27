import { motion } from 'framer-motion';
import BulletinsSection from '../components/bulletins/BulletinsSection';
import ParticlesBackground from '../components/ParticlesBackground';
import { FileText, Download } from 'lucide-react';

const BoletinsPage = () => {
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
            Boletins Informativos
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            Documentos oficiais com orientações e informações importantes sobre o Campori 2025
          </p>
        </div>
      </motion.div>
      
      <BulletinsSection />
      
      <section className="py-20 bg-campori-dark-teal/30">
        <div className="container-section">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Documentos Importantes
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <DocumentCard 
              title="Manual do Participante"
              description="Informações essenciais e orientações para todos os participantes do Campori."
              date="10/06/2024"
              fileType="PDF"
              fileSize="2.3 MB"
              fileUrl="/documents/manual-participante.pdf"
            />
            
            <DocumentCard 
              title="Formulário de Inscrição"
              description="Documento oficial para inscrição dos clubes. Preencha e envie conforme as instruções."
              date="15/06/2024"
              fileType="DOC"
              fileSize="1.1 MB"
              fileUrl="#"
            />
            
            <DocumentCard 
              title="Termo de Responsabilidade"
              description="Documento obrigatório que deve ser assinado pelos responsáveis dos participantes menores de idade."
              date="15/06/2024"
              fileType="PDF"
              fileSize="420 KB"
              fileUrl="#"
            />
            
            <DocumentCard 
              title="Lista de Materiais"
              description="Lista completa dos itens que cada participante e clube deve levar para o Campori."
              date="20/06/2024"
              fileType="PDF"
              fileSize="1.5 MB"
              fileUrl="#"
            />
            
            <DocumentCard 
              title="Regulamento das Competições"
              description="Regras e orientações para as atividades competitivas que acontecerão durante o evento."
              date="25/06/2024"
              fileType="PDF"
              fileSize="3.2 MB"
              fileUrl="#"
            />
            
            <DocumentCard 
              title="Mapas e Localizações"
              description="Mapas detalhados do local do evento, incluindo áreas de acampamento e pontos importantes."
              date="30/06/2024"
              fileType="PDF"
              fileSize="5.7 MB"
              fileUrl="#"
            />
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
            Perguntas Frequentes Sobre Documentação
          </motion.h2>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">Quando os documentos devem ser enviados?</h3>
              <p className="text-gray-300">
                Todos os documentos obrigatórios devem ser enviados até 30 dias antes do início do Campori. 
                As inscrições com documentação incompleta não serão processadas. Recomendamos não deixar para a última hora.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">Como enviar os documentos?</h3>
              <p className="text-gray-300">
                Os documentos podem ser enviados através do portal oficial do Campori 2025, na seção "Inscrições". 
                Em caso de dificuldades, entre em contato com a secretaria regional através do e-mail oficial.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6 bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">Quais documentos são obrigatórios?</h3>
              <p className="text-gray-300">
                Os documentos obrigatórios incluem: formulário de inscrição do clube, termo de responsabilidade 
                assinado para cada participante menor de idade, ficha médica e cópia do documento de identidade.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-campori-dark-teal/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-campori-orange mb-3">O que acontece se algum documento estiver faltando?</h3>
              <p className="text-gray-300">
                A inscrição ficará pendente até que todos os documentos sejam apresentados. Se a documentação 
                não for completada até o prazo final, a inscrição poderá ser cancelada e a vaga liberada para outro clube.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface DocumentCardProps {
  title: string;
  description: string;
  date: string;
  fileType: string;
  fileSize: string;
  fileUrl: string;
}

const DocumentCard = ({ title, description, date, fileType, fileSize, fileUrl }: DocumentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-campori-dark-blue p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-start mb-4">
        <FileText className="text-campori-orange mr-3 flex-shrink-0" size={24} />
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">Publicado em {date}</p>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-6">{description}</p>
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-400">
          {fileType} • {fileSize}
        </span>
        
        <motion.a
          href={fileUrl}
          target={fileUrl !== "#" ? "_blank" : undefined}
          rel={fileUrl !== "#" ? "noopener noreferrer" : undefined}
          className="btn btn-primary py-1.5 px-3 text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Download size={16} className="mr-1" />
          Baixar
        </motion.a>
      </div>
    </motion.div>
  );
};

export default BoletinsPage; 