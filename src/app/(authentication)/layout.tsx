import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

interface AuthenticatedLayoutProps {
  children: ReactNode
}

export default async function AuthenticationLayout({
  children,
}: AuthenticatedLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/dashboard')
  }

  return <>{children}</>
}
