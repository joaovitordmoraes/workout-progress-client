'use client'

import { BarChart2, Dumbbell, User } from 'lucide-react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'

export function MainNavigation() {
  const page = usePathname()
  const pageName = page?.substring(1)

  return (
    <nav className="space-y-0.5">
      <NavItem
        title="Dashboard"
        link="/dashboard"
        icon={BarChart2}
        state={pageName === 'dashboard' ? 'selected' : 'default'}
      />
      <NavItem
        title="Treinos"
        link="/routines"
        icon={Dumbbell}
        state={pageName.includes('routines') ? 'selected' : 'default'}
      />
      <NavItem
        title="Usuário"
        link="/profile"
        icon={User}
        state={pageName === 'profile' ? 'selected' : 'default'}
      />
    </nav>
  )
}
