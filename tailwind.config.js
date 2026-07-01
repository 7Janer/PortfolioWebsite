/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: 'rgba(255, 255, 255, 0.03)',
        primary: '#3b82f6',
        accent: '#8b5cf6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      animation: {
        'pulse-glow': 'pulseGlow 8s infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', opacity: 0.15 },
          '50%': { transform: 'translate(40px, -60px) scale(1.2)', opacity: 0.25 },
          '100%': { transform: 'translate(-20px, 20px) scale(0.9)', opacity: 0.15 },
        }
      }
    },
  },
  plugins: [],
}