import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    fs: {
      allow: ['..']
    }
  }
})

// > vite-project-svelte@0.0.0 dev C:\Users\CatMe0w\Documents\Workspace\wasm-pack-vite-test\vite-project-svelte
// > vite

// failed to load config from C:\Users\CatMe0w\Documents\Workspace\wasm-pack-vite-test\vite-project-svelte\vite.config.ts
// error when starting dev server:
// file:///C:/Users/CatMe0w/Documents/Workspace/wasm-pack-vite-test/vite-project-svelte/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@3.1.1_svelte@4.2.18_vite@5.3.1/node_modules/@sveltejs/vite-plugin-svelte/src/index.js:3
// import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector';
//          ^^^^^^^^^^^^^^^
// SyntaxError: Named export 'svelteInspector' not found. The requested module '@sveltejs/vite-plugin-svelte-inspector' is a CommonJS module, which may not support all module.exports as named exports.
// CommonJS modules can always be imported via the default export, for example using:

// import pkg from '@sveltejs/vite-plugin-svelte-inspector';
// const { svelteInspector } = pkg;

//     at ModuleJob._instantiate (node:internal/modules/esm/module_job:171:21)
//     at async ModuleJob.run (node:internal/modules/esm/module_job:254:5)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:475:24)
//     at async loadConfigFromBundledFile (file:///C:/Users/CatMe0w/Documents/Workspace/wasm-pack-vite-test/vite-project-svelte/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/chunks/dep-BcXSligG.js:66913:15)
//     at async loadConfigFromFile (file:///C:/Users/CatMe0w/Documents/Workspace/wasm-pack-vite-test/vite-project-svelte/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/chunks/dep-BcXSligG.js:66754:24)
//     at async resolveConfig (file:///C:/Users/CatMe0w/Documents/Workspace/wasm-pack-vite-test/vite-project-svelte/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/chunks/dep-BcXSligG.js:66364:24)
//     at async _createServer (file:///C:/Users/CatMe0w/Documents/Workspace/wasm-pack-vite-test/vite-project-svelte/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/chunks/dep-BcXSligG.js:62977:18)
//     at async CAC.<anonymous> (file:///C:/Users/CatMe0w/Documents/Workspace/wasm-pack-vite-test/vite-project-svelte/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/cli.js:735:20)
//  ELIFECYCLE  Command failed with exit code 1.