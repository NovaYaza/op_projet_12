import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data'

export default function useUserData(userId) {
  const id = parseInt(userId)

  const user = USER_MAIN_DATA.find((u) => u.id === id)
  const activity = USER_ACTIVITY.find((u) => u.userId === id)
  const averageSessions = USER_AVERAGE_SESSIONS.find((u) => u.userId === id)
  const performance = USER_PERFORMANCE.find((u) => u.userId === id)

  return {
    user,
    activity,
    averageSessions,
    performance,
  }
}