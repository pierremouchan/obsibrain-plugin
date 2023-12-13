import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import dvButtonView from './view'
import type { AppType } from '@/types'
import newProject from '@/commands/new-project'
import newGoal from '@/commands/new-goal'
import newTask from '@/commands/new-task'

type DvButtonRenderArgsType = {
  dv: DataviewInlineApi
  command: 'add-project' | 'add-goal' | 'add-task'
  app: AppType
}

const dvButtonRender = ({ dv, command, app }: DvButtonRenderArgsType) => {
  let buttonText = ''
  let commandFn: () => any = () => null

  switch (command) {
    case 'add-project':
      buttonText = '💼 Add Project'
      commandFn = () => newProject(app)
      break

    case 'add-goal':
      buttonText = '🎯 Add Goal'
      commandFn = () => newGoal(app)
      break

    case 'add-task':
      buttonText = '📝 Add Task'
      commandFn = () => newTask(app)
      break

    default:
      throw new Error(`Unknown type: ${command}`)
  }

  return dvButtonView(dv, buttonText, commandFn)
}

export default dvButtonRender
