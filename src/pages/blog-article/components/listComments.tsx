import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { BlogContext, IBlogCommentsProps } from '../../../contexts/BlogContext'
import { Comment } from './comment'

interface ICommentsProps {
  postNumber: number
  totalComments: number
}

export function ListComments({ postNumber, totalComments }: ICommentsProps) {
  const [listComments, setListComments] = useState<IBlogCommentsProps[]>([])

  const fetchFindManyCommentsByPost = useContextSelector(
    BlogContext,
    (context) => context.fetchFindManyCommentsByPost,
  )

  useEffect(() => {
    if (!postNumber) return

    fetchFindManyCommentsByPost(String(postNumber)).then((data) => {
      setListComments(data)
    })
  }, [fetchFindManyCommentsByPost, postNumber])

  return (
    <section className="px-2 sm:px-8 pb-10 text-base-text text-base ">
      <div className="w-full flex justify-between">
        <h2 className="text-lg text-base-subtitle">Comentários</h2>
        <span className="text-sm text-base-span">
          {totalComments} cometários
        </span>
      </div>
      <ul className="flex flex-col gap-6 my-8 ">
        {listComments
          ? listComments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))
          : null}
      </ul>
    </section>
  )
}
