import { ContentHeader } from './components/content-header'
import { ArticleLinks } from './components/article-links'
import { SearchArticles } from './components/search-articles'

export interface IPostProps {
  id: string
  title: string
  description: string
  createdAt: Date
}

export function BlogList() {
  const data = [
    {
      id: '1',
      title: 'JavaScript data types and data structures',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'JavaScript data types and data structures',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'JavaScript data types and data structures',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
      createdAt: new Date(),
    },
    {
      id: '4',
      title: 'JavaScript data types and data structures',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
      createdAt: new Date(),
    },
    {
      id: '5',
      title: 'JavaScript data types and data structures',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
      createdAt: new Date(),
    },
    {
      id: '6',
      title: 'JavaScript data types and data structures',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
      createdAt: new Date(),
    },
  ]

  return (
    <div className="flex flex-col gap-12">
      <ContentHeader />
      <SearchArticles />

      <div className="flex flex-wrap justify-center gap-8">
        {data.map((post) => (
          <ArticleLinks key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
