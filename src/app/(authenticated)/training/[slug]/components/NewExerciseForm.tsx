'use client'

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createExercise } from '@/app/services/training/client'
import { useTraining } from '@/app/store/training'

type CreateExerciseFormProps = {
  name: string
  description?: string
  series: number
  series_type: string
  reps: number
  weight: number
}

const createTrainingSchema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  description: yup.string(),
  series: yup
    .number()
    .typeError('Campo obrigatório')
    .required('Campo obrigatório')
    .positive('Digite um número positivo')
    .integer('Digite um número inteiro'),
  series_type: yup.string().required('Campo obrigatório'),
  reps: yup
    .number()
    .typeError('Campo obrigatório')
    .required('Campo obrigatório')
    .positive('Digite um número positivo')
    .integer('Digite um número inteiro'),
  weight: yup
    .number()
    .typeError('Campo obrigatório')
    .required('Campo obrigatório')
    .positive('Digite um número positivo')
    .integer('Digite um número inteiro'),
})

export function NewExerciseForm() {
  const { trainingId, setUpdateTraining } = useTraining((store) => {
    return {
      trainingId: store.trainingId,
      setUpdateTraining: store.setUpdateTraining,
    }
  })

  const createExerciseForm = useForm<CreateExerciseFormProps>({
    resolver: yupResolver(createTrainingSchema),
  })

  const onSubmit: SubmitHandler<CreateExerciseFormProps> = async (data) => {
    try {
      const createExerciseRequest = await createExercise({
        name: data.name,
        description: data.description,
        series_type: data.series_type,
        series: data.series,
        reps: data.reps,
        weight: data.weight,
        trainingId,
      })

      if (createExerciseRequest.success) {
        setUpdateTraining(true)
        createExerciseForm.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const error = createExerciseForm.formState.errors

  return (
    <FormProvider {...createExerciseForm}>
      <form
        className="flex flex-col gap-2"
        onSubmit={createExerciseForm.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            className="border rounded-sm p-2"
            type="text"
            placeholder="Nome do exercício"
            {...createExerciseForm.register('name')}
          />
          {error.name?.message}
        </div>

        <div className="flex flex-col">
          <textarea
            className="border rounded-sm p-2"
            placeholder="Descrição do exercício"
            {...createExerciseForm.register('description')}
          />
          {error.description?.message}
        </div>

        <div className="flex flex-col">
          <input
            className="border rounded-sm p-2"
            type="text"
            placeholder="Tipo de série"
            {...createExerciseForm.register('series_type')}
          />
          {error.series_type?.message}
        </div>

        <div className="flex flex-col">
          <input
            className="border rounded-sm p-2"
            type="number"
            placeholder="Quantidade de séries"
            {...createExerciseForm.register('series')}
          />
          {error.series?.message}
        </div>

        <div className="flex flex-col">
          <input
            className="border rounded-sm p-2"
            type="number"
            placeholder="Quantidade de repetições"
            {...createExerciseForm.register('reps')}
          />
          {error.reps?.message}
        </div>

        <div className="flex flex-col">
          <input
            className="border rounded-sm p-2"
            type="number"
            placeholder="Peso"
            {...createExerciseForm.register('weight')}
          />
          {error.name?.message}
        </div>

        <button
          className="border rounded-sm py-2 hover:bg-zinc-50"
          type="submit"
        >
          Criar
        </button>
      </form>
    </FormProvider>
  )
}
