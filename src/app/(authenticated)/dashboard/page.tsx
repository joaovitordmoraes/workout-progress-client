import { getProfileData } from '@/app/services/profile'

export default async function Logout() {
  const profile = await getProfileData()

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-8">Olá, {profile.user.name}. Bem vindo(a)!</h1>
    </div>
  )
}
