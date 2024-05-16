'use client'

import { getCheckIns } from '@/app/services/checkin/client'
import { useEffect, useState } from 'react'

export function CheckInCounter() {
  const [checkInCounter, setCheckInCounter] = useState(0)

  useEffect(() => {
    async function loadCounter() {
      const count = await getCheckIns()
      setCheckInCounter(count.checkInsCount)
    }

    loadCounter()
  }, [])

  return (
    <section>
      <div className="border rounded-md border-zinc-500 w-full h-60 lg:w-80 lg:h-80 flex flex-col justify-between">
        <strong className="text-8xl text-center flex flex-1 justify-center items-center">
          {checkInCounter}
        </strong>
        <div className="border-t border-zinc-500 text-center p-2 text-2xl">
          <strong>Treinos realizados</strong>
        </div>
      </div>
    </section>
  )
}
