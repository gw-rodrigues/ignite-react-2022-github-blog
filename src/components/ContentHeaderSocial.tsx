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
  createdAt?: string
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
    <div className="flex flex-wrap justify-center gap-2 md:gap-6 mt-2 text-sm text-base-subtitle md:justify-start">
      {github && (
        <div className="flex items-center gap-2">
          <GithubLogo size={18} weight="fill" className="fill-base-label" />
          <span>{github}</span>
        </div>
      )}
      {company && (
        <div className="flex items-center gap-2">
          <Buildings size={18} weight="fill" className="fill-base-label" />
          <span>{company}</span>
        </div>
      )}
      {followers && (
        <div className="flex items-center gap-2">
          <Users size={18} weight="fill" className="fill-base-label" />
          <span>{followers} seguidores</span>
        </div>
      )}
      {createdAt && (
        <div className="flex items-center gap-2">
          <Calendar size={18} weight="fill" className="fill-base-label" />
          <span>{dateFormatter(new Date(createdAt))}</span>
        </div>
      )}
      {comments !== undefined && comments >= 0 ? (
        <div className="flex items-center gap-2">
          <ChatCircle size={18} weight="fill" className="fill-base-label" />
          <span>{comments} cometários</span>
        </div>
      ) : null}
    </div>
  )
}
