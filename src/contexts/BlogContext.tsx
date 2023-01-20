import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface IBlogUserProps {
  id: number
  login: string
  avatar_url: string
  gravatar_id: string
  html_url: string
  name: string
  company: string
  email: string
  bio: string
  followers: number
  following: number
  created_at: string
}

export interface IBlogReactionsProps {
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface IBlogPostProps {
  id: number
  number: number
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
  reactions: IBlogReactionsProps
  state: string
  locked: boolean
  score: number
}

interface IBlogPostsProps {
  totalCount: number
  items: IBlogPostProps[]
}

interface IBlogProps {
  user: IBlogUserProps
  posts: IBlogPostsProps
}

interface IBlogContextTypes {
  data: IBlogProps
  fetchFindUniquePost: () => Promise<void>
}

interface IBlogProviderProps {
  children: ReactNode
}

const GITHUB_USERNAME = 'gw-rodrigues'
const GITHUB_REPOSITORY = 'ignite-react-2022-github-blog'

export const BlogContext = createContext({} as IBlogContextTypes)

export function BlogProvider({ children }: IBlogProviderProps) {
  const [data, setData] = useState<IBlogProps>({} as IBlogProps)

  const fetchInitialData = useCallback(async () => {
    const fetchUser = api.get(`users/${GITHUB_USERNAME}`)
    const fetchPosts = api.get(`search/issues`, {
      params: {
        q: `repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      },
    })

    await Promise.all([fetchUser, fetchPosts]).then(
      ([{ data: user }, { data: posts }]) => {
        setData({ user, posts })
      },
    )
  }, [])

  const fetchFindUniquePost = useCallback(async (query?: number) => {
    const response = await api.get(
      `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues/${query}`,
    )
    console.log(response.data)
  }, [])

  useEffect(() => {
    fetchInitialData()
  }, [fetchInitialData])

  return (
    <BlogContext.Provider value={{ data, fetchFindUniquePost }}>
      {children}
    </BlogContext.Provider>
  )
}
