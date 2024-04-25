type RoutineItemProps = {
  name: string
  trainings: number
  onClick: () => void
}

export function RoutineItem({ name, trainings, onClick }: RoutineItemProps) {
  return (
    <div className="flex flex-col gap-6 p-3 border rounded-sm">
      <div>
        <h3 className="text-xl font-bold uppercase">{name}</h3>
        <p className="text-md text-zinc-500">{trainings} treinos</p>
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
