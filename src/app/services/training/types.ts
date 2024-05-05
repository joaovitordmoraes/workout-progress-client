export type Exercise = {
  id: string
  name: string
  description?: string
  series: number
  series_type: string
  reps: number
  weight: number
  trainingsId?: string
  trainingRoutinesId?: string | null
}

export type GetTrainingExercises = {
  success: boolean
  exercises: Exercise[]
}
