'use client'

import { WorkoutItem } from '@/app/components/WorkoutItem'
import {
  deleteExercise,
  getTrainingExercises,
} from '@/app/services/training/client'
import { Exercise, GetTrainingExercises } from '@/app/services/training/types'
import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { NewExerciseModal } from './components/NewExerciseModal'
import { useTraining } from '@/app/store/training'
import { checkIn } from '@/app/services/checkin/client'
import { useRouter } from 'next/navigation'

type TrainingDetailProps = {
  params: {
    slug: string
  }
}

export default function TrainingDetail({ params }: TrainingDetailProps) {
  const [trainingExercises, setTrainingExercises] = useState<Exercise[]>(
    [] as Exercise[],
  )
  const router = useRouter()

  const { setTrainingId, updateTraining, setUpdateTraining, setModalOpen } =
    useTraining((store) => {
      return {
        setTrainingId: store.setTrainingId,
        updateTraining: store.updateTraining,
        setModalOpen: store.setModalOpen,
        setUpdateTraining: store.setUpdateTraining,
      }
    })

  useEffect(() => {
    const loadExercises = async () => {
      const response: GetTrainingExercises = await getTrainingExercises(
        params.slug,
      )
      setTrainingExercises(response.exercises)
    }

    setTrainingId(params.slug)

    loadExercises()

    setUpdateTraining(false)
  }, [params.slug, updateTraining])

  const handleExerciseDelete = async (id: string) => {
    try {
      const deleteRequest = await deleteExercise(id)

      if (deleteRequest.success) {
        setUpdateTraining(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheckIn = async () => {
    try {
      const createCheckIn = await checkIn()

      if (createCheckIn.success) {
        router.replace('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="w-full h-screen flex flex-col p-6">
      <NewExerciseModal />
      <header className="flex justify-between border-b border-zinc-200 pb-8 mb-8">
        <h2 className="text-2xl font-bold uppercase">Treino A</h2>

        <button
          className="rounded-md p-2 hover:bg-zinc-50"
          title="Adicionar novo exercício"
          type="button"
          onClick={() => setModalOpen(true)}
        >
          <FiPlus className="w-5 h-5 text-zinc-500" />
        </button>
      </header>

      <section className="flex flex-col gap-6">
        {trainingExercises.length ? (
          <>
            {trainingExercises.map((exercise) => {
              return (
                <WorkoutItem
                  key={exercise.id}
                  name={exercise.name}
                  description={exercise.description}
                  series_type={exercise.series_type}
                  series={exercise.series}
                  reps={exercise.reps}
                  weight={exercise.weight}
                  onRemove={() => handleExerciseDelete(exercise.id)}
                />
              )
            })}

            <button
              className="border rounded-sm py-2 hover:bg-zinc-50"
              type="button"
              onClick={() => handleCheckIn()}
            >
              Finalizar treino
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </section>
  )
}
