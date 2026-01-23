import AxiosClient from './AxiosClient.js'

const githubClient = new AxiosClient({
  baseURL: 'https://api.github.com',
})

const DEFAULT_USERNAME = 'bradtraversy'

export const fetchUser = (username = DEFAULT_USERNAME) =>
  githubClient.get(`/users/${username}`)

export const fetchRepos = (username = DEFAULT_USERNAME) =>
  githubClient.get(`/users/${username}/repos`, {
    params: {
      sort: 'updated',
      per_page: 12,
    },
  })
