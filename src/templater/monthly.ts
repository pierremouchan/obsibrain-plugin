import { CONSTANTS } from '@/utils/constants'
import { getFormattedQuarter, getFormattedYear } from '@/utils/dates'
import { moment } from 'obsidian'

const monthlyTemplater = {
  monthlyNextPrevRibbon: (date: string, format = CONSTANTS.DEFAULT_MONTH_DATE_FORMAT) => {
    const previousDate = moment(date, format).add(-1, 'months')
    const nextDate = moment(date, format).add(1, 'months')
    const currentDate = moment(date, format)

    const ribbon = `[[${previousDate.format(CONSTANTS.DEFAULT_MONTH_DATE_FORMAT)}|${previousDate.format(
      'MMMM',
    )}]] < ${currentDate.format('MMMM')} > [[${nextDate.format(CONSTANTS.DEFAULT_MONTH_DATE_FORMAT)}|${nextDate.format(
      'MMMM',
    )}]]`
    return ribbon
  },
  monthlyZoomOutRibbon: (date: string, format = CONSTANTS.DEFAULT_MONTH_DATE_FORMAT) => {
    const ribbon = `[[0-plan/5-yearly/${getFormattedYear(
      date,
      format,
    )}|Yearly]] > [[0-plan/4-quarterly/${getFormattedQuarter(date, format)}|Quarterly]]`
    return ribbon
  },
}

export default monthlyTemplater
