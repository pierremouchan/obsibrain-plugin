import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

const dvButtonView = (dv: DataviewInlineApi, text: string, command: () => any) => {
  const html = `
    <button class="dv-button">
	${text}
    </button>
    `

  dv.el('div', '', { cls: 'dv-progress-bar-container' })
  const container = dv.container.querySelector('.dv-progress-bar-container')!
  container.innerHTML = html

  const button = container.querySelector('.dv-button')!
  button.addEventListener('click', command)
}

export default dvButtonView
