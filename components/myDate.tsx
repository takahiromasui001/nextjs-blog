import { parseISO, format } from 'date-fns'

const MyDate = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default MyDate
