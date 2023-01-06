import { writable } from 'svelte/store'
import {
  CacheTime,
  fetchGithubData,
  sortRepos,
  type SortedResult,
} from './github'
import type { Repo } from './github-api-types'
import type { LocalCache } from './interface'
import type { Maybe } from './type-types'

export const github = writable<Maybe<SortedResult>>(undefined, (setter) => {
  if (typeof localStorage === 'undefined') {
    return
  }

  const cache = localStorage.getItem('github')

  if (cache) {
    const parsedCache: LocalCache<Repo[]> = JSON.parse(cache)

    if (Date.now() - parsedCache.ts < CacheTime) {
      const res = sortRepos(parsedCache.data)
      return setter(res)
    }
  }

  fetchGithubData()
    .then((result) => {
      setter(result)
    })
    .catch((e) => {
      console.error(`Failed fetching github data:`, e)
    })
})
