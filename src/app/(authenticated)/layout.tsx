import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { SidebarSection } from './components/SidebarSection'

interface AuthenticatedLayoutProps {
  children: ReactNode
}

export default async function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <div className="grid min-h-screen grid-cols-dashboard">
      <SidebarSection />
      <main className="w-screen lg:col-start-2 lg:w-full">{children}</main>
    </div>
  )
}
