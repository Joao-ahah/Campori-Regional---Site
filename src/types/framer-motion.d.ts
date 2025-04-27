declare module 'framer-motion' {
  import { ComponentType, ReactElement, FC, ReactNode } from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }

  export interface LayoutProps {
    children: ReactNode;
  }

  type MotionComponent<T extends keyof JSX.IntrinsicElements> = ComponentType<
    JSX.IntrinsicElements[T] & MotionProps
  >;

  export interface Motion {
    div: MotionComponent<'div'>;
    span: MotionComponent<'span'>;
    h1: MotionComponent<'h1'>;
    h2: MotionComponent<'h2'>;
    h3: MotionComponent<'h3'>;
    h4: MotionComponent<'h4'>;
    h5: MotionComponent<'h5'>;
    h6: MotionComponent<'h6'>;
    p: MotionComponent<'p'>;
    a: MotionComponent<'a'>;
    button: MotionComponent<'button'>;
    img: MotionComponent<'img'>;
    ul: MotionComponent<'ul'>;
    li: MotionComponent<'li'>;
    ol: MotionComponent<'ol'>;
    section: MotionComponent<'section'>;
    article: MotionComponent<'article'>;
    nav: MotionComponent<'nav'>;
    footer: MotionComponent<'footer'>;
    header: MotionComponent<'header'>;
    main: MotionComponent<'main'>;
    form: MotionComponent<'form'>;
    input: MotionComponent<'input'>;
    textarea: MotionComponent<'textarea'>;
    select: MotionComponent<'select'>;
    [key: string]: any;
  }

  export const motion: Motion;
  export const AnimatePresence: FC<{ children: ReactNode; mode?: 'sync' | 'wait' | 'popLayout' }>;
} 