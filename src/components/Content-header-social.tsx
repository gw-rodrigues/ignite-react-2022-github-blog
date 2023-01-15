import {
  Buildings,
  Calendar,
  ChatCircle,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { dateFormatter } from '../utils/formatter'

interface IContentHeaderSocialProps {
  github?: string
  company?: string
  followers?: number
  createdAt?: Date
  comments?: number
}

export function ContentHeaderSocial({
  github,
  company,
  followers,
  createdAt,
  comments,
}: IContentHeaderSocialProps) {
  if (!github && !company && !followers && !createdAt && !comments) {
    return null
  }

  return (
    <div className="flex gap-6 mt-2 text-base-subtitle text-sm flex-wrap justify-center md:justify-start">
      {github && (
        <div className="flex gap-2 items-center">
          <GithubLogo size={18} weight="fill" className="fill-base-label" />
          <span>{github}</span>
        </div>
      )}
      {company && (
        <div className="flex gap-2 items-center">
          <Buildings size={18} weight="fill" className="fill-base-label" />
          <span>{company}</span>
        </div>
      )}
      {followers && (
        <div className="flex gap-2 items-center">
          <Users size={18} weight="fill" className="fill-base-label" />
          <span>{followers} seguidores</span>
        </div>
      )}
      {createdAt && (
        <div className="flex gap-2 items-center">
          <Calendar size={18} weight="fill" className="fill-base-label" />
          <span>{dateFormatter(createdAt)}</span>
        </div>
      )}
      {comments && (
        <div className="flex gap-2 items-center">
          <ChatCircle size={18} weight="fill" className="fill-base-label" />
          <span>{comments} cometários</span>
        </div>
      )}
    </div>
  )
}
