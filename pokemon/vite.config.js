import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5001
  },
  preview: {
    port: 5001
  },
  plugins: [react(),
    federation({
      name: 'pokemon',
      filename: 'remoteEntry.js',
      exposes: {
        './CharacterList': './src/components/CharacterList.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  }
})
