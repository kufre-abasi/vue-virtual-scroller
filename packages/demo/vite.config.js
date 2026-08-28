import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [vue()],
});
