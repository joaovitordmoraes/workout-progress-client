'use client'

import { api } from '../api'
import { getSession } from 'next-auth/react'

type CreateTrainingProps = {
  name: string
  routineId: string
}

export async function createTraining({ name, routineId }: CreateTrainingProps) {
  const session = await getSession()

  const body = JSON.stringify({
    name,
    routineId,
  })

  const data = await api({
    path: '/trainings',
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

export async function getTrainingExercises(id: string) {
  const session = await getSession()

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
