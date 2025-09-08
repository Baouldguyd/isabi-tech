import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4FBB',
          hover: '#0945a0',
        },
        secondary: '#EBEDEE',
        accent: '#F5F8FA',
        dark: '#333333',
        light: '#666666',
        background: {
          light: '#F7F8FA',
          dark: '#EEF2F8',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #0A4FBB, #0945a0)",
      },
      boxShadow: {
        'light': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'dark': '0 20px 25px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
};
export default config;