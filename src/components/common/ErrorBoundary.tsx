import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/theme';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Componente que captura erros em componentes filhos e exibe uma interface amigável
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Você pode registrar o erro em um serviço de monitoramento aqui
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold text-campori-orange mb-4">
            Ops! Algo deu errado
          </h2>
          <p className="mb-6 text-gray-300 max-w-md">
            Desculpe, encontramos um problema ao carregar esta página. 
            Tente novamente ou volte para a página inicial.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-campori-dark-teal rounded-md hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: COLORS.darkTeal }}
            >
              Tentar Novamente
            </button>
            <Link 
              to="/"
              className="px-4 py-2 bg-campori-orange rounded-md hover:bg-opacity-80 transition-all"
              style={{ backgroundColor: COLORS.orange }}
            >
              Voltar ao Início
            </Link>
          </div>
          {this.state.error && process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-red-900/30 rounded-md text-left max-w-2xl overflow-auto">
              <p className="font-mono text-sm text-red-200">
                {this.state.error.toString()}
              </p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 