import { useEffect, useState } from 'react'
import { fetchUser } from '../api/github.js'

const DEFAULT_USERNAME = 'bradtraversy'

const normalizeError = (error) =>
  error?.response?.data?.message || error?.message || 'Unable to load user data.'

const useGitHubUser = (username = DEFAULT_USERNAME) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const loadUser = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await fetchUser(username)
        if (isActive) {
          setUser(data)
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

    loadUser()

    return () => {
      isActive = false
    }
  }, [username])

  return { user, isLoading, error }
}

export default useGitHubUser
