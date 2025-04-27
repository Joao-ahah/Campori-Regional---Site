import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [windowWidth, setWindowWidth] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Configurar o tamanho da janela
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Criar o elemento de áudio programaticamente
    audioRef.current = new Audio('/musica-tema.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Limpar ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error('Erro ao reproduzir áudio:', e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const containerStyle = {
    position: 'fixed' as const,
    bottom: '1rem',
    right: '1rem',
    zIndex: 50,
    backgroundColor: 'rgba(1, 35, 42, 0.9)',
    padding: '0.75rem',
    borderRadius: '9999px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const buttonStyle = {
    backgroundColor: '#df8e23',
    padding: '0.5rem',
    borderRadius: '9999px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    outline: 'none'
  };

  const iconStyle = {
    color: 'white'
  };

  const volumeContainerStyle = {
    display: windowWidth < 768 ? 'none' : 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const rangeStyle = {
    width: '5rem',
    height: '0.25rem',
    backgroundColor: '#4b5563',
    borderRadius: '0.5rem',
    appearance: 'none' as const,
    cursor: 'pointer'
  };

  const textStyle = {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.8)',
    display: windowWidth < 768 ? 'none' : 'block'
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 bg-campori-dark-blue/90 p-3 rounded-full shadow-lg flex items-center space-x-2"
      style={containerStyle}
    >
      <button 
        onClick={togglePlay}
        className="bg-campori-orange p-2 rounded-full hover:bg-opacity-80 transition-colors"
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c67d1e'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#df8e23'}
        aria-label={isPlaying ? 'Pausar música' : 'Reproduzir música'}
      >
        {isPlaying ? (
          <Pause size={18} className="text-white" style={iconStyle} />
        ) : (
          <Play size={18} className="text-white" style={iconStyle} />
        )}
      </button>
      
      <div 
        className="hidden md:flex items-center space-x-2"
        style={volumeContainerStyle}
      >
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          style={rangeStyle}
          aria-label="Volume"
        />
        
        <button
          onClick={toggleMute}
          className="text-white hover:text-campori-orange transition-colors"
          style={{ 
            color: 'white', 
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            padding: '0.25rem'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#df8e23'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? (
            <VolumeX size={18} />
          ) : (
            <Volume2 size={18} />
          )}
        </button>
      </div>
      
      <div 
        className="text-xs text-white/80 hidden md:block"
        style={textStyle}
      >
        Música Tema
      </div>
    </div>
  );
};

export default AudioPlayer; 