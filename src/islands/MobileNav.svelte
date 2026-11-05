<script lang="ts">
  type Link = { href: string; label: string };
  let { links }: { links: Link[] } = $props();
  let open = $state(false);

  function close() {
    open = false;
  }
  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) close();
  }
</script>

<svelte:window onkeydown={onKey} />

<button
  type="button"
  class="md:hidden icon-btn"
  aria-label={open ? 'Close menu' : 'Open menu'}
  aria-expanded={open}
  aria-controls="mobile-nav"
  onclick={() => (open = !open)}
>
  {#if open}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
  {:else}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  {/if}
</button>

{#if open}
  <nav
    id="mobile-nav"
    aria-label="Primary"
    class="md:hidden fixed inset-x-0 top-16 z-40 border-b border-border bg-bg"
  >
    <ul class="container-x py-2 list-none">
      {#each links as l}
        <li class="border-b border-border last:border-b-0">
          <a href={l.href} onclick={close} class="flex items-center min-h-[3.25rem] text-lg font-medium no-underline">{l.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
