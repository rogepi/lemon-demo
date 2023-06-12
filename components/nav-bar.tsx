'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import Link from 'next-intl/link'
import * as React from 'react'

import { MAIN_NAV_ITEMS } from '@/config/nav'

type NavItemType = (typeof MAIN_NAV_ITEMS)[number]

const NavItem = ({ item }: { item: NavItemType }) => {
  const t = useTranslations('Nav')
  const pathName = usePathname()

  const isActive =
    item.key === 'home' ? pathName === '/' : pathName.startsWith(item.url)

  return (
    <Link href={item.url}>
      <div
        className={`rounded-full p-1 px-2 text-sm font-semibold ${
          isActive
            ? ` bg-gray-50  dark:bg-zinc-500`
            : 'hover:bg-gray-100 dark:hover:bg-zinc-600'
        }`}
      >
        {t(`${item.key as 'home' | 'blog' | 'question' | 'about'}`)}
      </div>
    </Link>
  )
}

export function NavBar({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-5 rounded-full bg-zinc-200/75 p-1 dark:bg-zinc-700">
        {MAIN_NAV_ITEMS.map((item, index) => (
          <li key={index}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
