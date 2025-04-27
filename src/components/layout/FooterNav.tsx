import { useLocation } from 'react-router-dom';
import { Home, Info, MapPin, FileText, Image } from 'lucide-react';
import { COLORS } from '../../constants/theme';

const FooterNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/sobre', label: 'Sobre', icon: <Info size={20} /> },
    { path: '/local', label: 'Local', icon: <MapPin size={20} /> },
    { path: '/boletins', label: 'Boletins', icon: <FileText size={20} /> },
    { path: '/galeria', label: 'Galeria', icon: <Image size={20} /> },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-campori-dark-teal py-3 border-t border-gray-700 fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex justify-around items-center">
        <a
          href="/"
          className={`
            flex flex-col items-center justify-center text-xs
            ${location.pathname === '/' ? 'text-campori-orange' : 'text-gray-400'}
            transition-colors duration-200
          `}
          style={{ color: location.pathname === '/' ? COLORS.orange : undefined }}
        >
          <span className="mb-1"><Home size={20} /></span>
          <span>Início</span>
        </a>
      
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`
              flex flex-col items-center justify-center text-xs
              ${isActive(item.path) ? 'text-campori-orange' : 'text-gray-400'}
              transition-colors duration-200
            `}
            style={{ color: isActive(item.path) ? COLORS.orange : undefined }}
          >
            <span className="mb-1">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FooterNav; 