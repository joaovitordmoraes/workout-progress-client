import { MyRoutineHeader } from './components/MyRoutineHeader'
import { RoutinesList } from './components/RoutinesList'

export default async function Routines() {
  return (
    <div className="w-full h-screen flex flex-col p-6">
      <MyRoutineHeader />
      <RoutinesList />
    </div>
  )
}
