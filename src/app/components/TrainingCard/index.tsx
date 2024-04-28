import { FiTrash2 } from 'react-icons/fi'

type TrainingCardProps = {
  name: string
  onClick: () => void
  onRemove: () => void
}

export function TrainingCard({ name, onClick, onRemove }: TrainingCardProps) {
  return (
    <section className="flex flex-col gap-6 border rounded-sm">
      <div className="flex justify-between items-center p-6 bg-zinc-50">
        <h3 className="text-2xl font-bold uppercase">{name}</h3>

        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50"
          onClick={onRemove}
        >
          <FiTrash2 className="w-5 h-5 text-zinc-500" />
        </button>
      </div>

      <div className="flex flex-col gap-6 px-6 pb-6">
        <button
          className="border rounded-sm px-6 py-2 hover:bg-zinc-50"
          onClick={onClick}
        >
          Visualizar treino
        </button>
      </div>
    </section>
  )
}
