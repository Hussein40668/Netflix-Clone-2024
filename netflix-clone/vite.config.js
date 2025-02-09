import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-Clone-2024/",
  server: {
    port: 2025,
  },
});

// https://hussein40668.github.io/Netflix-Clone-2024/