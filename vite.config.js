import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // <-- This exposes it on your local network
    port: 5173, // optional, default is 5173
  },
})
