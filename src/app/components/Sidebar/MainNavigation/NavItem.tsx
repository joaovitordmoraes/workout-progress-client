import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { useSidebar } from '@/app/store/sidebar'

export type NavItemProps = {
  title: string
  link: string
  icon: React.ElementType
  state?: 'selected' | 'default'
}

const item = tv({
  slots: {
    container:
      'group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50',
    iconStyle: 'h-5 w-5 text-zinc-500',
    text: 'font-medium text-zinc-700 group-hover:text-violet-500',
  },

  variants: {
    state: {
      selected: {
        container: 'bg-violet-50',
        text: 'text-violet-500',
      },
      default: {
        container: '',
        text: '',
      },
    },
  },
})

export function NavItem({
  title,
  link,
  icon: Icon,
  state = 'default',
}: NavItemProps) {
  const { container, iconStyle, text } = item({ state })
  const { setIsOpen } = useSidebar()

  return (
    <Link href={link} className={container()} onClick={() => setIsOpen(false)}>
      <Icon className={iconStyle()} />
      <span className={text()}>{title}</span>
    </Link>
  )
}
