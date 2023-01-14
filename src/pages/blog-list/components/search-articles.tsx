export function SearchArticles() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <h2>Publicações</h2>
        <div>6 publicações</div>
      </div>
      <input
        type="text"
        name="search"
        className="w-full px-3 py-4 bg-base-input border border-base-border rounded-md text-base-text placeholder:text-base-label"
        placeholder="Buscar conteúdo"
      />
    </div>
  )
}
