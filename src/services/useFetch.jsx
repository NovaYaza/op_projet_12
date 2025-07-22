import { useEffect, useState } from 'react'

export default function useFetch(url, userId = null) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Erreur ${response.status}`)
        const json = await response.json()

        // Cas où on utilise un mock avec un tableau
        if (url.includes('/mock/') && Array.isArray(json)) {
          if (userId) {
            const filtered = json.find(item =>
              item.id === Number(userId) || item.userId === Number(userId)
            )
            setData({ data: filtered })
          } else {
            setData({ data: json })
          }
        } else {
          // Cas normal (backend)
          setData(json)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, userId])

  return { data, loading, error }
}