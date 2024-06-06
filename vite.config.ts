import { resolve } from 'path';
import { type PluginOption, defineConfig } from 'vite';
import httpProxy from 'http-proxy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '', // makes path relative to there deployment directory
    plugins: [greycatProxy()],
    appType: 'mpa',
    esbuild: {
      supported: {
        'top-level-await': true, // browsers can handle top-level-await features
      },
    },
    assetsInclude: ['node_modules/@shoelace-style/shoelace/dist/assets/icons/*.svg'],
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

/**
 * This plugin ensures '^/files' and POST requests are proxied to GreyCat rather
 * than trying to be answered by vitejs's dev server.
 */
function greycatProxy(): PluginOption {
  // If you are not running GreyCat on the default :8080 port, update the `target`:
  const proxy = httpProxy.createProxyServer({
    target: 'http://127.0.0.1:8080',
  });

  return {
    name: 'greycat-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.originalUrl && req.headers.upgrade !== 'websocket') {
          const isFileApi =
            (req.method === 'GET' || req.method === 'PUT' || req.method === 'DELETE') &&
            req.originalUrl.match(/^\/files\//);
          const isRpc = !isFileApi && req.method === 'POST';
          if (isFileApi || isRpc) {
            // proxy to GreyCat
            proxy.web(req, res, {}, (err) => {
              console.error(
                `${err.code}: make sure GreyCat is started and listening at ${proxy.options.target}`,
              );
              return;
            });
            return;
          }
        }
        next();
      });
    },
  };
}
