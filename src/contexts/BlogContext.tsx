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

export interface IBlogCommentsProps {
  id: number
  url: string
  html_url: string
  user: IBlogUserProps
  created_at: string
  updated_at: string
  body: string
  reactions: IBlogReactionsProps
}

export interface IBlogPostProps {
  id: number
  number: number
  title: string
  body: string
  html_url: string
  created_at: string
  updated_at: string
  reactions: IBlogReactionsProps
  state: string
  locked: boolean
  score: number
  user: IBlogUserProps
  comments: number
  comments_url: string
}

interface IBlogPostsProps {
  total_count: number
  items: IBlogPostProps[]
}

interface IBlogProps {
  user: IBlogUserProps
  posts: IBlogPostsProps
}

interface IBlogContextTypes {
  data: IBlogProps
  searchFilterIsAtive: boolean
  fetchFindManyPosts: (query?: string) => Promise<void>
  fetchFindUniquePost: (id: string) => Promise<IBlogPostProps>
  fetchFindManyCommentsByPost: (id: string) => Promise<IBlogCommentsProps[]>
}

interface IBlogProviderProps {
  children: ReactNode
}

const GITHUB_USERNAME = 'gw-rodrigues'
const GITHUB_REPOSITORY = 'ignite-react-2022-github-blog'

export const BlogContext = createContext({} as IBlogContextTypes)

export function BlogProvider({ children }: IBlogProviderProps) {
  const [data, setData] = useState<IBlogProps>({} as IBlogProps)
  const [searchFilterIsAtive, setSearchFilterIsAtive] = useState(false)

  const fetchUser = useCallback(async () => {
    const response = await api.get(`users/${GITHUB_USERNAME}`)
    setData((prev) => ({ ...prev, user: response.data }))
  }, [])

  const fetchFindManyPosts = useCallback(async (query?: string) => {
    const response = await api.get(`search/issues`, {
      params: {
        q:
          query !== undefined
            ? `${query} repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`
            : `repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      },
    })

    setData((prev) => ({ ...prev, posts: response.data }))

    if (query !== undefined) {
      setSearchFilterIsAtive(true)
    } else {
      setSearchFilterIsAtive(false)
    }
  }, [])

  const fetchFindUniquePost = useCallback(async (id: string) => {
    const response = await api.get(
      `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues/${id}`,
    )
    return response.data
  }, [])

  const fetchFindManyCommentsByPost = useCallback(async (id: string) => {
    const response = await api.get(
      `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues/${id}/comments`,
    )
    return response.data
  }, [])

  useEffect(() => {
    fetchUser()
    fetchFindManyPosts()
  }, [fetchUser, fetchFindManyPosts])

  return (
    <BlogContext.Provider
      value={{
        data,
        searchFilterIsAtive,
        fetchFindManyPosts,
        fetchFindUniquePost,
        fetchFindManyCommentsByPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
