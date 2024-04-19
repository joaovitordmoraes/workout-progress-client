import { getServerSession } from 'next-auth'
import LogoutSection from '@/app/(authenticated)/components/LogoutSection'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Logout() {
  const session = await getServerSession(nextAuthOptions)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session?.user}`,
    },
  })

  const profile = await response.json()

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-8">Olá, {profile.user.name}. Bem vindo(a)!</h1>
      <LogoutSection />
    </div>
  )
}
