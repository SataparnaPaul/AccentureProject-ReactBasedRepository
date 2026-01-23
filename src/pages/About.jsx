import PageHeader from '../components/PageHeader.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import RepoList from '../components/RepoList.jsx'
import useGitHubRepos from '../hooks/useGitHubRepos.js'

const About = () => {
  const { repos, isLoading, error } = useGitHubRepos()

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
