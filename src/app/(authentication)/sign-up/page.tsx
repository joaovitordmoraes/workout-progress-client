'use client'

import { createAccount } from '@/app/services/sign-up/client'
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const creationResponse = await createAccount({
      name,
      email,
      password,
    })

    if (creationResponse.success) {
      toast.success('Conta criada com sucesso!')
    } else {
      toast.error(creationResponse.message)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl mb-6">Criar conta</h1>

      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
        />

        <input
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="text"
          name="email"
          placeholder="Digite um e-mail válido"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="password"
          name="password"
          placeholder="Digite uma senha"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          type="submit"
          className="h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          Criar conta
        </button>
      </form>

      <div className="mt-6">
        Já possui uma conta? <Link href="/">Clique aqui</Link>
      </div>

      <ToastContainer />
    </main>
  )
}
