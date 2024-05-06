import { getServerSession } from 'next-auth'
import { api } from '../api'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/options'

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
      next: {
        revalidate: 10,
      },
    },
  })

  const response = await data.json()
  return response
}
