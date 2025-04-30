import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {


  const isProdBuild = mode === 'build-mf'; // our custom prod MF mode


  return {
    plugins: [react(), tailwindcss()],
    build: {
      lib: {
        entry: './src/export.js',  // entry point (we created this earlier)
        name: 'MyMicrofrontendComponent',  // global variable name
        fileName: (format) => `microfrontend-bundle.js`,  // Force .js extension for UMD format
        formats: ['umd'],  // Specify UMD format
      },
      rollupOptions: {
        external: isProdBuild ? ['react', 'react-dom', 'tailwindcss', '@mui/material'] : [],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'tailwindcss': 'tailwindcss',
            '@mui/material': 'MaterialUI'
          },
        },
      },
      cssCodeSplit: false,
      define: {
        'process.env': JSON.stringify({}),  // Define process.env as an empty object
      },
      outDir: 'dist',  // output directory
    },
    optimizeDeps: {
      exclude: isProdBuild ? ['react', 'react-dom', 'tailwindcss', '@mui/material'] : [],
    },
  }
})
