export type ExercisesProps = {
  name: string
  description?: string
  series: number
  series_type: string
  reps: number
}

type WorkoutCardProps = {
  name: string
  exercises: ExercisesProps[]
  onClick: () => void
}

export function WorkoutCard({ name, exercises, onClick }: WorkoutCardProps) {
  return (
    <section className="flex flex-col gap-6 border rounded-sm">
      <div className="p-6 bg-zinc-50">
        <h3 className="text-2xl font-bold uppercase">{name}</h3>
      </div>

      <div className="flex flex-col gap-6 px-6 pb-6">
        {exercises.map((item) => (
          <div key={item.name} className="flex flex-col">
            <strong className="text-xl">{item.name}</strong>
            {item.description && (
              <span className="text-sm">
                <strong>Obs:</strong> {item.description}
              </span>
            )}
            <p>
              <strong>Tipo de serie:</strong> {item.series_type}
            </p>
            <p>
              <strong>Series:</strong> {item.series}
            </p>
            <p>
              <strong>Reps:</strong> {item.reps}
            </p>
          </div>
        ))}

        <button
          className="border rounded-sm px-6 py-2 hover:bg-zinc-50"
          onClick={onClick}
        >
          Finalizar treino
        </button>
      </div>
    </section>
  )
}
