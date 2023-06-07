'use client'

import Link from 'next/link'
import * as React from 'react'

import { NAV_ITEMS } from '@/config/nav'

type NavItemType = (typeof NAV_ITEMS)[number]

const NavItem = ({
  item,
  checked,
}: {
  item: NavItemType
  checked: boolean
}) => {
  return (
    <Link href={item.url}>
      <div className={checked ? `rounded-full bg-gray-50 p-2` : ''}>
        {item.title}
      </div>
    </Link>
  )
}

export function NavBar() {
  const [checked, setChecked] = React.useState(NAV_ITEMS[0].title)
  return (
    <nav>
      <ul className="flex items-center gap-5 rounded-full bg-gray-200 p-2">
        {NAV_ITEMS.map((item, index) => (
          <li onClick={() => setChecked(item.title)} key={index}>
            <NavItem item={item} checked={checked === item.title} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
