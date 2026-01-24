import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import RepoList from '../components/RepoList.jsx'
import { fetchRepos } from '../api/github.js'

const About = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const loadRepos = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await fetchRepos()
        if (isActive) {
          setRepos(data)
        }
      } catch (err) {
        if (isActive) {
          setError(err?.message || 'Unable to load repositories.')
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
  }, [])

  return (
    <section className="space-y-10">
      <PageHeader
        title="Repository activity"
        subtitle="About"
      />
      {isLoading && <LoadingState label="Fetching repositories..." />}
      {error && <ErrorState message={error} />}
      {!isLoading && !error && (
        <RepoList repos={repos} />
      )}
    </section>
  )
}

export default About
