import { Input } from '../../../components/Input'

interface ISearchArticles {
  totalCount: number
}
export function SearchArticles({ totalCount }: ISearchArticles) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <h2 className="text-lg text-base-subtitle">Publicações</h2>
        <span className="text-sm text-base-span">{totalCount} publicações</span>
      </div>
      <Input name="search" type="text" placeholder="Buscar conteúdo" />
    </div>
  )
}
