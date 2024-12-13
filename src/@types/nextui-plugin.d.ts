declare module '@nextui-org/react' {
  const nextui: () => {
    config: {
      darkMode: string;
      themes: Record<string, any>;
    };
    theme: Record<string, any>;
    prefix: string;
  };
} 