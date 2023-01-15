import { Input } from '../../../components/Input'

export function SearchArticles() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <h2 className="text-lg text-base-subtitle">Publicações</h2>
        <span className="text-sm text-base-span">6 publicações</span>
      </div>
      <Input name="search" type="text" placeholder="Buscar conteúdo" />
    </div>
  )
}
