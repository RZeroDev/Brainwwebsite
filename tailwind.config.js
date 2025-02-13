/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
         'poppins': ['Poppins', 'sans-serif'],
          'lora': ['Lora', 'serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
          'figtree': ['Figtree', 'sans-serif'],
          'rubik': ['Rubik', 'sans-serif'],
        },
    
     
      inset: {
        '15p': '15%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
      },
      width: {
        '15p': '15%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
        '40p': '40%',
        '45p': '45%',
        '70p': '70%',
        '75p': '75%',
      },
      padding: {
        '10p': '10%',
      
      },



      fontSize: {
        '3xl': '03rem', 
        '4xl': '04rem', 
        '5xl': '05rem', 
        '5.5xl': '05.5rem',
        '6xl': '06rem',  
        '7xl': '07rem', 
        '8xl': '08rem',
        '9xl': '09rem',  
        '9.1xl': '09.1rem', 
        '10xl': '10rem',  
        '11xl': '12rem',  
        '12xl': '14rem',  
      },
      colors: {
      'custom-bleu-nuit': '#161C2D',
      'custom-green': '#68D585',
      'custom-bleu1': '#473BF0',
      'custom-bleu2': '#1082E9',
      'custom-gray': '#ECF2F7',

      },
      boxShadow: {
        'outline-text': '0 0 0 1px rgba(0, 0, 0, 0), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
      },
      rotate: {
        '-15': '-15deg',
        // Vous pouvez ajouter d'autres rotations personnalisées si nécessaire
      },
      lineHeight: {
        'extra-tight': '0.9',
        '12': '3rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-outline': {
          textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
        },
        '.text-shadow-outline_1': {
          textShadow: '-1px -1px 0 #8fad00, 1px -1px 0 #8fad00, -1px 1px 0 #8fad00, 1px 1px 0 #8fad00',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}



