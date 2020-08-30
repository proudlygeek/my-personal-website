module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.js']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro'],
        serif: ['Libre Baskerville']
      },
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" }
      }
    },
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.black"),
          backgroundColor: config("theme.colors.white")
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.black")
          }
        }
      });
    }
  ],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
