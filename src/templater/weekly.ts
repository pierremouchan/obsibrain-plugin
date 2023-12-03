import { CONSTANTS } from '@/utils/constants'
import { getFormattedMonth, getFormattedQuarter, getFormattedYear, getStandardWeek, getWeekRange } from '@/utils/dates'
import { moment } from 'obsidian'

const weeklyTemplater = {
  weeklyDateInfo: (date: string, format = CONSTANTS.DEFAULT_WEEK_DATE_FORMAT) => {
    const dateInfo = `
**${getStandardWeek(date, format)}**
**${getWeekRange(date, format)}**
`.trim()

    return dateInfo
  },
  weeklyNextPrevRibbon: (date: string, format = CONSTANTS.DEFAULT_WEEK_DATE_FORMAT) => {
    const previousDate = moment(date, format).add(-1, 'weeks')
    const nextDate = moment(date, format).add(1, 'weeks')
    const currentDate = moment(date, format)

    const ribbon = `[[${previousDate.format(CONSTANTS.DEFAULT_WEEK_DATE_FORMAT)}|Week ${previousDate.format(
      'WW',
    )}]] < Week ${currentDate.format('WW')} > [[${nextDate.format(
      CONSTANTS.DEFAULT_WEEK_DATE_FORMAT,
    )}|Week ${nextDate.format('WW')}]]`
    return ribbon
  },
  weeklyZoomOutRibbon: (date: string, format = CONSTANTS.DEFAULT_WEEK_DATE_FORMAT) => {
    const ribbon = `[[0-plan/5-yearly/${getFormattedYear(
      date,
      format,
    )}|Yearly]] > [[0-plan/4-quarterly/${getFormattedQuarter(
      date,
      format,
    )}|Quarterly]] > [[0-plan/3-monthly/${getFormattedMonth(date, format)}|Monthly]]`
    return ribbon
  },
}

export default weeklyTemplater
