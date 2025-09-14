import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // change to '0.0.0.0' for LAN access
    port: 3000, // place your host number here, e.g., 3000 
    strictPort: true // fail if port is in use
  }
})
