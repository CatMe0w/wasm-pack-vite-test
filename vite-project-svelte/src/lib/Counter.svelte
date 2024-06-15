<script lang="ts">
  import { add } from "wasm-pack-vite-test"

  let count: number = 0
  const increment = () => {
    add(1, 2)
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
