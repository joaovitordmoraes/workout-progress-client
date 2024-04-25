import { NewRoutineSection } from './components/NewRoutineSection'
import { RoutinesList } from './components/RoutinesList'

export default async function Routines() {
  return (
    <div className="w-full h-screen flex flex-col p-6">
      <NewRoutineSection />

      <div className="h-px w-full bg-zinc-200 my-6"></div>

      <h2 className="text-2xl mb-8">Minhas rotinas de treino:</h2>

      <section className="grid grid-cols-3 gap-6">
        <RoutinesList />
      </section>
    </div>
  )
}
