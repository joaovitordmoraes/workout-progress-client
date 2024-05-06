import { getServerSession } from 'next-auth'
import { api } from '../api'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/options'

export async function getCheckIns() {
  const session = await getServerSession(nextAuthOptions)

  const data = await api({
    path: `/check-ins/metrics`,
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
