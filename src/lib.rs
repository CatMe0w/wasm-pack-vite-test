mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-pack-vite-test!");
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) {
    alert(&format!("{} + {} = {}", a, b, a + b));
}