<script lang="ts">
  import { onMount } from 'svelte';

  let theme = $state<'dark' | 'light'>('dark');
  let mounted = $state(false);

  onMount(() => {
    theme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ?? 'dark';
    mounted = true;
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('chorder-theme', theme); } catch (_) {}
  }
</script>

<button
  type="button"
  class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-surface transition-colors"
  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
  onclick={toggle}
>
  {#if !mounted || theme === 'dark'}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>
    </svg>
  {:else}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  {/if}
</button>
