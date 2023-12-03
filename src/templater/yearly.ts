import { CONSTANTS } from '@/utils/constants'
import { moment } from 'obsidian'
const yearlyTemplater = {
  yearlyNextPrevRibbon: (date: string, format = CONSTANTS.DEFAULT_YEAR_DATE_FORMAT) => {
    const previousDate = moment(date, format).add(-1, 'years')
    const nextDate = moment(date, format).add(1, 'years')
    const currentDate = moment(date, format)

    const ribbon = `[[${previousDate.format(CONSTANTS.DEFAULT_YEAR_DATE_FORMAT)}|${previousDate.format(
      'YYYY',
    )}]] < ${currentDate.format('YYYY')} > [[${nextDate.format(CONSTANTS.DEFAULT_YEAR_DATE_FORMAT)}|${nextDate.format(
      'YYYY',
    )}]]`
    return ribbon
  },
}

export default yearlyTemplater
