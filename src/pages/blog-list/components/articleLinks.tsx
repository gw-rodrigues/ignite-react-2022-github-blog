import { Link } from 'react-router-dom'
import { IBlogPostProps } from '../../../contexts/BlogContext'
import { useMarkdownParser } from '../../../hooks/useMarkdownParser'
import { dateFormatter } from '../../../utils/formatter'

interface IArticleLinksProps {
  post: IBlogPostProps
}

export function ArticleLinks({ post }: IArticleLinksProps) {
  const body =
    post.body.length > 185 ? `${post.body.substring(0, 185)}...` : post.body
  const parsedBody = useMarkdownParser(body)

  return (
    <Link
      to={`/post/${post.number}`}
      className="basis-full lg:basis-[416px] shrink-0 bg-base-post rounded-xl p-8 transition-colors border border-transparent hover:border-base-label"
    >
      <article>
        <header className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-base-title">
            {post.title}
          </h2>
          <time className="sm:basis-[100px] text-sm mt-1 text-base-span">
            {dateFormatter(new Date(post.created_at))}
          </time>
        </header>
        <div className="mt-5 text-base-text">{parsedBody}</div>
      </article>
    </Link>
  )
}
