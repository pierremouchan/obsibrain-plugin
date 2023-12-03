import { Notice } from 'obsidian'

const toast = (msg: string) => new Notice(msg, 5000)

export default toast
