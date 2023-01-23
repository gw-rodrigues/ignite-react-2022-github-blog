import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import { BlogContext, IBlogPostProps } from '../../contexts/BlogContext'
import { useMarkdownParser } from '../../hooks/useMarkdownParser'
import { ArticleHeader } from './components/article-header'

export function BlogArticle() {
  const [post, setPost] = useState<IBlogPostProps>({} as IBlogPostProps)
  const { id } = useParams()

  const handleFetchFindUniquePost = useContextSelector(
    BlogContext,
    (context) => context.fetchFindUniquePost,
  )

  const parsedBody = useMarkdownParser(post.body)

  useEffect(() => {
    if (!id) return
    handleFetchFindUniquePost(id).then((data: IBlogPostProps) => setPost(data))
  }, [handleFetchFindUniquePost, id])

  return (
    <div className="flex flex-col gap-10">
      <ArticleHeader {...post} />

      <article className="px-8 pb-10 text-base-text text-base">
        {parsedBody}
      </article>
    </div>
  )
}
