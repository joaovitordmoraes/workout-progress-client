import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { api } from '../api'

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
