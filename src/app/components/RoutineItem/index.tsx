import { FiTrash2 } from 'react-icons/fi'

type RoutineItemProps = {
  name: string
  trainings: number
  onClick: () => void
  onRemove: () => void
}

export function RoutineItem({
  name,
  trainings,
  onClick,
  onRemove,
}: RoutineItemProps) {
  return (
    <div className="flex flex-col gap-6 p-3 border rounded-sm">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold uppercase">{name}</h3>
          <p className="text-md text-zinc-500">{trainings} treinos</p>
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
      </div>
      <button
        className="border rounded-sm px-6 py-2 hover:bg-zinc-50"
        type="button"
        onClick={onClick}
      >
        Visualizar Treinos
      </button>
    </div>
  )
}
