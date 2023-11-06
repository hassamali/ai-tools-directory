import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          // primary: '#333333', // Example primary dark color
          // secondary: '#444444' // Example secondary dark color
          // Add more dark mode colors as needed
        },
      },
    },
    // Other theme configurations as needed...
  },
  plugins: [],
}

export default config
