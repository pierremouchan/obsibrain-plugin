import type { App, Pos } from 'obsidian'
import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'
import type QuickAdd from './plugins/quickadd-types/main'
import type { Templater } from './plugins/templater-types/core/Templater'
import type IconFolderPlugin from './plugins/iconize-types/main'
import type { Link } from 'obsidian-dataview'

export interface AppType extends App {
  utils: {
    plugins: {
      dataViewPlugin: DataviewInlineApi
      iconFolderPlugin: IconFolderPlugin
      utilsPlugin: {
        parseDate: (date: string) => { date: Date; formatted: string }
      }
      quickAddPlugin: QuickAdd['api']
      templaterPlugin: Templater
      all: any
    }
    templater: Record<any, any>
    dataview: Record<any, any>
  }
  plugins: any
}

type TaskBaseType = {
  /** The symbo used to start this list item, like '1.' or '1)' or '*'. */
  symbol: string
  /** A link to the closest thing to this list item (a block, a section, or a file). */
  link: Link
  /** The section that contains this list item. */
  section: Link
  /** The path of the file that contains this item. */
  path: string
  /** The line this item starts on. */
  line: number
  /** The number of lines this item spans. */
  lineCount: number
  /** The internal Obsidian tracker of the exact position of this line. */
  position: Pos
  /** The line number of the list that this item is part of. */
  list: number
  /** If present, the block ID for this item. */
  blockId?: string
  /** The line number of the parent item to this list, if relevant. */
  parent?: number
  /** Links contained inside this list item. */
  outlinks: Link[]
  /** The raw text of this item. */
  text: string
  /**
   * If present, overrides 'text' when rendered in task views. You should not mutate 'text' since it is used to
   * validate a list item when editing it.
   */
  visual?: string
  /** Whether this item has any metadata annotations on it. */
  annotated?: boolean
  /** Any tags present in this task. */
  tags: string[]
  /** Additional fields added by annotations. */
  [key: string]: any
}

export interface TaskType extends TaskBaseType {
  /** The status of this task, the text between the brackets ('[ ]'). Will be a space if the task is currently unchecked. */
  status: string
  /** Indicates whether the task has any value other than empty space. */
  checked: boolean
  /** Indicates whether the task explicitly has been marked "completed" ('x' or 'X'). */
  completed: boolean
  /** Indicates whether the task and ALL subtasks have been completed. */
  fullyCompleted: boolean
  /** If present, then the time that this task was created. */
  created?: string
  /** If present, then the time that this task was due. */
  due?: string
  /** If present, then the time that this task was scheduled for. */
  scheduled?: string
  /** If present, then the time that this task was completed. */
  completion?: string
  /** If present, then the day that this task can be started. */
  start?: string
  /** If present, then the day that work on this task is scheduled. */
}

export interface GoalType {
  [name: string]: any
}

export interface LinkType {
  [name: string]: any
}

export interface AreaType {
  [name: string]: any
}

export interface ProjectType {
  [name: string]: any
}

export type StatusType = 'ongoing' | 'on hold' | 'completed'
