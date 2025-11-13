import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { excerptFromMarkdown, LOREM } from './utils'
import { remark } from 'remark'
import html from 'remark-html'

export type Service = {
  slug: string
  title: string
  image?: string
  intro?: string
  content: string
}

export type Blog = {
  slug: string
  title: string
  date: string
  image?: string
  content: string
  excerpt: string
  category?: 'beveiliging' | 'juridisch' | 'algemeen'
}

const CONTENT_DIR = path.join(process.cwd(), 'content')
const SERVICES_DIR = path.join(CONTENT_DIR, 'services')
const BLOGS_DIR = path.join(CONTENT_DIR, 'blogs')

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir)
  } catch {
    return []
  }
}

export function getServices(): Service[] {
  const files = safeReadDir(SERVICES_DIR).filter(f => f.endsWith('.md'))
  const services = files.map((file) => {
    const raw = fs.readFileSync(path.join(SERVICES_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const slug = (data.slug as string) || file.replace(/\.md$/, '')
    const title = (data.title as string) || slug.replace(/-/g, ' ')
    return {
      slug,
      title,
      image: data.image as string | undefined,
      intro: (data.intro as string) || LOREM,
      content: content?.trim() || LOREM,
    }
  })

  // If none available, return predefined slugs with placeholders
  if (services.length === 0) {
    const slugs = [
      'objectbeveiliging',
      'winkelbeveiliging',
      'overlastbestrijding',
      'mobiele-surveillance',
      'chauffeursdiensten',
      'brandwachten',
      'verkeersregelaars',
      'beveiliging-op-aanvraag',
    ]
    return slugs.map((slug) => ({ slug, title: slug.replace(/-/g, ' '), content: LOREM, intro: LOREM }))
  }

  return services
}

export function getServiceBySlug(slug: string): Service | null {
  const file = path.join(SERVICES_DIR, `${slug}.md`)
  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: (data.title as string) || slug.replace(/-/g, ' '),
      image: data.image as string | undefined,
      intro: (data.intro as string) || LOREM,
      content: content?.trim() || LOREM,
    }
  }
  return null
}

export function getBlogs(category?: 'beveiliging' | 'juridisch' | 'algemeen'): Blog[] {
  const files = safeReadDir(BLOGS_DIR).filter(f => f.endsWith('.md'))
  const blogs = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const slug = (data.slug as string) || file.replace(/\.md$/, '')
    const title = (data.title as string) || slug.replace(/-/g, ' ')
    const date = (data.date as string) || new Date().toISOString().slice(0, 10)
    const image = data.image as string | undefined
    const excerpt = (data.excerpt as string) || excerptFromMarkdown(content || LOREM)
    const blogCategory = (data.category as 'beveiliging' | 'juridisch' | 'algemeen') || 'algemeen'
    return { slug, title, date, image, content: content?.trim() || LOREM, excerpt, category: blogCategory }
  })

  // filter by category if provided
  const filtered = category ? blogs.filter(b => b.category === category) : blogs

  // sort by date desc
  filtered.sort((a, b) => (a.date < b.date ? 1 : -1))

  if (filtered.length === 0 && !category) {
    return [
      { slug: 'welkom-bij-decretorium', title: 'Welkom bij Decretorium', date: new Date().toISOString().slice(0,10), content: LOREM, excerpt: LOREM, category: 'algemeen' },
    ]
  }

  return filtered
}

export function getBlogBySlug(slug: string): Blog | null {
  const file = path.join(BLOGS_DIR, `${slug}.md`)
  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, 'utf8')
    const { data, content } = matter(raw)
    const date = (data.date as string) || new Date().toISOString().slice(0, 10)
    const category = (data.category as 'beveiliging' | 'juridisch' | 'algemeen') || 'algemeen'
    return {
      slug,
      title: (data.title as string) || slug.replace(/-/g, ' '),
      date,
      image: data.image as string | undefined,
      content: content?.trim() || LOREM,
      excerpt: excerptFromMarkdown(content || LOREM),
      category
    }
  }
  return null
}

export async function renderMarkdown(md: string): Promise<string> {
  const result = await remark().use(html).process(md)
  return result.toString()
}
