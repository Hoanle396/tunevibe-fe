import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1480px",
    },
    extend: {
      backgroundImage: {
        // singerOverlay: "url()",
        music: "url(/assets/bg.svg)",
      },
      fontFamily: {
        alexBrush: ["var(--font-alexBrush)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: '#06062A',
        secondary: '#151538',
        tertiary: '#242445',
        accent: {
          DEFAULT: '#7f1cfc',
          hover: '#6519c6'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
export default config;
