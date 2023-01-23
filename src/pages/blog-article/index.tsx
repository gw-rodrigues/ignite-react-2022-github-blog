import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { SocialReactions } from '../../components/SocialReactions'

import { BlogContext, IBlogPostProps } from '../../contexts/BlogContext'
import { useMarkdownParser } from '../../hooks/useMarkdownParser'
import { ArticleHeader } from './components/articleHeader'
import { ListComments } from './components/listComments'

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

      <article className="flex flex-col px-4 sm:px-8 pb-8 gap-6 text-base-text text-base">
        <div>{parsedBody}</div>
        {post.reactions && <SocialReactions {...post.reactions} />}
      </article>

      {post.comments ? (
        <ListComments postNumber={post.number} totalComments={post.comments} />
      ) : null}
    </div>
  )
}
