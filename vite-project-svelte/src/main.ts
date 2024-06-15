import './app.css'
import App from './App.svelte'
import init from "wasm-pack-vite-test"

init()

const app = new App({
  target: document.getElementById('app')!,
})

export default app
