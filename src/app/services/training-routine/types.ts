export type Routines = {
  id: string
  name: string
  user_id: string
  trainings: {
    id: string
    name: string
    training_routines_id: string
  }[]
}

export type TrainingExercises = {
  success: boolean
  routines: Routines[]
}
