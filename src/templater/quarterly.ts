import { CONSTANTS } from '@/utils/constants'
import { getFormattedYear, getStandardQuarter } from '@/utils/dates'
import { moment } from 'obsidian'

const quarterlyTemplater = {
  quarterlyDateInfo: (date: string, format = CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT) => {
    const dateInfo = `
**${getStandardQuarter(date, format)}**
`.trim()

    return dateInfo
  },
  quarterlyNextPrevRibbon: (date: string, format = CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT) => {
    const previousDate = moment(date, format).add(-1, 'quarters')
    const nextDate = moment(date, format).add(1, 'quarters')
    const currentDate = moment(date, format)

    const ribbon = `[[${previousDate.format(CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT)}|${previousDate.format(
      '[Q]Q',
    )}]] < ${currentDate.format('[Q]Q')} > [[${nextDate.format(
      CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT,
    )}|${nextDate.format('[Q]Q')}]]`
    return ribbon
  },
  quarterlyZoomOutRibbon: (date: string, format = CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT) => {
    const ribbon = `[[0-plan/5-yearly/${getFormattedYear(date, format)}|Yearly]]`
    return ribbon
  },
}

export default quarterlyTemplater
