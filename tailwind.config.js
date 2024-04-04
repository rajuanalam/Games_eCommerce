import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Container width start
      maxWidth: {
        "container": "1668px",
      },
     // Container width end

     // Color start
     colors: {
      'primaryColor': "#",
      'searchBgColor' : "#1E2127",
      'searchIconColor' : "#B2B8C2",
      'buttonColorOne' : "#FC00FF",
      'buttonColorTwo' : "#00DBDE",
      'borderOneColor' : "#18C5E1",
      'borderTwoColor' : "#8666EF",
      'borderThreeColor' : "#FB01FF",
      'imageRingColor' : "#303030",
      'textColor' : "#78797D",
      'priceColor' : "#E614FC",
      "saveColor" : "#28B8E3"
      

      
     },
     // Color end

     screens: {
      'xs': {'min': '320px', 'max': '575px'},
      // => @media (min-width: 320px and max-width: 575px) { ... }
      'sm': {'min': '576px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      },

      // Font Family start
      fontFamily: {
        
        'dmSans': ["DM Sans"],
        'Poppins': ["Poppins"],
        
      },
      // Font Family end


       // Spacing Start
       spacing: {
        's300': '300px !important',
        's48': '48px !important',
        's136': '136px',
        's350': '350px',
        's1328': '1328px',
        's72': '72px',
        's112': '112px',
        's376': '376px',
        's293': '293px',
        's10': '10px',
        's6': '6px',
        's512': '512px',
        's360': '360px',
      },
      // Spacing End

    

      // Border Radius Start
      borderRadius: {
        'r28': '28px',
        'r20': '20px',
      },
      // Border Redius Start

      // Font Size Start
      fontSize: {
        t128: '128px',
        t40: '40px',
      },
      // Font Size End

      // Box Shadow Start
      boxShadow: {
        'locationShadow': '0px 43px 66px rgba(0,0,0,0.07)',
        'category': '0px 2px 4px rgba(14,86,124,0.16)',
        'trendingCard': '0px 2px 4px rgba(14,86,124,0.16)',
        'heartShadow': ' 0px 4px 8px rgba(44,44,44,0.1)',
      },
      // Box Shadow End

      screens: {
      'xs': {'min': '320px', 'max': '575px'},
      // => @media (min-width: 320px and max-width: 575px) { ... }
      'sm': {'min': '576px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      },

    },
  },
  plugins: [],
  presets: [keepPreset],
}

