<script lang="ts">
import { github } from '$lib/stores'
import GithubIcon from '$lib/media/icons/github.svg?component'
import Heading from '$lib/components/Heading.svelte'
const yearsDoingIt = new Date().getFullYear() - 2000

console.log(`Github:`, $github)
</script>

<section class="primary">
  <div class="container container__extra flow">
    <h1>I'm a developer</h1>
    <p>
      Hi, my name is Pontus and I'm a programmer, web-developer, nerd, hiker,
      home-cook, former motocross rider living in Norrköping, Sweden.
    </p>
    <p>
      I've been working as a web developer and programmer for the past {yearsDoingIt}
      years or so, and it is something I love doing.
    </p>
  </div>
</section>

<section>
  <div class="container container__extra">
    <Heading className="gradient-text" icon={GithubIcon}
      >Some of my stuff at Github</Heading
    >

    {#if !$github}
      <div class="loader">Fetching Data...</div>
    {:else}
      <div>
        {#each $github.pinned as repo (repo.id)}
          <div class="repo">
            {repo.name}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
