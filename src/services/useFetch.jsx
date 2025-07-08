import { useState, useEffect } from 'react'

export default function useFetch(endpoint) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${endpoint}`)
        if (!response.ok) throw new Error('Erreur réseau')
        const json = await response.json()
        setData(json.data)
      } catch (err) {
        setError(true)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { data, loading, error }
}