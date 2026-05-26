<script lang="ts">
  type Slide = {
    file: string;
    src: string;
    caption: string;
    feature: string;
    theme: 'dark' | 'light';
  };
  let { slides }: { slides: Slide[] } = $props();

  let index = $state(0);
  let trackEl: HTMLDivElement | undefined = $state();
  let isUserScrolling = $state(false);
  let scrollTimer: number | undefined;

  function go(i: number) {
    const next = (i + slides.length) % slides.length;
    index = next;
    if (!trackEl) return;
    const child = trackEl.children[next] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  function onScroll() {
    if (!trackEl) return;
    isUserScrolling = true;
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => (isUserScrolling = false), 120);

    // Compute nearest snapped slide by center distance
    const track = trackEl;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const mid = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    index = best;
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  }
</script>

<div class="relative">
  <div
    bind:this={trackEl}
    onscroll={onScroll}
    onkeydown={onKey}
    role="region"
    aria-roledescription="carousel"
    aria-label="Chorder app screenshots"
    tabindex="0"
    class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mx-5 px-5 sm:mx-0 sm:px-0 focus:outline-none"
    style="scrollbar-width: thin;"
  >
    {#each slides as s, i}
      <figure
        class="snap-center shrink-0 w-[78%] sm:w-[44%] lg:w-[30%] flex flex-col items-center"
        aria-roledescription="slide"
        aria-label={`${i + 1} of ${slides.length}: ${s.feature}`}
      >
        <!-- CSS phone mockup -->
        <div
          class="relative rounded-[2.2rem] p-2.5 shadow-2xl"
          style="background: linear-gradient(160deg, #2a2a2a, #0a0a0a); border: 1px solid rgba(255,255,255,0.08);"
        >
          <!-- Notch -->
          <div class="absolute left-1/2 -translate-x-1/2 top-[10px] h-4 w-24 rounded-full bg-black/90 z-10"></div>
          <div class="overflow-hidden rounded-[1.7rem] bg-black" style="aspect-ratio: 3 / 4.25;">
            <img
              src={s.src}
              alt={s.caption}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              fetchpriority={i === 0 ? 'high' : 'auto'}
              class="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <figcaption class="mt-5 max-w-xs text-center text-sm text-text/75 leading-relaxed">
          <span class="block text-xs uppercase tracking-widest mb-1" style="color: var(--c-primary);">{s.feature}</span>
          {s.caption}
        </figcaption>
      </figure>
    {/each}
  </div>

  <!-- Controls -->
  <div class="mt-2 flex items-center justify-center gap-4">
    <button
      type="button"
      class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-surface transition-colors"
      aria-label="Previous screenshot"
      onclick={() => go(index - 1)}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>

    <div class="flex items-center gap-2" role="tablist" aria-label="Select screenshot">
      {#each slides as _, i}
        <button
          type="button"
          role="tab"
          aria-selected={index === i}
          aria-label={`Go to screenshot ${i + 1}`}
          onclick={() => go(i)}
          class="h-2 rounded-full transition-all"
          style:width={index === i ? '24px' : '8px'}
          style:background={index === i ? 'var(--c-accent)' : 'var(--c-border)'}
        ></button>
      {/each}
    </div>

    <button
      type="button"
      class="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-surface transition-colors"
      aria-label="Next screenshot"
      onclick={() => go(index + 1)}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
</div>
