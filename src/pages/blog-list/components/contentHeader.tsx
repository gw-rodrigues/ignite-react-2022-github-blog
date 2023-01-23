import { ArrowSquareOut } from 'phosphor-react'
import { ContentHeaderSocial } from '../../../components/ContentHeaderSocial'
import { IBlogUserProps } from '../../../contexts/BlogContext'

interface IContentHeaderProps {
  user: IBlogUserProps
}

export function ContentHeader({ user }: IContentHeaderProps) {
  if (!user) return null

  return (
    <div className="w-full h-auto min-h-[10.5rem] bg-base-profile shadow-[0px 2px 28px rgba(0,0,0,0.2)] rounded-[10px] p-8 flex items-center gap-8 flex-col md:flex-row">
      <figure className="rounded-lg max-w-[148px] max-h-[148px] w-full h-full overflow-hidden grayscale-[25%]">
        <img
          src={!user.avatar_url ? user.gravatar_id : user.avatar_url}
          alt="Github Profile"
        />
      </figure>

      <div className="flex-1 flex flex-col gap-2">
        <header className="flex flex-col items-center justify-center md:justify-between md:flex-row">
          <h2 className="text-xl sm:text-2xl font-bold text-base-title">
            {user.name}
          </h2>

          <a
            href={user.html_url}
            className="h-5 flex items-center gap-2 text-blue text-xs font-bold border-b border-transparent hover:border-blue transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span> <ArrowSquareOut size={12} weight="bold" />
          </a>
        </header>

        <p className="mb-2 text-center md:text-left">{user.bio}</p>

        <ContentHeaderSocial
          github={user.login}
          company={user.company}
          followers={user.followers}
        />
      </div>
    </div>
  )
}
