import { ArticleHeader } from './components/article-header'

export interface IPostProps {
  id: string
  title: string
  description: string
  createdAt: Date
}

export function BlogArticle() {
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
    <div className="flex flex-col gap-10">
      <ArticleHeader title={data[0].title} />

      <article className="px-8 pb-10">{data[0].description}</article>
    </div>
  )
}
