'use client'

import { Menu, Transition } from '@headlessui/react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import * as React from 'react'

import { I18N_LANGUAGES } from '@/config/i18n'

export function LocaleSwitch({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const onChange = (locale: string) => {
    const pathArray = pathname.split('/')
    const isEn = !I18N_LANGUAGES.find((item) => item.locale === pathArray.at(1))
    router.push(
      isEn ? `/${locale}${pathname}` : `/${pathArray.splice(2).join('/')}`
    )
  }

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }

  return (
    <div className={className}>
      <Menu>
        <div>
          <Menu.Button
            className="rounded-md border-2 border-zinc-200/75 p-1 text-xs font-semibold
           hover:bg-zinc-200/75 dark:border-zinc-700 dark:hover:bg-zinc-700"
          >
            {I18N_LANGUAGES.find((item) => item.locale === locale).title}
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-16 origin-top-right divide-y divide-gray-100 rounded-md bg-[#F7F1F1] shadow-lg ring-1 ring-black/5 focus:outline-none  dark:bg-[#333333]">
            <div className="overflow-hidden rounded-md text-xs font-semibold">
              {I18N_LANGUAGES.map((item) => (
                <Menu.Item key={item.id}>
                  <div
                    className="cursor-pointer p-1 hover:bg-zinc-200/75 dark:hover:bg-zinc-700"
                    onClick={() => onChange(item.locale)}
                  >
                    {item.title}
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
