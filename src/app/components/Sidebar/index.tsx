'use client'

import { Cog, Menu, X } from 'lucide-react'
import { Logo } from '../Logo'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { LogoutButton } from './LogoutButton'
import * as Collapsible from '@radix-ui/react-collapsible'
import { tv } from 'tailwind-variants'

type SidebarProps = {
  name: string
  email: string
  onLogout: () => void
}

const sidebar = tv({
  slots: {
    container: [
      'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4',
      'data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0',
      'lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8',
    ],
    menu: 'flex items-center justify-between',
    floatMenuOpen:
      'data-[state=closed]:block data-[state=open]:hidden lg:hidden lg:data-[state=open]:hidden lg:data-[state=closed]:hidden',
    iconMenu: 'h-6 w-6',
    floatMenuClose:
      'data-[state=open]:block data-[state=closed]:hidden lg:hidden',
    menuContent:
      'flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex',
    bottomNav: 'mt-auto flex flex-col gap-6',
    divider: 'h-px bg-zinc-200',
  },
})

export function Sidebar({ name, email, onLogout }: SidebarProps) {
  const {
    container,
    menu,
    floatMenuOpen,
    iconMenu,
    floatMenuClose,
    menuContent,
    bottomNav,
    divider,
  } = sidebar()

  return (
    <Collapsible.Root className={container()}>
      <div className={menu()}>
        <Logo />
        <Collapsible.Trigger asChild className={floatMenuOpen()}>
          <button>
            <Menu className={iconMenu()} />
          </button>
        </Collapsible.Trigger>
        <Collapsible.Trigger asChild className={floatMenuClose()}>
          <button>
            <X className={iconMenu()} />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content forceMount className={menuContent()}>
        <MainNavigation />

        <div className={bottomNav()}>
          <nav>
            <NavItem title="Settings" link="/settings" icon={Cog} />
          </nav>

          <div className={divider()}></div>

          <LogoutButton name={name} email={email} onLogout={onLogout} />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
