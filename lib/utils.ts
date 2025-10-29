export function altFromFilename(filename: string): string {
  const name = filename
    .replace(/^foto[_-]?/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\.(jpe?g|png|webp|gif|svg)$/i, '')
    .trim()
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function excerptFromMarkdown(md: string, max = 160): string {
  const text = md
    .replace(/`{3}[\s\S]*?`{3}/g, '') // code blocks
    .replace(/`[^`]*`/g, '') // inline code
    .replace(/\[(.*?)\]\([^)]*\)/g, '$1') // links
    .replace(/[#>*_~`>-]/g, ' ') // md symbols
    .replace(/\s+/g, ' ') // collapse spaces
    .trim()
  return text.length > max ? text.slice(0, max - 1) + '…' : text
}

export const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
