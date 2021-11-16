const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#2563eb'
            },
            code: {
              background: '#DBEAFE',
              color: '#2563EB'
            }
          }
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },

  plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
