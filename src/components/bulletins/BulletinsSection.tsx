import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, X } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Dados de exemplo para os boletins
const bulletins = [
  {
    id: 1,
    title: 'Boletim Informativo #1',
    description: 'Informações gerais sobre o Campori e cronograma das inscrições.',
    date: 'Maio 2025',
    file: '/bulletins/boletim-02.pdf', 
  },
  // Comenta os outros boletins para exibir apenas o #1 que já existe
  /*
  {
    id: 2,
    title: 'Boletim Informativo #2',
    description: 'Detalhes sobre as atividades e programação do evento.',
    date: 'Março 2025',
    file: '/bulletins/boletim-02.pdf',
  },
  {
    id: 3,
    title: 'Boletim Informativo #3',
    description: 'Orientações sobre o que levar e regras do acampamento.',
    date: 'Maio 2025',
    file: '/bulletins/boletim-03.pdf',
  },
  {
    id: 4,
    title: 'Boletim Informativo #4',
    description: 'Últimas informações e preparativos finais para o evento.',
    date: 'Agosto 2025',
    file: '/bulletins/boletim-04.pdf',
  },
  */
];

const BulletinsSection = () => {
  const [selectedBulletin, setSelectedBulletin] = useState<typeof bulletins[0] | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [pdfError, setPdfError] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openPdfViewer = (bulletin: typeof bulletins[0]) => {
    setSelectedBulletin(bulletin);
    setPdfError(false);
    setNumPages(null);
  };

  const closePdfViewer = () => {
    setSelectedBulletin(null);
    setPdfError(false);
    setNumPages(null);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPdfError(false);
  };

  const onDocumentLoadError = () => {
    setPdfError(true);
  };

  return (
    <section id="boletins" className="py-20 bg-campori-dark-teal/20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Boletins Informativos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Acompanhe os boletins oficiais com todas as informações e orientações para o Campori 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulletins.map((bulletin, index) => (
            <BulletinCard 
              key={bulletin.id} 
              bulletin={bulletin} 
              index={index} 
              onView={openPdfViewer} 
            />
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedBulletin && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-campori-dark-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-campori-dark-teal">
              <h3 className="text-xl font-bold text-white">{selectedBulletin.title}</h3>
              <button
                onClick={closePdfViewer}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar visualizador"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 flex-grow flex flex-col items-center justify-center">
              {pdfError ? (
                <div className="text-center py-10">
                  <div className="text-red-500 mb-4">
                    Ocorreu um erro ao carregar o documento. Por favor, tente baixar o PDF.
                  </div>
                  <a
                    href={selectedBulletin.file}
                    download
                    className="inline-flex items-center bg-campori-orange text-white py-2 px-4 rounded-md hover:bg-campori-orange/90 transition-colors"
                  >
                    <Download size={18} className="mr-2" />
                    Baixar PDF
                  </a>
                </div>
              ) : (
                <Document
                  file={selectedBulletin.file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={<div className="text-center text-white py-10">Carregando documento...</div>}
                  error={<div className="text-center text-red-500 py-10">Erro ao carregar o documento. Tente novamente ou baixe o PDF.</div>}
                  options={{ cMapUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/cmaps/', cMapPacked: true }}
                >
                  {numPages && Array.from(new Array(numPages), (_, index) => (
                    <Page 
                      key={`page_${index + 1}`} 
                      pageNumber={index + 1} 
                      width={windowWidth > 768 ? 600 : 300}
                      className="mb-4"
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  ))}
                </Document>
              )}
            </div>
            
            <div className="p-4 border-t border-campori-dark-teal flex justify-between">
              <div className="text-gray-300">
                {numPages && <span>Total de páginas: {numPages}</span>}
              </div>
              <a
                href={selectedBulletin.file}
                download
                className="inline-flex items-center text-campori-orange hover:text-white transition-colors"
              >
                <Download size={18} className="mr-2" />
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface BulletinCardProps {
  bulletin: {
    id: number;
    title: string;
    description: string;
    date: string;
    file: string;
  };
  index: number;
  onView: (bulletin: typeof bulletins[0]) => void;
}

const BulletinCard = ({ bulletin, index, onView }: BulletinCardProps) => {
  return (
    <motion.div
      className="bg-campori-dark-blue rounded-lg shadow-lg p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-campori-orange rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
        <FileText size={24} className="text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{bulletin.title}</h3>
      <p className="text-gray-400 text-sm mb-1">{bulletin.date}</p>
      <p className="text-gray-300 text-sm mb-6 flex-grow">{bulletin.description}</p>
      
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onView(bulletin)}
          className="flex-1 flex items-center justify-center bg-campori-dark-teal hover:bg-campori-dark-teal/80 text-white rounded-md py-2 px-3 transition-colors"
        >
          <Eye size={16} className="mr-2" />
          Visualizar
        </button>
        
        <a
          href={bulletin.file}
          download
          className="flex items-center justify-center bg-campori-orange/90 hover:bg-campori-orange text-white rounded-md py-2 px-3 transition-colors"
        >
          <Download size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default BulletinsSection; 