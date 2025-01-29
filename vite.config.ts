import { resolve } from 'path';
import { defineConfig } from 'vite';
import greycat from '@greycat/web/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '', // makes path relative to there deployment directory
    plugins: [greycat()],
    appType: 'mpa',
    esbuild: {
      supported: {
        'top-level-await': true, // browsers can handle top-level-await features
      },
    },
    publicDir: resolve(__dirname, 'frontend/public'),
    root: resolve(__dirname, 'frontend/pages'),
    define: {
      // This ensures libraries that leverages 'process.env.NODE_ENV'
      // have it replaced statically before dead-code removal
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        cssModules: {
          // This is to get better CSS class names when developping as it preprends the name of the file
          pattern: mode === 'development' ? '[name]_[local]' : '[hash]_[local]',
        },
      },
    },
    build: {
      emptyOutDir: true,
      outDir: resolve(__dirname, 'dist'),
      cssMinify: 'lightningcss',
      rollupOptions: {
        input: {
          // list your entrypoints in 'input'
          //
          // eg. `hello: resolve(__dirname, 'pages/hello/index.html'),`
          // (see. https://vitejs.dev/guide/build.html#multi-page-app)
          index: resolve(__dirname, 'frontend/pages/index.html'),
        },
      },
    },
  };
});
