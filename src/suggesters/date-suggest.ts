import type { AppType } from '@/types'
import { parseDate } from '@/utils/dates'
import type { Editor, EditorPosition, EditorSuggestContext, EditorSuggestTriggerInfo, TFile } from 'obsidian'
import { EditorSuggest } from 'obsidian'

interface IDateCompletionType {
  label: string
}

export default class DateSuggest extends EditorSuggest<IDateCompletionType> {
  app: AppType

  constructor(app: AppType) {
    super(app)

    // @ts-ignore
    this.scope.register(['Shift'], 'Enter', (evt: KeyboardEvent) => {
      // @ts-ignore
      this.suggestions.useSelectedItem(evt)
      return false
    })

    // if we want to set instructions
    this.setInstructions([{ command: 'Shift', purpose: 'Keep text as alias' }])
  }

  getSuggestions(context: EditorSuggestContext): IDateCompletionType[] {
    const suggestions = this.getDateSuggestions(context)
    if (suggestions.length) {
      return suggestions
    }

    // catch-all if there are no matches
    return [{ label: context.query }]
  }

  getDateSuggestions(context: EditorSuggestContext): IDateCompletionType[] {
    const formattedDate = parseDate(context.query)
    const isValidDate = !!formattedDate.date
    const isValidEmoji = isValidDate ? '👍' : '👎'
    const uppercasedQuery = context.query.charAt(0).toUpperCase() + context.query.slice(1)

    // if the query is still empty
    if (!context.query) {
      return [
        {
          label: 'ex: tomorrow, 2 weeks from now, in 4 days, etc.',
        },
      ]
    }

    return [
      {
        label: `${isValidEmoji} ${uppercasedQuery} (${formattedDate.formatted})`,
      },
    ]
  }

  renderSuggestion(suggestion: IDateCompletionType, el: HTMLElement): void {
    el.setText(suggestion.label)
  }

  selectSuggestion(suggestion: IDateCompletionType, event: KeyboardEvent | MouseEvent): void {
    const { editor } = this.context!

    // const includeAlias = event.shiftKey
    const dateStr = parseDate(suggestion.label).formatted

    editor.replaceRange(dateStr, this.context!.start, this.context!.end)
  }

  onTrigger(cursor: EditorPosition, editor: Editor, file: TFile): EditorSuggestTriggerInfo {
    const triggerPhrase = '@'
    const startPos = this.context?.start || {
      line: cursor.line,
      ch: cursor.ch - triggerPhrase.length,
    }

    if (!editor.getRange(startPos, cursor).startsWith(triggerPhrase)) {
      // @ts-ignore
      return
    }

    const precedingChar = editor.getRange(
      {
        line: startPos.line,
        ch: startPos.ch - 1,
      },
      startPos,
    )

    // Short-circuit if `@` as a part of a word (e.g. part of an email address)
    if (precedingChar && /[`a-zA-Z0-9]/.test(precedingChar)) {
      // @ts-ignore
      return
    }

    return {
      start: startPos,
      end: cursor,
      query: editor.getRange(startPos, cursor).substring(triggerPhrase.length),
    }
  }
}
