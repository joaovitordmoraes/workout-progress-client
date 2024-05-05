import { getSession } from 'next-auth/react'
import { api } from '../api'

type CreateAccountProps = {
  name: string
  email: string
  password: string
}

export async function createAccount({
  name,
  email,
  password,
}: CreateAccountProps) {
  try {
    const session = await getSession()

    const body = JSON.stringify({
      name,
      email,
      password,
    })

    const data = await api({
      path: '/users',
      init: {
        method: 'POST',
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${session?.user}`,
          'Content-Type': 'application/json',
        },
        body,
      },
    })

    const response = await data.json()

    console.log(response)

    return response
  } catch (error) {
    console.log(error)
  }
}
