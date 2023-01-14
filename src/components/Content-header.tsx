import { ArrowSquareOut, Buildings, Users, GithubLogo } from 'phosphor-react'

export function ContentHeader() {
  return (
    <div className="w-full h-auto min-h-[10.5rem] bg-base-profile shadow-[0px 2px 28px rgba(0,0,0,0.2)] rounded-[10px] p-8 flex items-center gap-8">
      <figure className="rounded-lg max-w-[148px] max-h-[148px] w-full h-full overflow-hidden grayscale-[25%]">
        <img src="https://github.com/gw-rodrigues.png" alt="Github Profile" />
      </figure>
      <div>
        <header className="flex justify-between">
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
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          distinctio id iste deleniti? Minus enim quam corporis quo molestias,
          dolores.
        </p>
        <div className="flex gap-6 mt-6 text-base-subtitle text-sm">
          <div className="flex gap-2 items-center">
            <GithubLogo size={18} weight="fill" className="fill-base-label" />
            <span>gw-rodrigues</span>
          </div>
          <div className="flex gap-2 items-center">
            <Buildings size={18} weight="fill" className="fill-base-label" />
            <span>Rocketseat</span>
          </div>
          <div className="flex gap-2 items-center ">
            <Users size={18} weight="fill" className="fill-base-label" />
            <span>32 seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}
