'use client'

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createTraining } from '@/app/services/training/client'
import { useRoutines } from '@/app/store/routine'

type CreateTrainingFormProps = {
  name: string
}

const createTrainingSchema = yup.object({
  name: yup.string().required('Esse campo é obrigatório'),
})

export function NewTrainingForm() {
  const { setUpdateRoutines, routineId, setUpdateTrainings } = useRoutines(
    (store) => {
      return {
        setUpdateRoutines: store.setUpdateRoutines,
        routineId: store.routineId,
        setUpdateTrainings: store.setUpdateTrainings,
      }
    },
  )

  const createTrainingForm = useForm<CreateTrainingFormProps>({
    resolver: yupResolver(createTrainingSchema),
  })

  const onSubmit: SubmitHandler<CreateTrainingFormProps> = async (data) => {
    try {
      const createTrainingRequest = await createTraining({
        name: data.name,
        routineId,
      })

      if (createTrainingRequest.success) {
        setUpdateRoutines(false)
        setUpdateTrainings(true)
        createTrainingForm.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormProvider {...createTrainingForm}>
      <form
        className="flex flex-col gap-2"
        onSubmit={createTrainingForm.handleSubmit(onSubmit)}
      >
        <input
          className="border rounded-sm p-2"
          type="text"
          placeholder="Nome da rotina de treino"
          {...createTrainingForm.register('name')}
        />
        {createTrainingForm.formState.errors.name?.message}
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
