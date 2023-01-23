import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AlertMessage } from '../../../components/AlertMessage'
import { BlogContext } from '../../../contexts/BlogContext'
import { useContextSelector } from 'use-context-selector'

const searchPostsSchema = z.object({
  query: z
    .string({
      required_error: 'A busca nao pode ser vazia.',
    })
    .min(1, { message: 'Precisa ter 1 ou mais carácteres.' }),
})

type TSearchPostsSchema = z.infer<typeof searchPostsSchema>

interface ISearchArticles {
  totalCount: number
}

export function SearchArticles({ totalCount }: ISearchArticles) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TSearchPostsSchema>({
    resolver: zodResolver(searchPostsSchema),
    mode: 'onChange',
  })

  const handleFetchFindManyPosts = useContextSelector(
    BlogContext,
    (context) => context.fetchFindManyPosts,
  )

  const searchFilterIsActive = useContextSelector(
    BlogContext,
    (context) => context.searchFilterIsAtive,
  )

  function handleSearchSubmit(data: TSearchPostsSchema) {
    if (!data) {
      return
    }
    handleFetchFindManyPosts(data.query)
    reset()
  }

  function handleFetchLatestPosts() {
    handleFetchFindManyPosts()
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchSubmit)}
      className="flex flex-col gap-3"
    >
      <div className="w-full flex justify-between">
        <h2 className="text-lg text-base-subtitle">
          Publicações
          {searchFilterIsActive && (
            <button
              type="button"
              onClick={handleFetchLatestPosts}
              className="ml-4 text-blue text-xs font-bold border-b border-transparent hover:border-blue transition-colors"
            >
              limpar pesquisa
            </button>
          )}
        </h2>
        <span className="text-sm text-base-span">{totalCount} publicações</span>
      </div>

      {errors.query?.message && (
        <AlertMessage severity="error">{errors.query?.message}</AlertMessage>
      )}
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="w-full px-3 py-4 bg-base-input border border-base-border rounded-md text-base-text placeholder:text-base-label"
        {...register('query', { required: true })}
      />
    </form>
  )
}
