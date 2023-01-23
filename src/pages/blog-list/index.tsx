import { ContentHeader } from './components/contentHeader'
import { ArticleLinks } from './components/articleLinks'
import { SearchArticles } from './components/searchArticles'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../contexts/BlogContext'

export interface IPostProps {
  id: string
  title: string
  description: string
  createdAt: Date
}

export function BlogList() {
  const data = useContextSelector(BlogContext, (context) => context.data)

  return (
    <div className="flex flex-col gap-12">
      <ContentHeader user={data?.user} />
      <SearchArticles totalCount={data?.posts?.total_count} />

      <div className="flex flex-wrap justify-center gap-8">
        {data?.posts?.items.map((post) => (
          <ArticleLinks key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
