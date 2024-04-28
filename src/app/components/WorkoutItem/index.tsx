import { FiTrash2 } from 'react-icons/fi'

type WorkoutItemProps = {
  name: string
  description?: string | null
  series: number
  series_type: string
  reps: number
  weight: number
  onRemove: () => void
}

export function WorkoutItem({
  name,
  description,
  series,
  series_type,
  reps,
  weight,
  onRemove,
}: WorkoutItemProps) {
  return (
    <div className="border border-zinc-200 rounded-sm p-4">
      <header className="flex justify-between mb-4">
        <div>
          <strong className="text-2xl">{name}</strong>
          {description && (
            <p className="text-sm">
              <strong>Obs:</strong> {description}
            </p>
          )}
        </div>
        <div>
          <button
            type="button"
            className="rounded-md p-2 hover:bg-zinc-50"
            onClick={onRemove}
          >
            <FiTrash2 className="w-5 h-5 text-zinc-500" />
          </button>
        </div>
      </header>
      <div className="flex gap-6">
        <div>
          <strong>Tipo de série:</strong> {series_type}
        </div>

        <div>
          <strong>Séries:</strong> {series}
        </div>

        <div>
          <strong>Reps:</strong> {reps}
        </div>

        <div>
          <strong>Peso:</strong> {weight}kg
        </div>
      </div>
    </div>
  )
}
