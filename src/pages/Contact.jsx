import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import ContactCard from '../components/ContactCard.jsx'
import { fetchUser } from '../api/github.js'

const Contact = () => {
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

  const email = user?.email || 'Not avavilable'
  const phone = '+1 (555) 010-2026'
  const socials = [
    {
      label: 'GitHub',
      href: user?.html_url || 'https://github.com/bradtraversy',
    },
    {
      label: 'Twitter',
      href: user?.twitter_username
        ? `https://twitter.com/${user.twitter_username}`
        : 'https://twitter.com',
    },
    {
      label: 'LinkedIn',
      href: '',
    },
  ]

  return (
    <section className="space-y-10">
      <PageHeader
        title="Contact information"
        subtitle="Contact Us"
      />
      {isLoading && <LoadingState label="Loading contact details..." />}
      {error && <ErrorState message={error} />}
      {user && !isLoading && !error && (
        <ContactCard email={email} phone={phone} socials={socials} />
      )}
    </section>
  )
}

export default Contact
