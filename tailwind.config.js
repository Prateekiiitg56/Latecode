/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#0a0a0f',
        'editor-dark': '#0d1117',
        'raised-dark': '#161b22',
        'subtle-line': '#21262d',
        'accent-primary': '#00ff87',
        'accent-secondary': '#7c3aed',
        'easy-diff': '#00b341',
        'med-diff': '#f0a500',
        'hard-diff': '#ff4d4f',
        'body-text': '#c9d1d9',
        'muted-text': '#484f58',
        'success-verd': '#00ff87',
        'fail-verd': '#ff4d4f'
      },
      fontFamily: {
        ui: ['Geist', 'DM Sans', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
