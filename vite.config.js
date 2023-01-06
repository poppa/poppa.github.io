import svg from '@poppanator/sveltekit-svg'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    svg({
      svgoOptions: {
        multipass: true,
        plugins: ['preset-default'],
      },
    }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
}

export default config
