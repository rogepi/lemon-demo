'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import * as React from 'react'

import { MAIN_NAV_ITEMS } from '@/config/nav'

type NavItemType = (typeof MAIN_NAV_ITEMS)[number]

const NavItem = ({
  item,
  checked,
}: {
  item: NavItemType
  checked: boolean
}) => {
  const t = useTranslations('Nav')
  return (
    <Link href={item.url}>
      <div
        className={`rounded-full p-1 px-2 text-sm font-semibold ${
          checked
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
  const [checked, setChecked] = React.useState(MAIN_NAV_ITEMS[0].key)
  return (
    <nav className={className}>
      <ul className="flex items-center gap-5 rounded-full bg-zinc-200/75 p-1 dark:bg-zinc-700">
        {MAIN_NAV_ITEMS.map((item, index) => (
          <li onClick={() => setChecked(item.key)} key={index}>
            <NavItem item={item} checked={checked === item.key} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
