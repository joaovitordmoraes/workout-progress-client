'use client'

import { Sidebar } from '@/app/components/Sidebar'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type SidebarContentProps = {
  name: string
  email: string
}

export function SidebarContent({ name, email }: SidebarContentProps) {
  const router = useRouter()

  async function logout() {
    await signOut({
      redirect: false,
    })

    router.replace('/')
  }

  return <Sidebar name={name} email={email} onLogout={() => logout()} />
}
