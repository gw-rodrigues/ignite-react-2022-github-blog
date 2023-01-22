import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { BlogContext, IBlogPostProps } from '../../contexts/BlogContext'
import { ArticleHeader } from './components/article-header'

export function BlogArticle() {
  const [post, setPost] = useState<IBlogPostProps>({} as IBlogPostProps)
  const { id } = useParams()

  const handleFetchFindUniquePost = useContextSelector(
    BlogContext,
    (context) => context.fetchFindUniquePost,
  )

  useEffect(() => {
    if (!id) return
    handleFetchFindUniquePost(id).then((data) => setPost(data))
  }, [handleFetchFindUniquePost, id])

  return (
    <div className="flex flex-col gap-10">
      <ArticleHeader {...post} />

      <article className="px-8 pb-10">
        <ReactMarkdown
          className=" [&>p]:pb-6 [&>p>a]:block [&>p>a]:pb-1 [&>p>a]:text-blue [&>p>a]:underline  text-base text-base-text "
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  customStyle={{
                    backgroundColor: '#112131',
                    borderRadius: 3,
                    padding: 16,
                    fontSize: 16,
                  }}
                  PreTag="pre"
                  language={match[1]}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className}>{children}</code>
              )
            },
          }}
        >
          {post.body}
        </ReactMarkdown>
      </article>
    </div>
  )
}
