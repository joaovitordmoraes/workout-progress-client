/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from 'next-auth/providers/credentials'
import { jwtDecode } from 'jwt-decode'

import type { NextAuthOptions } from 'next-auth'

async function refreshAccessToken(token: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/token/refresh`
    const headers = {
      Cookie: token,
    }

    const response = await fetch(url, {
      method: 'PATCH',
      headers,
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return refreshedTokens.token
  } catch (error) {
    console.log(error)

    return {
      error: 'RefreshAccessTokenError',
    }
  }
}

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/login`
          if (credentials) {
            const body = {
              email: credentials.email,
              password: credentials.password,
            }

            const response = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            })

            const user = await response.json()
            const cookies = response.headers.get('set-cookie')

            if (user && response.ok) {
              return {
                ...user,
                cookies,
              }
            }
          }

          return null
        } catch (error: any) {
          throw new Error(error)
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.token
        token.cookies = user.cookies
      }

      const decoded = jwtDecode(token.user as string)

      if (Date.now() > decoded.exp! * 1000) {
        const refreshToken = await refreshAccessToken(token.cookies as string)
        token.user = refreshToken
      }

      return token
    },
    async session({ session, token }) {
      session.user = token.user as any

      return session
    },
  },
}
