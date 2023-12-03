import type { TFile, TFolder } from 'obsidian'
import { moment } from 'obsidian'
import { CONSTANTS } from '@/utils/constants'
import type { AppType } from '@/types'
import toast from '@/utils/toast'

const newDaily = async (app: AppType) => {
  const todayDate = moment().format(CONSTANTS.DEFAULT_DATE_FORMAT)
  const yesterdayDate = moment().subtract(1, 'days').format(CONSTANTS.DEFAULT_DATE_FORMAT)
  const dayBeforeYesterdayDate = moment().subtract(2, 'days').format(CONSTANTS.DEFAULT_DATE_FORMAT)

  // mapping them to an object
  const lastDays = {
    'today': todayDate,
    'yesterday': yesterdayDate,
    'day before yesterday': dayBeforeYesterdayDate,
  }

  // checking if the notes exist
  const todayNoteExist = await app.vault.exists(`${CONSTANTS.DAILY_FOLDER}/${todayDate}.md`)
  const yesterdayNoteExist = await app.vault.exists(`${CONSTANTS.DAILY_FOLDER}/${yesterdayDate}.md`)
  const dayBeforeYesterdayNoteExist = await app.vault.exists(`${CONSTANTS.DAILY_FOLDER}/${dayBeforeYesterdayDate}.md`)

  // get the daily note template
  const dailyNoteTemplate = await app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.DAILY)
  const dailyFolder = await app.vault.getAbstractFileByPath(CONSTANTS.DAILY_FOLDER)!

  let choosenDate: string | undefined

  // if yesterday or day before yesterday note doesn't exist, suggest the user to choose which day to create
  if (!yesterdayNoteExist || !dayBeforeYesterdayNoteExist) {
    // let the user choose which day to create
    const choices = [
      !todayNoteExist && todayDate,
      !yesterdayNoteExist && yesterdayDate,
      !dayBeforeYesterdayNoteExist && dayBeforeYesterdayDate,
    ].filter(Boolean) as string[]

    choosenDate = await app.utils.plugins.quickAddPlugin.suggester(
      // @ts-ignore
      (date) => Object.keys(lastDays).find((key) => lastDays[key] === date),
      choices,
    )
  } else {
    if (todayNoteExist) {
      toast(`❌ All last 3 days notes already exist.`)
      return
    }
    choosenDate = todayDate
  }

  if (!choosenDate) {
    throw new Error('Daily is required')
  }

  // create the note from the template
  await app.utils.plugins.templaterPlugin.create_new_note_from_template(
    dailyNoteTemplate as TFile,
    dailyFolder as TFolder,
    `${choosenDate}.md`,
  )

  toast(`✅ New daily note created.`)
}

export default newDaily
