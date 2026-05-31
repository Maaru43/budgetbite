<script>
 import { createEventDispatcher } from 'svelte';
 const dispatch = createEventDispatcher();
 let { selected = false, children } = $props();
 function handleClick() {
   dispatch('select');
 }
</script>
<button type="button" class="pill {selected ? 'selected' : ''}" onclick={handleClick} aria-pressed={selected}>
 {@render children()}
</button>
