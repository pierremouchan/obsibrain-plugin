import dailyTemplater from './daily'
import monthlyTemplater from './monthly'
import dateUtils from './date-utils'
import quarterlyTemplater from './quarterly'
import weeklyTemplater from './weekly'
import yearlyTemplater from './yearly'

const templaterUtils = {
  daily: dailyTemplater,
  weekly: weeklyTemplater,
  monthly: monthlyTemplater,
  quarterly: quarterlyTemplater,
  yearly: yearlyTemplater,
  date: {
    utils: dateUtils,
  },
}

export default templaterUtils
