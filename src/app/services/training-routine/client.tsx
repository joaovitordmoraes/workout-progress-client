'use client'

import { api } from '../api'
import { getSession } from 'next-auth/react'

export async function createTrainingRoutine(name: string) {
  const session = await getSession()

  const body = JSON.stringify({
    name,
  })

  const data = await api({
    path: '/routine',
    init: {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${session?.user}`,
        'Content-Type': 'application/json',
      },
      body,
    },
  })

  const response = await data.json()
  return response
}

export async function getAllTrainingRoutines() {
  const session = await getSession()

  const request = await api({
    path: '/routine',
    init: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.user}`,
      },
    },
  })

  const response = await request.json()

  return response
}

export async function deleteRoutine(id: string) {
  const session = await getSession()

  const data = await api({
    path: `/routine/${id}`,
    init: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${session?.user}`,
      },
    },
  })

  const response = await data.json()
  return response
}
