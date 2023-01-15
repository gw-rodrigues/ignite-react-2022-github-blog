import { IPostProps } from '..'
import { dateFormatter } from '../../../utils/formatter'

interface IArticleLinksProps {
  post: IPostProps
}

export function ArticleLinks({ post }: IArticleLinksProps) {
  return (
    <a
      href={`/post/${post.id}`}
      className="basis-full lg:basis-[416px] shrink-0 bg-base-post rounded-xl p-8 transition-colors border border-transparent hover:border-base-label"
    >
      <article>
        <header className="flex justify-between gap-4">
          <h2 className="text-xl font-bold text-base-title">{post.title}</h2>
          <time className="text-sm text-base-span">
            {dateFormatter(post.createdAt)}
          </time>
        </header>
        <p className="mt-5 text-base-text">
          {post.description.length > 180
            ? `${post.description.substring(0, 181)}...`
            : post.description}
        </p>
      </article>
    </a>
  )
}
