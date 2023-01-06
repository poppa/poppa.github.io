<script lang="ts">
import GithubIcon from '$lib/media/icons/github.svg?component'
import InstagramIcon from '$lib/media/icons/instagram.svg?component'
import LinkedInIcon from '$lib/media/icons/linkedin.svg?component'
</script>

<ul>
  <li>
    <a
      href="https://github.com/poppa"
      class="social-icon"
      title="My Github Profile"
    >
      <GithubIcon />
      <span>Github</span>
    </a>
  </li>
  <li>
    <a
      href="https://instagram.com/poppanator"
      class="social-icon"
      title="My Instagram Profile"
    >
      <InstagramIcon />
      <span>Instagram</span>
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/poppanator"
      class="social-icon"
      title="My LinkedIn Profile"
    >
      <LinkedInIcon />
      <span>LinkedIn</span>
    </a>
  </li>
</ul>

<style lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li + li {
  margin-left: var(--icon-gap, var(--gap));
}

.social-icon {
  display: block;
  align-items: center;
  justify-content: center;
  transition: color 250ms ease-in, transform 250ms ease-in;

  &:hover {
    transform: scale(1.2);
  }

  :global(svg) {
    fill: currentColor;
    width: var(--icon-size, 32px);
    height: var(--icon-size, 32px);
  }
}

span {
  display: none;
}
</style>
