import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Ativação do modo escuro via classe CSS
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px"
    },
    extend: {
      backgroundImage: {
        hero: 'url(/hero/hero-bg.png)', // Imagem de fundo para o herói
        hero_shape: 'url(/hero/shape-1.svg)',
        hero_shape_light_2: 'url(/hero/shape-2-light.svg)',
        hero_shape_dark_2: 'url(/hero/shape-2-dark.svg)',
        moon_light: 'url(/about/light-moon.svg)',
        moon_dark: 'url(/about/dark-moon.svg)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        darkMode: {
          DEFAULT: 'hsl(262.1, 83.3%, 75%)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',   // Ajuste para o border-radius grande
        md: 'calc(var(--radius) - 2px)', // Ajuste para o border-radius médio
        sm: 'calc(var(--radius) - 4px)'  // Ajuste para o border-radius pequeno
      },
    }
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' })], // Plugin para animações no Tailwind CSS
};

export default config;
