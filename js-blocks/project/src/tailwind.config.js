const componentsDir = new URL('./components', import.meta.url).pathname

export default {
  content: [`${componentsDir}/**/*.{html,jsx}`, 'components/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        // your custom colors
      },
      fontFamily: {
        // your custom fonts
      },
      borderRadius: {
        // your custom element properties
      }
    }
  },
  plugins: []
}
