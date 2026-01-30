declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.otf';
