const useMock = false // change à true pour activer les mocks

const API_BASE = 'http://localhost:3000/user' // URL du backend
const MOCK_BASE = '/mock' //dossier public où sont les fichiers JSON mockés

export function getEndpoint(type, id) {
  if (!useMock) { // Si useMock est false, on construit une URL vers l’API pour chaque type.
    switch (type) {
      case 'main': return `${API_BASE}/${id}`
      case 'activity': return `${API_BASE}/${id}/activity`
      case 'average': return `${API_BASE}/${id}/average-sessions`
      case 'performance': return `${API_BASE}/${id}/performance`
      default: throw new Error('Type d\'endpoint inconnu')
    }
  } else { // Si useMock est true, on retourne simplement le chemin vers un fichier JSON dans /public/mock.
    switch (type) {
      case 'main': return `${MOCK_BASE}/user_main_data.json`
      case 'activity': return `${MOCK_BASE}/user_activity.json`
      case 'average': return `${MOCK_BASE}/user_average_sessions.json`
      case 'performance': return `${MOCK_BASE}/user_performance.json`
      default: throw new Error('Type de mock inconnu')
    }
  }
}