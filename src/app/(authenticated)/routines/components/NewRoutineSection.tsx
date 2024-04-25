'use client'

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createTrainingRoutine } from '@/app/services/training-routine/client'
import { useRoutines } from '@/app/store'

type CreateRotineFormProps = {
  name: string
}

const createRoutineSchema = yup.object({
  name: yup.string().required('Esse campo é obrigatório'),
})

export function NewRoutineSection() {
  const { setUpdateRoutines } = useRoutines((store) => {
    return {
      setUpdateRoutines: store.setUpdateRoutines,
    }
  })

  const createRoutineForm = useForm<CreateRotineFormProps>({
    resolver: yupResolver(createRoutineSchema),
  })

  const onSubmit: SubmitHandler<CreateRotineFormProps> = async (data) => {
    try {
      const createTrainingRoutineRequest = await createTrainingRoutine(
        data.name,
      )

      if (createTrainingRoutineRequest.success) {
        console.log('Rotina de treino criada com sucesso')
        setUpdateRoutines()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2 className="text-2xl mb-8">Criar nova rotina de treino</h2>

      <FormProvider {...createRoutineForm}>
        <form
          className="flex flex-col gap-2 w-96"
          onSubmit={createRoutineForm.handleSubmit(onSubmit)}
        >
          <input
            className="border rounded-sm p-2"
            type="text"
            placeholder="Nome da rotina de treino"
            {...createRoutineForm.register('name')}
          />
          {createRoutineForm.formState.errors.name?.message}
          <button
            className="border rounded-sm py-2 hover:bg-zinc-50"
            type="submit"
          >
            Criar
          </button>
        </form>
      </FormProvider>
    </>
  )
}
