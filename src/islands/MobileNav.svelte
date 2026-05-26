<script lang="ts">
  type Link = { href: string; label: string };
  let { links }: { links: Link[] } = $props();
  let open = $state(false);

  function close() { open = false; }
</script>

<button
  type="button"
  class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border"
  aria-label="Open menu"
  aria-expanded={open}
  onclick={() => (open = !open)}
>
  {#if open}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
  {:else}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  {/if}
</button>

{#if open}
  <div
    class="md:hidden fixed inset-0 top-16 z-30 bg-bg/95 backdrop-blur-md border-t border-border"
    role="dialog"
    aria-modal="true"
  >
    <nav class="container-x py-6 flex flex-col gap-1 text-lg">
      {#each links as l}
        <a href={l.href} onclick={close} class="py-3 border-b border-border">{l.label}</a>
      {/each}
    </nav>
  </div>
{/if}
