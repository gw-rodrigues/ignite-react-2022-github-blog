import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { ContentHeaderSocial } from '../../../components/Content-header-social'

interface IArticleHeaderProps {
  title: string
}

export function ArticleHeader({ title }: IArticleHeaderProps) {
  return (
    <div className="w-full h-auto min-h-[10.5rem] bg-base-profile shadow-[0px 2px 28px rgba(0,0,0,0.2)] rounded-[10px] p-8 ">
      <header className="flex flex-col gap-5">
        <div className="flex justify-between">
          <a
            href="/"
            className="h-5 flex items-center gap-2 text-blue text-xs font-bold border-b border-transparent hover:border-blue transition-colors"
          >
            <CaretLeft /> VOLTAR
          </a>

          <a
            href="#"
            className="h-5 flex items-center gap-2 text-blue text-xs font-bold border-b border-transparent hover:border-blue transition-colors"
          >
            <span>VER NO GITHUB</span>
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>

        <h2 className="text-2xl font-bold text-base-title">{title}</h2>
      </header>

      <ContentHeaderSocial
        github="gw-rodrigues"
        createdAt={new Date()}
        comments={5}
      />
    </div>
  )
}
