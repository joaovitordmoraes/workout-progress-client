import { getProfileData } from '@/app/services/profile'
import { CheckInCounter } from './components/CheckInCounterSection'

export default async function Dashboard() {
  const profile = await getProfileData()

  return (
    <div className="w-full h-screen flex flex-col p-6">
      <header>
        <h1 className="text-2xl mb-8">
          Olá, {profile.user.name}. Bem vindo(a)!
        </h1>
      </header>

      <CheckInCounter />
    </div>
  )
}
