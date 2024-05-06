import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'
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
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-dashboard">
      <SidebarSection />
      <main className="w-full lg:col-start-2 lg:w-full mt-20 lg:mt-0">
        {children}
      </main>
    </div>
  )
}
