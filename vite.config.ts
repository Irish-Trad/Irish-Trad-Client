import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [tsconfigPaths(), reactRefresh(), reactJsx()],
})
