import { getServerSession } from 'next-auth'
import { api } from '../api'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export async function getAllTrainingRoutinesServer() {
  const session = await getServerSession(nextAuthOptions)

  const data = await api({
    path: '/routine',
    init: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${session?.user}`,
      },
    },
  })

  const response = await data.json()
  return response
}

export async function getTrainingExercises(id: string) {
  const session = await getServerSession(nextAuthOptions)

  const data = await api({
    path: `/trainings/${id}`,
    init: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.user}`,
      },
    },
  })

  const response = await data.json()
  return response
}
