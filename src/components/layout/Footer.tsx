import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-campori-dark-blue border-t border-campori-dark-teal/50">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo e informações */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img src="/logo-campori.svg" alt="Logo Campori" className="h-12 w-auto" />
                <span className="ml-3 text-xl font-bold text-campori-orange">
                  Campori 2025
                </span>
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Um evento inesquecível de aventura, amizade e crescimento espiritual para Desbravadores.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Data:</strong> 20 a 23 de novembro de 2025
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-campori-orange transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/14regiaoace?igsh=MWx1cHZnaDFvYm84ZQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-campori-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@14regiaodbv-valedojaguarib55/videos" target="_blank" rel="noopener noreferrer" className="text-white hover:text-campori-orange transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold text-campori-orange mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-campori-orange mr-2 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://maps.app.goo.gl/Wcgio4ZHN5Xja6KY6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-campori-orange transition-colors"
                >
                  Parque Haras Martins, Tabuleiro do Norte, CE
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-campori-orange mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">(00) 0000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-campori-orange mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">contato@campori2025.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Linha de direitos autorais */}
        <div className="border-t border-campori-dark-teal/30 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Campori de Desbravadores 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 