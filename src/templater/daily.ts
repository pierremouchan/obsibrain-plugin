import { CONSTANTS } from '@/utils/constants'
import {
  getFormattedMonth,
  getFormattedQuarter,
  getFormattedWeek,
  getFormattedYear,
  getStandardDateInfo,
} from '@/utils/dates'
import { moment } from 'obsidian'

const dailyTemplater = {
  dailyDateInfo: (date: string, format = CONSTANTS.DEFAULT_DATE_FORMAT) => {
    const dateInfo = `**${getStandardDateInfo(date, format)}**`.trim()

    return dateInfo
  },
  dailyNextPrevRibbon: (date: string, format = CONSTANTS.DEFAULT_DATE_FORMAT) => {
    const previousDate = moment(date, format).add(-1, 'days')
    const nextDate = moment(date, format).add(1, 'days')
    const currentDate = moment(date, format)

    const ribbon = `[[${previousDate.format(CONSTANTS.DEFAULT_DATE_FORMAT)}|${previousDate.format(
      'MMM D, YYYY',
    )}]] < ${currentDate.format('MMM D, YYYY')} > [[${nextDate.format(CONSTANTS.DEFAULT_DATE_FORMAT)}|${nextDate.format(
      'MMM D, YYYY',
    )}]]`
    return ribbon
  },
  dailyZoomOutRibbon: (date: string, format = CONSTANTS.DEFAULT_DATE_FORMAT) => {
    const ribbon = `[[0-plan/5-yearly/${getFormattedYear(
      date,
      format,
    )}|Yearly]] > [[0-plan/4-quarterly/${getFormattedQuarter(
      date,
      format,
    )}|Quarterly]] > [[0-plan/3-monthly/${getFormattedMonth(
      date,
      format,
    )}|Monthly]] > [[0-plan/2-weekly/${getFormattedWeek(date, format)}|Weekly]]`
    return ribbon
  },
}

export default dailyTemplater
