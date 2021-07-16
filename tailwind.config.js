module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlack: '#222531',
        primaryYellow: '#FFCE31',
        primaryBlue: '#0D75FF',
        primaryRed: '#FF6231',
        primaryGray: '#58667E',
        lowGray: '#757881',
        secondaryBlue: '#F8FAFD',
        lowBlue: '#B8B9BE',
      },
      width:{
        30: '30px',
        56: '56px',
        260: '260px',
        116: '116px',
        249: '249px',
        282: '282px',
        369: '369px',
        400: '400px',
        500: '500px',
      },
      height:{
        30: '30px',
        35: '35px',
        56: '56px',
        238: '238px',
        369: '369px',
      },
      fontSize:{
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        36: '36px',
      },
      fontFamily: {
        DanScript: ['Dancing Script', 'cursive'],
        Rubik: ['Rubik', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
