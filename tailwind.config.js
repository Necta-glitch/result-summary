/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      hanken : 'Hanken Grotesk',
    },
    extend: {colors: {
      blues: '#4D37F5',
      Violet : '#4D37F5',
      lavande : 'hsl(241, 100%, 89%)',
      pale :'hsl(224, 30%, 27%)',
      'Light' : 'hsl(0, 100%, 67%)',
      'Orangey' : 'hsl(39, 100%, 56%)',
      'Green': 'hsl(166, 100%, 87%)',
      'Cobalt': 'hsl(234, 85%, 45%)',
    },},
    
  },
  plugins: [],
}

