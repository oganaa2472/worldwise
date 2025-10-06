import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// single page application
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
