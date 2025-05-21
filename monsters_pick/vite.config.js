import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'monsters-pick',
      remotes: {
        pokemon: 'http://localhost:5001/assets/remoteEntry.js',
        digimon: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  }
})
