import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IBlogProps {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  company: string
  blog: string
  location: string
  email: string
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface IBlogContextTypes {
  userData: IBlogProps
}

interface IBlogProviderProps {
  children: ReactNode
}

const GITHUB_USERNAME = 'gw-rodrigues'
const GITHUB_REPOSITORY = 'ignite-react-2022-github-blog'

export const BlogContext = createContext({} as IBlogContextTypes)

export function BlogProvider({ children }: IBlogProviderProps) {
  const [userData, setUserData] = useState({} as IBlogProps)

  const fetchUser = useCallback(async () => {
    const response = await api.get(`users/${GITHUB_USERNAME}`)
    setUserData(response.data)
  }, [])

  const fetchPosts = useCallback(async () => {
    const response = await api.get(`search/issues`, {
      params: {
        q: `repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      },
    })
    console.log(response.data)
  }, [])

  const fetchFindPost = useCallback(async (query?: number) => {
    const response = await api.get(
      `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues/${query}`,
    )
    console.log(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [])

  console.log(userData)

  return (
    <BlogContext.Provider value={{ userData }}>{children}</BlogContext.Provider>
  )
}
