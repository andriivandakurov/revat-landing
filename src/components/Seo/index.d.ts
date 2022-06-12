import { string, number } from 'prop-types'

export interface Meta {
  name: string
  content: any
}

export interface SeoProps {
  description?: string
  lang?: string
  meta?: Meta[]
  keywords: string[]
  title: string
}
