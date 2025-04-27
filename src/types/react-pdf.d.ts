declare module 'react-pdf' {
  import { ComponentType, ReactElement } from 'react';
  
  export const Document: ComponentType<{
    file: string;
    onLoadSuccess?: (pdf: { numPages: number }) => void;
    onLoadError?: () => void;
    loading?: ReactElement;
    error?: ReactElement;
    children?: React.ReactNode;
    options?: {
      cMapUrl?: string;
      cMapPacked?: boolean;
    };
  }>;
  
  export const Page: ComponentType<{
    pageNumber: number;
    width?: number;
    className?: string;
    renderTextLayer?: boolean;
    renderAnnotationLayer?: boolean;
  }>;
  
  export interface PDFDocumentProxy {
    numPages: number;
  }
  
  export const pdfjs: {
    GlobalWorkerOptions: {
      workerSrc: string;
    };
    version: string;
  };
} 