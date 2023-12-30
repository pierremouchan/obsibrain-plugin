import openDaily from './open-daily'
import newFleetingNote from './new-fleeting-note'
import newResource from './new-resource'
import newProject from './new-project'
import newGoal from './new-goal'
import newArea from './new-area'
import newYearly from './new-yearly'
import newQuarterly from './new-quarterly'
import newMonthly from './new-monthly'
import newWeekly from './new-weekly'
import newDaily from './new-daily'
import type ObsibrainUtilsPlugin from 'index'
import newTask from '@/commands/new-task'

function importCommands(plugin: ObsibrainUtilsPlugin) {
  // new daily note
  plugin.addCommand({
    id: 'new-daily',
    name: '🗓️ New Daily',
    callback: () => newDaily(plugin.app),
  })

  // new weekly note
  plugin.addCommand({
    id: 'new-weekly',
    name: '🗓️ New Weekly',
    callback: () => newWeekly(plugin.app),
  })

  // new monthly note
  plugin.addCommand({
    id: 'new-monthly',
    name: '🗓️ New Monthly',
    callback: () => newMonthly(plugin.app),
  })

  // new quarterly note
  plugin.addCommand({
    id: 'new-quarterly',
    name: '🗓️ New Quarterly',
    callback: () => newQuarterly(plugin.app),
  })

  // new yearly note
  plugin.addCommand({
    id: 'new-yearly',
    name: '🗓️ New Yearly',
    callback: () => newYearly(plugin.app),
  })

  // new area
  plugin.addCommand({
    id: 'new-area',
    name: '📥 New Area',
    callback: () => newArea(plugin.app),
  })

  // new goal
  plugin.addCommand({
    id: 'new-goal',
    name: '🎯 New Goal',
    callback: () => newGoal(plugin.app),
  })

  // new project
  plugin.addCommand({
    id: 'new-project',
    name: '💼 New Project',
    callback: () => newProject(plugin.app),
  })

  // new resource
  plugin.addCommand({
    id: 'new-resource',
    name: '📖 New Resource',
    callback: () => newResource(plugin.app),
  })

  // new task
  plugin.addCommand({
    id: 'new-task',
    name: '📝 New Task',
    callback: () => newTask(plugin.app),
  })

  // new fleeting note
  plugin.addCommand({
    id: 'new-fleeting-note',
    name: '🗒️ New Fleeting Note',
    callback: () => newFleetingNote(plugin.app),
  })

  // open daily
  plugin.addCommand({
    id: 'open-daily',
    name: '🗓️ Open Daily',
    callback: () => openDaily(plugin.app),
  })

  plugin.addCommand({
    id: 'edit-task',
    name: '✍️ Edit Task',
    callback: () => {
      // call the obsidian tasks edit command
      plugin.app.commands.commands['obsidian-tasks-plugin:edit-task'].checkCallback()
    },
  })

  //   const areasToMove = ['Design', 'Tattoos']

  //   plugin.addCommand({
  //     id: 'move-note',
  //     name: 'Move Notes',
  //     callback: async () => {
  //       // note template
  //       const noteTemplate = (await plugin.app.vault.getAbstractFileByPath(CONSTANTS.TEMPLATES.FLEETING_NOTE)!) as TFile
  //       const noteFolder = (await plugin.app.vault.getAbstractFileByPath(CONSTANTS.NOTES_FOLDER)!) as TFolder

  //       for (const areaToMove of areasToMove) {
  //         // business folder
  //         const businessFolder = plugin.app.vault.getAbstractFileByPath(
  //           `3-resources/${areaToMove.toLowerCase()}`,
  //         ) as TFolder
  //         const files = businessFolder.children.filter((f) => {
  //           if (f instanceof TFile) {
  //             return f.extension === 'md'
  //           }
  //           return false
  //         })

  //         //   const firstFile = files[0] as TFile

  //         // for each file
  //         for (const file of files) {
  //           // sleep for 500ms
  //           await new Promise((resolve) => setTimeout(resolve, 150))

  //           const firstFile = file as TFile
  //           const creationTime = moment(firstFile.stat.ctime).format('YYYY-MM-DD')

  //           // getting the content of the first file
  //           const content = await plugin.app.vault.cachedRead(firstFile)

  //           let contentWithoutFrontmatter = ''
  //           if (content.match(CONSTANTS.FRONTMATTER_REGEX)) {
  //             // let frontmatter = ''
  //             contentWithoutFrontmatter = content.replace(CONSTANTS.FRONTMATTER_REGEX, (match) => {
  //               // Store the matched frontmatter
  //               //   frontmatter = match
  //               // Return an empty string to replace the match in original content
  //               return ''
  //             })
  //           } else {
  //             contentWithoutFrontmatter = content
  //           }

  //           // extract already existing tags and source
  //           // eslint-disable-next-line no-inner-declarations
  //           function extractTagsAndSource(text: string) {
  //             // Define regex patterns for tags and source outside of frontmatter
  //             const tagsRegex = /^tags?:\s*(#.*)$/im
  //             const sourceRegex = /^source:\s*(?:(\S.*))|^source:\s*\n(?! *\n)(.*)$/im

  //             // Find matches for tags and source
  //             const tagsMatch = contentWithoutFrontmatter.match(tagsRegex)
  //             const sourceMatch = contentWithoutFrontmatter.match(sourceRegex)
  //             const tagsMatchToRemove = tagsMatch?.[0] ?? ''
  //             const sourceMatchToRemove = sourceMatch?.[0] ?? ''

  //             // Extract values or default to null if no match found
  //             const extractedTags = tagsMatch ? tagsMatch[1].trim() : ''
  //             const extractedSource = sourceMatch ? sourceMatch[1].trim() : ''

  //             return { tagsMatchToRemove, sourceMatchToRemove, extractedTags, extractedSource }
  //           }

  //           const { tagsMatchToRemove, sourceMatchToRemove, extractedTags, extractedSource } =
  //             extractTagsAndSource(contentWithoutFrontmatter)

  //           // remove the tags and source from the inner content
  //           contentWithoutFrontmatter = contentWithoutFrontmatter.replace(tagsMatchToRemove, '')
  //           contentWithoutFrontmatter = contentWithoutFrontmatter.replace(sourceMatchToRemove, '')

  //           // move that file to another folder
  //           // await plugin.app.vault.rename(firstFile, `${CONSTANTS.NOTES_FOLDER}/${firstFile.name}`)

  //           // create the note from the template
  //           const newFile = await plugin.app.utils.plugins.templaterPlugin.create_new_note_from_template(
  //             noteTemplate as TFile,
  //             noteFolder as TFolder,
  //             firstFile.name,
  //           )

  //           if (!newFile) {
  //             throw new Error(`New file ${firstFile.name} was not created`)
  //           }

  //           // delete the file
  //           await plugin.app.vault.delete(firstFile)

  //           // get the frontmatter of the new file
  //           const newFileContent = await plugin.app.vault.read(newFile)
  //           let newFileFrontMatter = ''
  //           newFileContent.replace(CONSTANTS.FRONTMATTER_REGEX, (match) => {
  //             newFileFrontMatter = match
  //             return ''
  //           })

  //           // function to update the frontmatter
  //           // eslint-disable-next-line no-inner-declarations
  //           function updateFrontmatter(frontmatter: string) {
  //             // 1. Match every tag in the string and remove the '#' symbol
  //             const tagsArray = extractedTags.match(/#[^\s#]+/g)?.map((tag) => tag.slice(1)) ?? []

  //             // 2. Convert to string representation of array for insertion
  //             const formattedTags = `[${tagsArray.map((tag) => `"${tag}"`).join(', ')}]`

  //             // Replace placeholder for tags with formatted tags
  //             let updatedFrontmatter = frontmatter.replace(/tags:\s*\[\s*\]/, `tags: ${formattedTags}`)

  //             // Process and format the source links if they exist
  //             // Split multiple sources into an array and trim each one
  //             const sourcesArray =
  //               extractedSource
  //                 .match(/\[\[.*?\]\]|https?:\/\/[^\s"]+/g)
  //                 ?.map((s) => `"${s.trim().replace('<', '').replace('>', '')}"`) ?? []

  //             // Convert to string representation of array for insertion
  //             const formattedSources = `[${sourcesArray.join(', ')}${
  //               sourcesArray.length > 0 ? ', ' : ''
  //             }"[[${areaToMove}]]"]`

  //             // Replace placeholder for links
  //             updatedFrontmatter = updatedFrontmatter.replace(/links:\s*(?![\r\n])*/, `links: ${formattedSources}\n`)

  //             // replace created date
  //             updatedFrontmatter = updatedFrontmatter.replace(/(created:\s*')\[\[.*?\]\](')/, `$1${creationTime}$2\n`)

  //             return updatedFrontmatter
  //           }

  //           // update the frontmatter
  //           const newFileUpdatedFrontMatter = updateFrontmatter(newFileFrontMatter)

  //           await plugin.app.vault.modify(newFile, `${newFileUpdatedFrontMatter}`)

  //           // add the content to the new file
  //           await plugin.app.vault.append(newFile, `${contentWithoutFrontmatter}`)
  //           console.log('done with file', firstFile.name)
  //         }
  //       }
  //     },
  //   })
}

export default importCommands
