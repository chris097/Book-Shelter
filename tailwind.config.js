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
        40: '40px',
        56: '56px',
        116: '116px',
        180: '180px',
        201: '201px',
        249: '249px',
        260: '260px',
        268: '268px',
        282: '282px',
        369: '369px',
        400: '400px',
        480: '480px',
        500: '500px',
        670: '670px',
      },
      height:{
        30: '30px',
        35: '35px',
        40: '40px',
        45: '45px',
        56: '56px',
        60: '60px',
        120: '120px',
        150: '150px',
        238: '238px',
        331: '331px',
        369: '369px',
      },
      fontSize:{
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        24: '24px',
        36: '36px',
      },
      fontFamily: {
        DanScript: ['Dancing Script', 'cursive'],
        Rubik: ['Rubik', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'last'],
    },
  },
  plugins: [],
}
