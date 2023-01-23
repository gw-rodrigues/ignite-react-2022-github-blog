import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { ContentHeaderSocial } from '../../../components/ContentHeaderSocial'
import { IBlogPostProps } from '../../../contexts/BlogContext'

export function ArticleHeader(post: IBlogPostProps) {
  return (
    <div className="w-full h-auto min-h-[10.5rem] bg-base-profile shadow-[0px 2px 28px rgba(0,0,0,0.2)] rounded-[10px] p-8">
      <header className="flex flex-col gap-5 mb-6 sm:mb-0">
        <div className="flex flex-wrap justify-center sm:justify-between gap-4">
          <Link
            to="/"
            className="flex items-center h-5 gap-2 text-xs font-bold transition-colors border-b border-transparent text-blue hover:border-blue"
          >
            <CaretLeft /> VOLTAR
          </Link>

          <a
            href={post?.html_url}
            className="flex items-center h-5 gap-2 text-xs font-bold transition-colors border-b border-transparent text-blue hover:border-blue"
            target="_blank"
            rel="noreferrer"
          >
            <span>VER NO GITHUB</span>
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-base-title">
          {post?.title}
        </h2>
      </header>

      <ContentHeaderSocial
        github={post?.user?.login}
        createdAt={post?.created_at}
        comments={post.reactions?.total_count}
      />
    </div>
  )
}
