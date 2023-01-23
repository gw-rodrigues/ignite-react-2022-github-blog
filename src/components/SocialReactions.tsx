import {
  Confetti,
  Eye,
  Heart,
  Rocket,
  SmileyMeh,
  SmileyWink,
  ThumbsDown,
  ThumbsUp,
} from 'phosphor-react'
import { IBlogReactionsProps } from '../contexts/BlogContext'

export function SocialReactions(reaction: IBlogReactionsProps) {
  if (reaction === undefined) return null
  return (
    <ul className="flex flex-wrap justify-center md:justify-end gap-2 pt-4 text-xs  text-base-span">
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <ThumbsUp size={12} weight="fill" className="fill-base-label" />
        {reaction['+1']}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <ThumbsDown size={12} weight="fill" className="fill-base-label" />
        {reaction['-1']}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <SmileyMeh size={12} weight="fill" className="fill-base-label" />
        {reaction.confused}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <Eye size={12} weight="fill" className="fill-base-label" />
        {reaction.eyes}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <Heart size={12} weight="fill" className="fill-base-label" />
        {reaction.heart}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <Confetti size={12} weight="fill" className="fill-base-label" />
        {reaction.hooray}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <SmileyWink size={12} weight="fill" className="fill-base-label" />
        {reaction.laugh}
      </li>
      <li className="flex items-center gap-1 rounded-full bg-base-border py-1 px-3">
        <Rocket size={12} weight="fill" className="fill-base-label" />
        {reaction.rocket}
      </li>
    </ul>
  )
}
