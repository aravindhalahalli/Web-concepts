/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins:[
    require('@tailwindcss/forms'),
  ],
  theme: {
    fontSize: {
      zbsm    : ['0.75rem',{}],
      zbbase  : ['0.875rem',{}],
      zblg    : ['1.25rem',{}],
    },
    extend: {
      fontFamily: {
        sans: ['nexa', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          500 : '#6366f1', // FOCUS
          600 : '#490783', // BUTTON, SLIDER HIGHLIGHT
          700 : '#240c50', // SLIDER BACKGROUND COLOR
        },
        'secondary': {
          500 : '#F472B6', // ACTIVE RADIO BUTTON AND CHECKBOX
          600 : '#EC4899', 
          700 : '#da077b', // SLIDE BAR ACTIVE
        },          
        'zbblack'     : "#2D2D2D", // MAIN TEXT COLOR
        'zbgray'      : {
            50  : "#F9FAFB", // THEAD 
            100 : "#F1F5F9", // TABLE HOVER
            200 : "#E5E7EB", // BORDER  D1D5DB
            500 : "#7B7B7B", // SUMMARY , PAGE DESCRIPTION
        }
      }
    }
  },
}

