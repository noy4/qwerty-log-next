import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  dateString: string
}

const DateDistance = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <div>
      {formatDistanceToNowStrict(date, {
        addSuffix: true,
        locale: ja,
      })}
    </div>
  )
}

export default DateDistance
