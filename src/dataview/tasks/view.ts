import type { AppType, TaskType } from '@/types'
import type { TFile } from 'obsidian'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const taskFrontMatterRegex = /\[[^\]]*::[^\]]*\]/g

const dvTasksView = (dv: DataviewInlineApi, tasks: TaskType[]) => {
  const app = dv.app as AppType
  //   return dv.table(
  //     ['Task', 'Due', 'file'],
  //     tasks.map((t) => [t.text, t.due, t.path]),
  //   )
  const html = `
    <div class="table">
	${tasks
    .map((t) => {
      const text = t.text.replace(taskFrontMatterRegex, '').trim()
      return `
	      <div class="table-row">
		<div class="table-cell">
		  <div>${text}</div>
		</div>
	      </div>
	      `
    })
    .join('')}

    </div>
    `

  dv.el('div', '', { cls: 'dv-progress-bar-container' })
  const container = dv.container.querySelector('.dv-progress-bar-container')!
  container.innerHTML = html

  // getting all the tasks and adding click event
  const tasksEls = container.querySelectorAll('.table-row')
  // action to go to the task
  tasksEls.forEach((el, i) => {
    console.log('rerender')
    el.addEventListener('click', async (e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log(tasks[i].position)
      const file = (await app.vault.getAbstractFileByPath(tasks[i].path)) as TFile
      await app.workspace.getLeaf('tab').openFile(file)

      app.workspace.activeEditor?.editor?.setCursor({
        line: tasks[i].position.start.line,
        ch: -1,
      })

      // little timeout
      await new Promise((resolve) => setTimeout(resolve, 100))
      //   app.workspace.activeEditor?.editor?.scrollTo(0, offset + editorInfo!.clientHeight / 2)
      app.workspace.activeEditor?.editor?.scrollIntoView(
        {
          from: { line: tasks[i].position.start.line, ch: 0 },
          to: { line: tasks[i].position.end.line, ch: 0 },
        },
        true,
      )
    })
  })
}

export default dvTasksView
