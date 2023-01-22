import { Link } from 'react-router-dom'
import { IBlogPostProps } from '../../../contexts/BlogContext'
import { dateFormatter } from '../../../utils/formatter'

interface IArticleLinksProps {
  post: IBlogPostProps
}

export function ArticleLinks({ post }: IArticleLinksProps) {
  return (
    <Link
      to={`/post/${post.number}`}
      className="basis-full lg:basis-[416px] shrink-0 bg-base-post rounded-xl p-8 transition-colors border border-transparent hover:border-base-label"
    >
      <article>
        <header className="flex justify-between gap-4">
          <h2 className="text-xl font-bold text-base-title">{post.title}</h2>
          <time className="text-sm text-base-span">
            {dateFormatter(new Date(post.created_at))}
          </time>
        </header>
        <p className="mt-5 text-base-text">
          {post.body.length > 180
            ? `${post.body.substring(0, 181)}...`
            : post.body}
        </p>
      </article>
    </Link>
  )
}
