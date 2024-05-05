import { getSession } from 'next-auth/react'
import { api } from '../api'

export async function checkIn() {
  const session = await getSession()

  const data = await api({
    path: '/check-in',
    init: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.user}`,
      },
    },
  })

  const response = await data.json()

  return response
}
