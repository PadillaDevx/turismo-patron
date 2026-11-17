import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages sirve el sitio en /turismo-patron/
  base: process.env.GITHUB_PAGES ? '/turismo-patron/' : '/',
  plugins: [react(), tailwindcss()],
})
