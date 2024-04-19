import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      token: string
      cookies: atring
    }
  }
  interface User {
    token?: string
    cookies?: string
  }
}
