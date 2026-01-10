import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/hubit-front/", 
  define: {
    global: 'window',   // ✅ 여기 추가
  },
})
