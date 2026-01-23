import PageHeader from '../components/PageHeader.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import ProfileCard from '../components/ProfileCard.jsx'
import useGitHubUser from '../hooks/useGitHubUser.js'

const Home = () => {
  const { user, isLoading, error } = useGitHubUser()

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
