import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export const dateFormatter = (date: Date) => {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: ptBR,
  })
}
