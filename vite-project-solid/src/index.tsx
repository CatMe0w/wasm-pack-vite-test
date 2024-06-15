/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import init from "wasm-pack-vite-test"

init()

const root = document.getElementById('root')

render(() => <App />, root!)
