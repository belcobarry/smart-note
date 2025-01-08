'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const SmartHero: React.FC<Page['hero']> = ({ media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })
  return (
    <div className="flex items-center justify-center text-white" data-theme="dark">
      <div className="container flex items-center gap-8">
        <div className="flex-2/3 flex-initial">
          {richText && (
            <RichText className="mb-6 max-w-[636px]" data={richText} enableGutter={false} />
          )}
        </div>
        <div className="flex-1/3">
          {media && typeof media === 'object' && (
            <Media imgClassName="object-contain h-[483px] w-[363px]" priority resource={media} />
          )}
        </div>
      </div>
    </div>
  )
}
