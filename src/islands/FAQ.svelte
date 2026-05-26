<script lang="ts">
  type FAQItem = { q: string; a: string };
  let { items }: { items: FAQItem[] } = $props();
  let openIndex = $state<number | null>(0);

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i;
  }
</script>

<div class="divide-y divide-border border border-border rounded-2xl overflow-hidden" style="background: var(--c-surface);">
  {#each items as item, i}
    {@const isOpen = openIndex === i}
    <div>
      <button
        type="button"
        class="w-full flex items-center justify-between text-left px-5 py-4 sm:px-6 sm:py-5 gap-4 hover:bg-surface-2 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${i}`}
        onclick={() => toggle(i)}
      >
        <span class="font-medium text-base sm:text-lg">{item.q}</span>
        <svg
          class="shrink-0 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      {#if isOpen}
        <div id={`faq-panel-${i}`} class="px-5 pb-5 sm:px-6 sm:pb-6 -mt-1 text-text/80 leading-relaxed">
          {item.a}
        </div>
      {/if}
    </div>
  {/each}
</div>
