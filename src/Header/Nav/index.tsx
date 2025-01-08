'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-10">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} className="text-foreground" appearance="link" />
      })}
    </nav>
  )
}
