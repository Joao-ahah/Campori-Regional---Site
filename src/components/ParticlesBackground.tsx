import { useState, useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Configurar o tamanho da janela
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ajusta o tamanho do canvas ao tamanho da janela
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Configura a classe de partículas
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        // Garantir que canvas não seja null
        const canvasWidth = canvas ? canvas.width : window.innerWidth;
        const canvasHeight = canvas ? canvas.height : window.innerHeight;
        
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = getRandomColor();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebate nas bordas da tela (garantindo que canvas não seja null)
        const canvasWidth = canvas ? canvas.width : window.innerWidth;
        const canvasHeight = canvas ? canvas.height : window.innerHeight;
        
        if (this.x > canvasWidth || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvasHeight || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Função para obter cores aleatórias nas tonalidades do tema
    function getRandomColor() {
      const colors = [
        'rgba(223, 142, 35, 0.5)',  // Laranja
        'rgba(223, 142, 35, 0.3)',  // Laranja mais transparente
        'rgba(255, 255, 255, 0.2)'  // Branco transparente
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Array para armazenar as partículas
    const particlesArray: Particle[] = [];

    // Inicializa as partículas
    function init() {
      const particleCount = windowSize.width < 768 
        ? 30  // Menos partículas em dispositivos móveis
        : 50; // Mais partículas em desktops
        
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Anima as partículas
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    }

    // Event listeners e inicialização
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    init();
    animate();

    // Limpeza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full opacity-70"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Colocar atrás de tudo
        pointerEvents: 'none', // Garantir que não bloqueia cliques
        opacity: 0.7
      }}
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground; 