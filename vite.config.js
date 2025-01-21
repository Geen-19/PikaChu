import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set to the root
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json']
  },
  esbuild: {
    loader: 'jsx',
    include: /\.[jt]sx?$/  // This will handle .js, .jsx, .ts, and .tsx files
  },
})