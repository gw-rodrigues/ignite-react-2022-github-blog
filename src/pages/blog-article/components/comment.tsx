import { ArrowSquareOut, Calendar, GithubLogo } from 'phosphor-react'
import { SocialReactions } from '../../../components/SocialReactions'
import { IBlogCommentsProps } from '../../../contexts/BlogContext'
import { dateFormatter } from '../../../utils/formatter'

export function Comment(comment: IBlogCommentsProps) {
  return (
    <li className="flex flex-col sm:flex-row items-center md:items-start flex-wrap bg-base-post rounded-lg p-8 gap-8 justify-between">
      <figure className="w-20 basis-20 rounded-lg overflow-hidden">
        <img src={comment.user.avatar_url} alt="Github Profile" />
      </figure>
      <div className="flex-1 flex flex-col items-center gap-8 sm:gap-2 sm:items-end">
        <a
          href={comment.html_url}
          className="w-auto h-5 flex items-center gap-2 text-blue text-xs font-bold border-b border-transparent hover:border-blue transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <span>VER NO GITHUB</span> <ArrowSquareOut size={12} weight="bold" />
        </a>

        <div className="w-full ">
          <p>{comment.body}</p>
        </div>
      </div>
      <div className="w-full gap-2 flex flex-wrap items-center justify-center lg:justify-between">
        <div className="flex flex-wrap gap-2 sm:gap-4 sm:mt-4 items-center justify-center">
          <div className="flex gap-2 items-center justify-center">
            <GithubLogo size={16} weight="fill" className="fill-base-span" />
            <time className="text-sm text-base-span">{comment.user.login}</time>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <Calendar size={16} weight="fill" className="fill-base-span" />
            <time className="text-sm text-base-span">
              {dateFormatter(new Date(comment.created_at))}
            </time>
          </div>
        </div>

        <SocialReactions {...comment.reactions} />
      </div>
    </li>
  )
}
