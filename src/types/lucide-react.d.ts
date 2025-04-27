declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export const Car: FC<IconProps>;
  export const MapPin: FC<IconProps>;
  export const Clock: FC<IconProps>;
  export const Train: FC<IconProps>;
  export const Bus: FC<IconProps>;
  export const FileText: FC<IconProps>;
  export const Download: FC<IconProps>;
  export const Eye: FC<IconProps>;
  export const X: FC<IconProps>;
  export const Menu: FC<IconProps>;
  export const ChevronDown: FC<IconProps>;
  export const ChevronUp: FC<IconProps>;
  export const ChevronRight: FC<IconProps>;
  export const ChevronLeft: FC<IconProps>;
  export const Instagram: FC<IconProps>;
  export const Facebook: FC<IconProps>;
  export const Twitter: FC<IconProps>;
  export const Youtube: FC<IconProps>;
  export const Mail: FC<IconProps>;
  export const Phone: FC<IconProps>;
  export const Calendar: FC<IconProps>;
  export const Map: FC<IconProps>;
  export const Info: FC<IconProps>;
  export const AlertCircle: FC<IconProps>;
  export const CheckCircle: FC<IconProps>;
  export const User: FC<IconProps>;
  export const Users: FC<IconProps>;
  export const Home: FC<IconProps>;
  export const BookOpen: FC<IconProps>;
  export const Award: FC<IconProps>;
  export const Play: FC<IconProps>;
  export const Pause: FC<IconProps>;
  export const Volume2: FC<IconProps>;
  export const VolumeX: FC<IconProps>;
  export const ArrowRight: FC<IconProps>;
  export const Image: FC<IconProps>;
  export const ExternalLink: FC<IconProps>;
} 