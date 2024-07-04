import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // if you don't want default port
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  }
})
