'use client'

import { LayoutGroup, motion } from 'framer-motion'
import { usePathname } from 'next-intl/client'
import Link from 'next-intl/link'
import * as React from 'react'

import { MAIN_NAV_ITEMS } from '@/config/nav'
import { cn } from '@/lib/utils'

const NavItem = ({
  url,
  text,
  isActive,
}: {
  url: string
  text: string
  isActive: boolean
}) => {
  return (
    <Link href={url}>
      <div className={cn('z-auto rounded-full text-sm font-semibold')}>
        <span className="relative p-2 px-3">
          <span className="isolate z-50 dark:text-white">{text}</span>
          {isActive ? (
            <motion.div
              className="absolute inset-0 z-[-1] rounded-full bg-gray-50 dark:bg-zinc-500"
              layoutId="navBar"
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }}
            />
          ) : null}
        </span>
      </div>
    </Link>
  )
}

type LabelsType = MessagesType['Nav']

export function NavBar({
  labels,
  className,
}: {
  labels: LabelsType
  className?: string
}) {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  return (
    <LayoutGroup>
      <nav className={className}>
        <ul className="relative z-10 flex items-center gap-5 rounded-full bg-zinc-200/75 p-2 dark:bg-zinc-700">
          {MAIN_NAV_ITEMS.map((item, index) => {
            const isActive = item.url === pathname
            return (
              <li key={index}>
                <NavItem
                  url={item.url}
                  text={labels[item.key]}
                  isActive={isActive}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </LayoutGroup>
  )
}
