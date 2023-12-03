import { getNextWeek } from '@/utils/dates'

type ActionType = 'get-next-week'

function dateUtils({ date, action }: { date: string; action: ActionType }) {
  switch (action) {
    // get the next week based on a week date CONSTANTS.DEFAULT_WEEK_DATE_FORMAT
    case 'get-next-week':
      return getNextWeek(date)
      break
    default:
      return date
  }
}

export default dateUtils
