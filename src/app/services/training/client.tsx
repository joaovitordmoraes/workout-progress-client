'use client'

import { api } from '../api'
import { getSession } from 'next-auth/react'

type CreateTrainingProps = {
  name: string
  routineId: string
}

type CreateExerciseProps = {
  name: string
  description?: string
  series: number
  series_type: string
  reps: number
  weight: number
  trainingId: string
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

export async function createExercise({
  name,
  description,
  series_type,
  series,
  reps,
  weight,
  trainingId,
}: CreateExerciseProps) {
  const session = await getSession()

  const body = JSON.stringify({
    name,
    description,
    series_type,
    series,
    reps,
    weight,
    trainingId,
  })

  console.log(body)

  const data = await api({
    path: '/exercise',
    init: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${session?.user}`,
      },
      body,
    },
  })

  const response = await data.json()

  console.log(response)

  return response
}

export async function deleteExercise(id: string) {
  const session = await getSession()

  const data = await api({
    path: `/exercise/${id}`,
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
