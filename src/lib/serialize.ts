import escapeHTML from 'escape-html'
import { BaseText, Text } from 'slate'

interface CustomText extends BaseText {
    bold?: boolean
    italic?: boolean
    text: string
  }

interface LexicalNode {
  type?: string
  format?: number | string
  style?: string
  text?: string
  children?: LexicalNode[]
  version?: number
  indent?: number
  direction?: string | null
  tag?: string
  url?: string
  src?: string
  altText?: string
}

export const serialize = (nodes: LexicalNode[]): string => {
  return nodes.map(node => {
    if (node.type === 'text') {
      let text = escapeHTML(node.text || '')
      
      // Handle multiple formats using bitwise flags
      if (typeof node.format === 'number') {
        const formats = node.format
        // Apply formats in reverse order to handle nested formatting correctly
        if (formats & 64) text = `<code>${text}</code>`   // Code
        if (formats & 32) text = `<sup>${text}</sup>`     // Superscript
        if (formats & 16) text = `<sub>${text}</sub>`     // Subscript
        if (formats & 8) text = `<s>${text}</s>`          // Strikethrough
        if (formats & 4) text = `<u>${text}</u>`          // Underline
        if (formats & 2) text = `<em>${text}</em>`        // Italic
        if (formats & 1) text = `<strong>${text}</strong>` // Bold
      }
      return text
    }

    const children = node.children?.map(n => serialize([n])).join('') || ''

    switch (node.type) {
      case 'root':
        return children
      case 'paragraph':
        return `<p>${children}</p>`
      case 'heading':
        const level = node.tag?.replace('h', '') || '1'
        return `<h${level}>${children}</h${level}>`
      case 'list':
        const listType = node.tag === 'ol' ? 'ol' : 'ul'
        return `<${listType}>${children}</${listType}>`
      case 'listitem':
        return `<li>${children}</li>`
      case 'link':
        return `<a href="${node.url || '#'}">${children}</a>`
      case 'image':
        return `<img src="${node.src || ''}" alt="${node.altText || ''}" />`
      case 'quote':
        return `<blockquote>${children}</blockquote>`
      default:
        return children
    }
  }).join('')
} 