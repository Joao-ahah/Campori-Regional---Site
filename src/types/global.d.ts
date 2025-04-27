/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface Window {
  [key: string]: any;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.ico';
declare module '*.webp';
declare module '*.mp4';
declare module '*.webm';
declare module '*.pdf'; 