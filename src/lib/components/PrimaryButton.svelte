<script>
 let { href = '', type = 'button', children } = $props();
</script>
{#if href}
 <a class="primary-button" href={href}>
  {@render children()}
 </a>
{:else}
 <button class="primary-button" type={type}>
  {@render children()}
 </button>
{/if}
