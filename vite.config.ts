import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@entities': path.resolve(__dirname, 'src', 'entities'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
})
