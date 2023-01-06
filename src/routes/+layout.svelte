<script lang="ts">
import SocialMedia from '$lib/components/SocialMedia.svelte'
import '../scss/site.scss'
</script>

<header>
  <div class="container">
    <a href="/" class="logo">
      <img
        src="https://avatars.githubusercontent.com/u/92401?v=4"
        alt="Picture of Pontus Östlund"
        width="460"
        height="460"
      />
      <h1>
        Pontus Östlund
        <small>Caught In A Web</small>
      </h1>
    </a>

    <div class="social">
      <SocialMedia />
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<footer>
  <div class="container">
    <strong>Pontus Östlund</strong>
    <div class="social">
      <SocialMedia />
    </div>
  </div>
</footer>

<style lang="scss">
@use '../scss/breakpoints' as bp;

/* HEADER, FOOTER shared styles */
header,
footer {
  background-color: var(--theme-background);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .social {
    :global(a) {
      color: var(--theme-background-text);
    }

    :global(a):hover {
      color: var(--theme-primary);
    }
  }
}

/* HEADER specific styles */
header {
  border-bottom: 1px solid var(--border-color);

  .social {
    :global(a) {
      color: var(--theme-background-text);
    }

    :global(a):hover {
      color: var(--theme-primary);
    }
  }

  :global(.social-icon svg) {
    --icon-size: 22px;

    @include bp.md-up {
      --icon-size: 28px;
    }
  }
}

/* FOOTER specific styles */
footer {
  border-top: 1px solid var(--border-color);
  font-size: small;

  :global(.social-icon svg) {
    --icon-size: 22px;
  }
}

/* The logo */
.logo {
  display: flex;
  gap: var(--gap);
  align-items: center;
  text-decoration: none;
  color: var(--theme-background-text);

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    filter: grayscale(1);
    transition: filter 250ms ease-in;
  }

  h1 {
    margin: 0;
    font-size: 1.4em;
    line-height: 1;
    letter-spacing: -1px;
    transition: color 250ms ease-in;
  }

  small {
    display: block;
    font-weight: 300;
    font-size: 0.6em;
    color: var(--theme-gray);
    letter-spacing: 4px;
    transition: color 250ms ease-in;
  }

  &:hover {
    h1 {
      color: var(--theme-primary);
    }

    small {
      color: var(--theme-secondary);
    }

    img {
      filter: grayscale(0);
    }
  }

  @include bp.md-up {
    img {
      width: 64px;
      height: 64px;
    }

    h1 {
      font-size: 1.6em;
    }

    small {
      letter-spacing: 4.7px;
    }
  }
}
</style>
