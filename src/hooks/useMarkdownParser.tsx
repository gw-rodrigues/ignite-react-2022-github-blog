import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CodeProps } from 'react-markdown/lib/ast-to-react'

export function useMarkdownParser(body: string) {
  return (
    <ReactMarkdown
      className="[&>p]:pb-6 [&>p>a]:block [&>p>a]:pb-1 [&>p>a]:text-blue [&>p>a]:underline "
      remarkPlugins={[remarkGfm]}
      components={{
        code: markdownParserCodeHighlighter,
      }}
      skipHtml={true}
    >
      {body}
    </ReactMarkdown>
  )
}

function markdownParserCodeHighlighter({
  inline,
  className,
  children,
}: CodeProps) {
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
}
