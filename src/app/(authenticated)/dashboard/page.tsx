import { getCheckIns } from '@/app/services/checkin/server'
import { getProfileData } from '@/app/services/profile'

export default async function Logout() {
  const profile = await getProfileData()
  const checkIns = await getCheckIns()

  return (
    <div className="w-full h-screen flex flex-col p-6">
      <header>
        <h1 className="text-2xl mb-8">
          Olá, {profile.user.name}. Bem vindo(a)!
        </h1>
      </header>

      <section>
        <div className="border rounded-md border-zinc-500 w-full h-60 lg:w-80 lg:h-80 flex flex-col justify-between">
          <strong className="text-8xl text-center flex flex-1 justify-center items-center">
            {checkIns.checkInsCount}
          </strong>
          <div className="border-t border-zinc-500 text-center p-2 text-2xl">
            <strong>Treinos realizados</strong>
          </div>
        </div>
      </section>
    </div>
  )
}
