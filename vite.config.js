import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { resolve } from 'path'


export default defineConfig({
  plugins: [
    basicSsl(),
  ],
  server: {
    https: true,
    host: true,
  }
});
