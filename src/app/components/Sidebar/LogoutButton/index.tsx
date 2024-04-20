import { LogOut } from 'lucide-react'
import { tv } from 'tailwind-variants'

type LogoutButtonProps = {
  name: string
  email: string
  onLogout: () => void
}

const logout = tv({
  slots: {
    container: 'flex items-center gap-3 truncate',
    content: 'flex flex-col truncate',
    userName: 'text-sm font-semibold text-sinc-700 truncate',
    userEmail: 'text-sm text-zinc-500 truncate',
    button: 'ml-auto rounded-md p-2 hover:bg-zinc-50',
    icon: 'w-5 h-5 text-zinc-500',
  },
})

export function LogoutButton({ name, email, onLogout }: LogoutButtonProps) {
  const { container, content, userName, userEmail, button, icon } = logout()

  return (
    <div className={container()}>
      <div className={content()}>
        <span className={userName()}>{name}</span>
        <span className={userEmail()}>{email}</span>
      </div>

      <button type="button" className={button()} onClick={onLogout}>
        <LogOut className={icon()} />
      </button>
    </div>
  )
}
