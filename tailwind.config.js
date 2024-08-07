/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow':'spin 8s linear infinite'
      },
      boxShadow: {
        custom: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      },
       backgroundImage:{
        circularLight:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,  #f5f5f5 100px)",
        circularDark:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px,  #1b1b1b 100px)",
        circularLightMobile:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px,  #f5f5f5 30px)",
        circularDarkMobile:"repeating-radial-gradient(rgba(255,255,255,0.8) 2px, #1b1b1b 5px,  #1b1b1b 30px)"
       },
      screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
},
    }
  },
  plugins: [],
};

