import type { Repo } from './github-api-types'
import type { LocalCache } from './interface'

export const GithubApiUri = [
  'https://api.github.com/users/poppa/repos?',
  ['sort=pushed', 'per_page=100'].join('&'),
].join('')

export const CacheTime = 60 * 60 * 4 * 1000

export interface PinnedRepo {
  name: string
  language?: string
  framework?: string
  description?: string
}

export type HeadRepo = Repo & PinnedRepo

const Pinned: PinnedRepo[] = [
  { name: 'safe-result' },
  { name: 'sveltekit-svg', language: 'Svelte' },
  { name: 'assert-error', language: 'TypeScript' },
  { name: 'resourceful', framework: 'Electron' },
  { name: 'key-value-file' },
  { name: 'pike-toml' },
]

export interface SortedResult {
  pinned: HeadRepo[]
  rest: Repo[]
}

export function sortRepos(repos: Repo[]): SortedResult {
  const head: Array<Repo & PinnedRepo> = new Array(Pinned.length)
  const middle: Repo[] = []
  const tail: Repo[] = []

  repos.forEach((r) => {
    const pinpoint = Pinned.findIndex((p) => p.name === r.name)

    if (pinpoint >= 0) {
      head[pinpoint] = { ...r, ...Pinned[pinpoint] }
    } else if (r.archived) {
      tail.push(r)
    } else {
      middle.push(r)
    }
  })

  return { pinned: head, rest: [...middle, ...tail] }
}

export async function fetchGithubData(): Promise<SortedResult> {
  const response = await fetch(GithubApiUri, { mode: 'cors' })

  if (response.ok) {
    const data: Repo[] = await response.json()
    const localCache: LocalCache<Repo[]> = {
      ts: Date.now(),
      data,
    }

    localStorage.setItem('github', JSON.stringify(localCache))

    return sortRepos(data)
  } else {
    throw new Error('Bad response from Github')
  }
}
