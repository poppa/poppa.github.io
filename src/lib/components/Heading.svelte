<script lang="ts">
import type { Maybe } from '$lib/type-types'
import type { ComponentType, SvelteComponentTyped } from 'svelte'
import type { SVGAttributes } from 'svelte/elements'

export let tagName = 'h2'
export let className: Maybe<string> = undefined
export let icon: Maybe<
  ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>
> = undefined
</script>

<svelte:element this={tagName} class="heading {className}">
  {#if icon}
    <div class="icon">
      <svelte:component this={icon} />
    </div>
  {/if}
  <div class="text"><slot /></div>
</svelte:element>

<style lang="scss">
.heading {
  display: flex;
  gap: var(--gap);
  align-items: center;
  margin: 0 0 calc(var(--gap) * 2);
}

.icon {
  :global(svg) {
    fill: currentColor;
    display: block;
    width: 1.125em;
    height: 1.125em;
  }
}
</style>
