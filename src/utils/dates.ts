import { moment } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'

type FormatsObjectType = { [key in Exclude<moment.unitOfTime.StartOf, null>]: string }

type DateFuncParamsType = {
  date?: string
  format: string
  period: moment.unitOfTime.StartOf
  onDate: string
}

export const DATES_FORMATS = {
  day: CONSTANTS.DEFAULT_DATE_FORMAT,
  isoWeek: CONSTANTS.DEFAULT_WEEK_DATE_FORMAT,
  month: CONSTANTS.DEFAULT_MONTH_DATE_FORMAT,
  quarter: CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT,
  year: CONSTANTS.DEFAULT_YEAR_DATE_FORMAT,
} as FormatsObjectType

export function getYear(date: string, format: string) {
  const m = moment(date, format)
  return m.format('YYYY')
}

export function getFormattedYear(date: string, format: string) {
  return getYear(date, format)
}

export function getQuarter(date: string, format: string) {
  const m = moment(date, format)
  return m.format('Q')
}

export function getFormattedQuarter(date: string, format: string) {
  return `${getYear(date, format)}-Q${getQuarter(date, format)}`
}

export function getMonth(date: string, format: string) {
  const m = moment(date, format)
  return m.format('MM')
}

export function getFormattedMonth(date: string, format: string) {
  return `${getYear(date, format)}-${getMonth(date, format)}`
}

export function getWeek(date: string, format: string) {
  const m = moment(date, format)
  return `${m.isoWeek() < 10 ? '0' : ''}${m.isoWeek()}`
}

export function getFormattedWeek(date: string, format: string) {
  const m = moment(date, format)
  let weekFormat

  //If it's last week of December and belongs to next year's first week.
  if (m.month() === 11 && m.week() === 1) {
    weekFormat = `${parseInt(m.format('GGGG')) + 1}-01-W${m.isoWeek()}`
  } else {
    weekFormat = `${m.format('GGGG')}-${getMonth(date, format)}-W${getWeek(date, format)}`
  }

  return weekFormat
}

export function getStandardDateInfo(date: string, format: string) {
  const m = moment(date, format)
  return `${m.format('dddd')} of Week ${m.isoWeek()}, ${m.format('MMMM Do, YYYY')}`
}

export function getStandardWeek(date: string, format: string) {
  const m = moment(date, format)
  const formattedDate = `Week ${m.format('WW')}, ${m.format('MMMM YYYY')}`
  return formattedDate
}

export function getWeekRange(date: string, format: string) {
  // Parse current date
  const m = moment(date, format)

  // Find start of the week (Monday)
  const startOfWeek = m.clone().startOf('isoWeek') // ISO weeks start on Monday

  // Find end of the week (Sunday)
  const endOfWeek = startOfWeek.clone().add(6, 'days') // Add 6 days to get to Sunday

  // Format both dates in desired format '(Month day, year)'
  const formattedStart = startOfWeek.format('MMMM D')
  const formattedEnd = endOfWeek.format('MMMM D')

  // Combine both dates into one string with ~ separator
  return `(${formattedStart} ~ ${formattedEnd})`
}

export function getNextWeek(date: string) {
  const nextWeek = moment(date, CONSTANTS.DEFAULT_WEEK_DATE_FORMAT)
    .add(1, 'week')
    .format(CONSTANTS.DEFAULT_WEEK_DATE_FORMAT)
  return nextWeek
}

export function getStandardMonth(date: string, format: string) {
  const m = moment(date, format)
  return m.format('MMMM YYYY')
}

export function getStandardQuarter(date: string, format: string) {
  const m = moment(date, format)

  // should return the date range of the quarter
  const quarter = m.quarter()
  const start = moment().quarter(quarter).startOf('quarter').format('MMMM D')
  const end = moment().quarter(quarter).endOf('quarter').format('MMMM D')

  return `(${start} ~ ${end})`
}

export function getDateFormat(date: string) {
  for (const [period, format] of Object.entries(DATES_FORMATS)) {
    if (moment(date, format, true).isValid()) {
      return { format, period } as { format: string; period: keyof FormatsObjectType }
    }
  }
  throw new Error(`Invalid date format: ${date}`)
}

export function getDateReference({ date, format }: { date: string; format: string }) {
  switch (format) {
    case CONSTANTS.DEFAULT_DATE_FORMAT:
      return moment(new Date(date), format).startOf('day')
    case CONSTANTS.DEFAULT_WEEK_DATE_FORMAT:
      return moment(new Date(date), format).startOf('isoWeek')
    case CONSTANTS.DEFAULT_MONTH_DATE_FORMAT:
      return moment(new Date(date), format).startOf('month')
    case CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT:
      return moment(new Date(date), format).startOf('quarter')
    case CONSTANTS.DEFAULT_YEAR_DATE_FORMAT:
      return moment(new Date(date), format).startOf('year')
    default:
      return moment(new Date(date), format).startOf('day')
  }
}

export function getComparingDate({ onDate, format }: { onDate: string; format: string }) {
  switch (format) {
    case CONSTANTS.DEFAULT_DATE_FORMAT:
      return moment(onDate, format).endOf('day')
    case CONSTANTS.DEFAULT_WEEK_DATE_FORMAT:
      return moment(onDate, format).endOf('isoWeek')
    case CONSTANTS.DEFAULT_MONTH_DATE_FORMAT:
      return moment(onDate, format).endOf('month')
    case CONSTANTS.DEFAULT_QUARTER_DATE_FORMAT:
      return moment(onDate, format).endOf('quarter')
    case CONSTANTS.DEFAULT_YEAR_DATE_FORMAT:
      return moment(onDate, format).endOf('year')
    default:
      return moment(onDate, format).endOf('day')
  }
}

export function isBefore({ date, format, period, onDate }: DateFuncParamsType) {
  if (!date) return false
  const dateReference = getDateReference({ date, format })
  const comparingDate = getComparingDate({ onDate, format })
  return dateReference.isBefore(comparingDate, period)
}

export function isSame({ date, format, period, onDate }: DateFuncParamsType) {
  if (!date) return false
  const dateReference = getDateReference({ date, format })
  const comparingDate = getComparingDate({ onDate, format })
  return dateReference.isSame(comparingDate, period)
}

export function isSameOrBefore({ date, format, period, onDate }: DateFuncParamsType) {
  if (!date) return false
  const dateReference = getDateReference({ date, format })
  const comparingDate = getComparingDate({ onDate, format })
  return dateReference.isSameOrBefore(comparingDate, period)
}

export function isUpcoming({ date, format, period, onDate }: DateFuncParamsType) {
  if (!date) return false
  const dateReference = getDateReference({ date, format })
  const comparingDate = getComparingDate({ onDate, format })
  return (
    dateReference.isAfter(comparingDate, period) &&
    dateReference.isSameOrBefore(comparingDate.clone().add(3, 'days'), 'day')
  )
}

export function isBetween({ date, format, period, onDate }: DateFuncParamsType) {
  if (!date) return false
  const dateReference = getDateReference({ date, format })
  const comparingDate = getComparingDate({ onDate, format })
  return dateReference.isBetween(comparingDate.startOf(period), comparingDate.endOf(period), period, '[]')
}
