/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6500",
        dark:"#000000",
        secondary:"#000016",
        light:"#FFF",
      },
      fontFamily: {
      'sans': ['Poppins' ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
      backgroundImage: {
        heroBg: "url('/src/assets/graphics/hero.jpg')",
        heroBg2: "url('/src/assets/graphics/hero2.jpg')",
        chatBg: "url('/src/assets/graphics/chat.jpg')",
        svg1: "url('/src/assets/graphics/svg1.svg')",
        svg2: "url('/src/assets/graphics/svg2.svg')",
        svg3: "url('/src/assets/graphics/svg3.svg')",
        
      }
    },
  },
  plugins: [],
}
