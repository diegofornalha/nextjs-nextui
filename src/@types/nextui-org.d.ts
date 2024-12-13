declare module '@nextui-org/react' {
  export const nextui: () => {
    name: string;
    content: string[];
  };
}

declare module 'tailwindcss' {
  interface Config {
    content: string[];
    theme?: {
      extend?: Record<string, any>;
    };
    plugins?: any[];
    darkMode?: 'class' | 'media';
  }

  export type { Config };
} 