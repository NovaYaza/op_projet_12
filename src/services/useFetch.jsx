import { useEffect, useState } from 'react'

// Hook personnalisé pour faire un fetch de données
export default function useFetch(url, userId = null) {
  const [data, setData] = useState(null) // State pour stocker les données reçues
  const [loading, setLoading] = useState(true)  // State pour indiquer si la requête est en cours
  const [error, setError] = useState(null) // State pour capturer une éventuelle erreur

  // useEffect s'exécute à chaque fois que l'URL ou userId change
  useEffect(() => {
    if (!url) return // Si aucune URL fournie, on ne fait rien

    // Fonction asynchrone pour faire la requête
    const fetchData = async () => {
      try {
        const response = await fetch(url) // Appel HTTP (peut être vers API ou fichier mock JSON)
        if (!response.ok) throw new Error(`Erreur ${response.status}`)
        const json = await response.json() // On récupère les données en JSON

        // Cas où on utilise un mock avec un tableau
        if (url.includes('/mock/') && Array.isArray(json)) {
          if (userId) {
            // On cherche l'utilisateur correspondant (par id ou userId)
            const filtered = json.find(item =>
              item.id === Number(userId) || item.userId === Number(userId)
            )
            setData({ data: filtered }) // on le structure comme l'API
          } else {
            setData({ data: json }) // Si pas d'ID précisé, on retourne tout le tableau
          }
        } else {
          // Cas normal : données déjà formatées par le back (avec `data` à l'intérieur)
          setData(json)
        }
      } catch (err) {
        setError(err.message)  // En cas d’erreur (réseau, JSON, etc.), on capture le message
      } finally {
        setLoading(false) // Qu’il y ait succès ou erreur, on arrête le "chargement"
      }
    }

    fetchData() // Exécute la fonction de récupération
  }, [url, userId]) // Déclenche l'effet si l'URL ou l'ID change

  return { data, loading, error } // Retourne l’état actuel des données, du chargement et des erreurs
}