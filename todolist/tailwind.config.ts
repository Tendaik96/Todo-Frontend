import type { Config } from "tailwindcss";
import {fontFamily} from 'tailwindcss/defaultTheme'


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headFont: ["var(--abrilFatFaceFont)", ...fontFamily.serif],
        bodyFont: ["var(--alumniFont)", ...fontFamily.sans]
      },
      colors: {
        todoColors: {
          seaBlue: "#068CDB",
          darkBlue: "#003554",
          correctGreen: "#06DB4E",
          purple: "#6406DB",
          cyan: "#8EA5B2"
        },
      },
       borderRadius: {
      '3xl': '60px',
      },
       screens: {
      'sm': '320px',
         // => @media (min-width: 320px) { ... }
         
      'smUnique': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    },
  },
  plugins: [],
};
export default config;
