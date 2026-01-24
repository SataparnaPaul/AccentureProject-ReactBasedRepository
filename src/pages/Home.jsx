import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import ProfileCard from '../components/ProfileCard.jsx'
import { fetchUser } from '../api/github.js'

const Home = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const loadUser = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await fetchUser()
        if (isActive) {
          setUser(data)
        }
      } catch (err) {
        if (isActive) {
          setError(err?.message || 'Unable to load user data.')
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
  }, [])

  return (
    <section className="space-y-10">
      <PageHeader
        title="GitHub profile snapshot"
        subtitle="Home"
      />
      {isLoading && <LoadingState label="Loading profile details..." />}
      {error && <ErrorState message={error} />}
      {user && !isLoading && !error && <ProfileCard user={user} />}
    </section>
  )
}

export default Home
