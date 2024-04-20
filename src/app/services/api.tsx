type ApiProps = {
  path: string
  init?: RequestInit
}

export function api({ path, init }: ApiProps) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL

  const url = new URL(path, baseURL)
  return fetch(url.toString(), init)
}
