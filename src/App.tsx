import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loading from './components/Loading';
import ErrorBoundary from './components/common/ErrorBoundary';
import { COLORS } from './constants/theme';

// Lazy loading para todas as páginas
const HomePage = lazy(() => import('./pages/HomePage'));
const SobrePage = lazy(() => import('./pages/SobrePage'));
const LocalPage = lazy(() => import('./pages/LocalPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BoletinsPage = lazy(() => import('./pages/BoletinsPage'));
const GaleriaPage = lazy(() => import('./pages/GaleriaPage'));

// Componente de carregamento
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <Loading fullScreen text="Carregando o site do Campori 2025..." />
  </div>
);

function App() {
  return (
    <div className="bg-campori-dark-blue text-white min-h-screen" style={{ backgroundColor: COLORS.darkBlue }}>
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<LoadingFallback />}>
                  <HomePage />
                </Suspense>
              } />
              <Route path="/sobre" element={
                <Suspense fallback={<LoadingFallback />}>
                  <SobrePage />
                </Suspense>
              } />
              <Route path="/local" element={
                <Suspense fallback={<LoadingFallback />}>
                  <LocalPage />
                </Suspense>
              } />
              <Route path="/blog" element={
                <Suspense fallback={<LoadingFallback />}>
                  <BlogPage />
                </Suspense>
              } />
              <Route path="/boletins" element={
                <Suspense fallback={<LoadingFallback />}>
                  <BoletinsPage />
                </Suspense>
              } />
              <Route path="/galeria" element={
                <Suspense fallback={<LoadingFallback />}>
                  <GaleriaPage />
                </Suspense>
              } />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
