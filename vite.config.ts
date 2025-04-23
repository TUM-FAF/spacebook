import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/spacebook/',
  plugins: [react(), svgr(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
})