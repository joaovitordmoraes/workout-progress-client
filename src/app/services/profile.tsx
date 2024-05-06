import { getServerSession } from 'next-auth'
import { api } from './api'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'

export async function getProfileData() {
  const session = await getServerSession(nextAuthOptions)

  const data = await api({
    path: '/me',
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
