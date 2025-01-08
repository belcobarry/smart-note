import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Card, CardContent } from '@/components/ui/card'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '3',
  }

  return (
    <div className="container my-16" id="features">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            if (size === 'full') {
              return (
                <div key={index} className="max-w-[636px] col-span-12 mx-auto text-center my-20">
                  {richText && <RichText data={richText} enableGutter={false} />}
                </div>
              )
            }

            return (
              <Card
                key={index}
                className={cn(`col-span-3 lg:col-span-${colsSpanClasses[size!]}`, {})}
              >
                <CardContent className="p-8">
                  {richText && <RichText data={richText} enableGutter={false} />}

                  {enableLink && <CMSLink {...link} />}
                </CardContent>
              </Card>
            )
          })}
      </div>
    </div>
  )
}
