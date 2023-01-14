import { Terminal } from 'phosphor-react'

export function Header() {
  return (
    <header className="w-full h-[18.5rem] bg-base-profile bg-header bg-cover bg-center bg-no-repeat flex justify-center pt-[4.15625rem]">
      <a href="/" className="flex items-center flex-col">
        <Terminal size={45} weight="fill" className="fill-blue" />
        <h1 className="text-2xl text-blue mt-5">GITHUB BLOG</h1>
      </a>
    </header>
  )
}
