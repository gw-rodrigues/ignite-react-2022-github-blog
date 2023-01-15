import { ArrowSquareOut } from 'phosphor-react'
import { ContentHeaderSocial } from '../../../components/Content-header-social'

export function ContentHeader() {
  return (
    <div className="w-full h-auto min-h-[10.5rem] bg-base-profile shadow-[0px 2px 28px rgba(0,0,0,0.2)] rounded-[10px] p-8 flex items-center gap-8 flex-col md:flex-row">
      <figure className="rounded-lg max-w-[148px] max-h-[148px] w-full h-full overflow-hidden grayscale-[25%]">
        <img src="https://github.com/gw-rodrigues.png" alt="Github Profile" />
      </figure>

      <div className="flex flex-col gap-2">
        <header className="flex flex-col items-center md:justify-between md:flex-row">
          <h2 className="text-2xl font-bold text-base-title">
            Gleydson W. Rodrigues
          </h2>

          <a
            href="#"
            className="h-5 flex items-center gap-2 text-blue text-xs font-bold border-b border-transparent hover:border-blue transition-colors"
          >
            <span>GITHUB</span> <ArrowSquareOut size={12} weight="bold" />
          </a>
        </header>

        <p className="mb-2 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          distinctio id iste deleniti? Minus enim quam corporis quo molestias,
          dolores.
        </p>

        <ContentHeaderSocial
          github="gw-rodrigues"
          company="Rocketseat"
          followers={32}
        />
      </div>
    </div>
  )
}
