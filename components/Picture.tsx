import path from 'path'
import fs from 'fs'
import { altFromFilename } from '@/lib/utils'

type Props = {
  imageFilename: string
  altOverride?: string
  className?: string
  sizes?: string
}

/**
 * Responsive <picture> with optional webp source and lazy loading.
 * Looks for files under /public/assets.
 * If the image is missing, shows a neutral gradient placeholder.
 */
export function Picture({ imageFilename, altOverride, className, sizes = '(min-width: 768px) 50vw, 100vw' }: Props) {
  const assetPath = `/assets/${encodeURIComponent(imageFilename)}`
  const baseName = imageFilename.replace(/\.[^.]+$/, '')
  const webpPath = `/assets/${encodeURIComponent(baseName)}.webp`

  // Server-side existence check for build-time correctness; optional
  let hasOriginal = true
  let hasWebp = true
  try {
    const publicDir = path.join(process.cwd(), 'public', 'assets')
    hasOriginal = fs.existsSync(path.join(publicDir, imageFilename))
    hasWebp = fs.existsSync(path.join(publicDir, `${baseName}.webp`))
  } catch {
    // ignore
  }

  const alt = altOverride ?? altFromFilename(imageFilename)

  if (!hasOriginal && !hasWebp) {
    return (
      <div className={className} aria-label={alt} role="img">
        <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
      </div>
    )
  }

  return (
    <picture className={className}>
      {/* Prefer webp when available */}
      {hasWebp && <source type="image/webp" srcSet={webpPath} sizes={sizes} />}
      {/* Fallback */}
      {hasOriginal ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={assetPath} alt={alt} loading="lazy" decoding="async" sizes={sizes} className="h-full w-full object-cover" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={webpPath} alt={alt} loading="lazy" decoding="async" sizes={sizes} className="h-full w-full object-cover" />
      )}
    </picture>
  )
}
