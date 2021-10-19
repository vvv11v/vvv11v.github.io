import { name, version } from '../package.json'

export const VERSION: string = `App "${name}" version : ${version}`

const DEBUG: boolean = process.env.NODE_ENV === 'development' ? true : false

export const report = (text: string, prop: any = ''): void => {
  DEBUG && console.log(text, prop)
}

export const PREFIX: string =
  process.env.NODE_ENV === 'development' ? 'http://komp.local' : ''
