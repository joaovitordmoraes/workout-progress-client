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
      cache: 'no-store',
    },
  })

  const response = await data.json()

  return response
}

export async function getCheckIns() {
  const session = await getSession()

  const data = await api({
    path: `/check-ins/metrics`,
    init: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.user}`,
      },
      cache: 'no-store',
    },
  })

  const response = await data.json()
  return response
}
