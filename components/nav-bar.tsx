'use client'

import { LayoutGroup, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
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
      <div className={cn('z-auto rounded-full p-2 text-sm font-semibold')}>
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

export function NavBar({ className }: { className?: string }) {
  const t = useTranslations('Nav')
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  return (
    <LayoutGroup>
      <nav className={className}>
        <ul className=" relative z-10 flex items-center gap-5 rounded-full bg-zinc-200/75 p-1 dark:bg-zinc-700">
          {MAIN_NAV_ITEMS.map((item, index) => {
            const isActive = item.url === pathname
            return (
              <li key={index}>
                <NavItem
                  url={item.url}
                  text={t(
                    `${item.key as 'home' | 'blog' | 'question' | 'about'}`
                  )}
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
