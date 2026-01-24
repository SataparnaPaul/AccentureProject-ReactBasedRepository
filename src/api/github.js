const DEFAULT_USERNAME = 'bradtraversy'
const BASE_URL = 'https://api.github.com'

const getJson = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })

  if (!response.ok) {
    let message = 'Unable to load data from GitHub.'
    try {
      const payload = await response.json()
      message = payload?.message || message
    } catch {
      // Fallback to default message.
    }
    throw new Error(message)
  }

  return response.json()
}

export const fetchUser = (username = DEFAULT_USERNAME) =>
  getJson(`${BASE_URL}/users/${username}`)

export const fetchRepos = (username = DEFAULT_USERNAME) => {
  const params = new URLSearchParams({
    sort: 'updated',
    per_page: '12',
  })

  return getJson(`${BASE_URL}/users/${username}/repos?${params.toString()}`)
}
