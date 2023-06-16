import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { BaseCard, type BaseCardProps } from './base'

export type InfoCardProps = BaseCardProps & {
  src: string
  alt: string
  content: string | JSX.Element
}

export function InfoCard({ className, src, alt, content }: InfoCardProps) {
  return (
    <BaseCard className={cn('flex h-full flex-col justify-between', className)}>
      <div>
        <Image src={src} alt={alt} width={60} height={60} />
      </div>
      <div className="inline-block">{content}</div>
    </BaseCard>
  )
}
