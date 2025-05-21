import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5002
  },
  preview: {
    port: 5002
  },
  plugins: [react(),
    federation({
      name: 'digimon',
      filename: 'remoteEntry.js',
      exposes: {
        './CharacterList': './src/components/CharacterList.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
