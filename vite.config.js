import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import reaact from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    reaact(),
    tailwindcss(),
  ],
})