import { useEffect, useState } from 'react'
import { fetchRepos } from '../api/github.js'

const DEFAULT_USERNAME = 'bradtraversy'

const normalizeError = (error) =>
  error?.response?.data?.message || error?.message || 'Unable to load repositories.'

const useGitHubRepos = (username = DEFAULT_USERNAME) => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const loadRepos = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await fetchRepos(username)
        if (isActive) {
          setRepos(data)
        }
      } catch (err) {
        if (isActive) {
          setError(normalizeError(err))
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadRepos()

    return () => {
      isActive = false
    }
  }, [username])

  return { repos, isLoading, error }
}

export default useGitHubRepos
