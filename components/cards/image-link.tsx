import Image from 'next/image'
import Link from 'next/link'

import { IconOutWard } from '../icons'
import { BaseCard, type BaseCardProps } from './base'

export type ImageLinkCardProps = BaseCardProps & {
  src: string
  alt: string
  link?: string
}

export function ImageLinkCard({
  className,
  src,
  alt,
  link,
}: ImageLinkCardProps) {
  return (
    <BaseCard className={`relative overflow-hidden ${className || ''}`}>
      <Image src={src} alt={alt} fill objectFit="cover" />
      {link && (
        <Link
          href={link}
          target="_blank"
          className="absolute bottom-3 left-3 rounded-full bg-white/75 p-1 dark:bg-gray-900/75"
        >
          <IconOutWard />
        </Link>
      )}
    </BaseCard>
  )
}
