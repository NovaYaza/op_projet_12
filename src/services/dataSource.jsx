const useMock = true // change à true pour activer les mocks

const API_BASE = 'http://localhost:3000/user'
const MOCK_BASE = '/mock'

export function getEndpoint(type, id) {
  if (!useMock) {
    switch (type) {
      case 'main': return `${API_BASE}/${id}`
      case 'activity': return `${API_BASE}/${id}/activity`
      case 'average': return `${API_BASE}/${id}/average-sessions`
      case 'performance': return `${API_BASE}/${id}/performance`
      default: throw new Error('Type d\'endpoint inconnu')
    }
  } else {
    switch (type) {
      case 'main': return `${MOCK_BASE}/user_main_data.json`
      case 'activity': return `${MOCK_BASE}/user_activity.json`
      case 'average': return `${MOCK_BASE}/user_average_sessions.json`
      case 'performance': return `${MOCK_BASE}/user_performance.json`
      default: throw new Error('Type de mock inconnu')
    }
  }
}