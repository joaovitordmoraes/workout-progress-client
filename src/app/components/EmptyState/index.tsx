import { FiPlus } from 'react-icons/fi'

type EmptyStateProps = {
  children: React.ReactNode
  buttonLabel: string
  onClick: () => void
}

export function EmptyState({
  children,
  buttonLabel,
  onClick,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <strong className="text-center">{children}</strong>
      <button
        className="flex items-center gap-2 border rounded-full py-2 pl-4 pr-5 hover:bg-zinc-50"
        type="button"
        onClick={onClick}
      >
        <FiPlus /> <span>{buttonLabel}</span>
      </button>
    </div>
  )
}
