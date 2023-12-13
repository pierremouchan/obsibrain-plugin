import type { DataviewInlineApi } from 'obsidian-dataview/lib/api/inline-api'

function pickProgressColor(progress: number) {
  if (progress < 25) {
    return 'red'
  }
  if (progress < 50) {
    return 'orange'
  }
  if (progress < 75) {
    return 'yellow'
  }
  return 'green'
}

const dvProgressBarView = (dv: DataviewInlineApi, value: number, total: number) => {
  const progress = Number(((Number(value) / Math.max(Number(total), 1)) * 100).toFixed(0))
  const color = pickProgressColor(progress)

  const html = `
    <div class="dv-progress-bar">
      <div class="dv-progress-bar__bar" style="--data-progress:${progress}%; --data-color: var(--color-${color});"></div>
      <div class="dv-progress-bar__value">
      <span>${progress}%</span>
      <span>(${value}/${total})</span>
      </div>
    </div>
    `

  dv.el('div', '', { cls: 'dv-progress-bar-container' })
  const container = dv.container.querySelector('.dv-progress-bar-container')!
  container.innerHTML = html
}

export default dvProgressBarView
