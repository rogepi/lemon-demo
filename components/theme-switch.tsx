'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        aria-hidden="true"
        className={`${theme === 'dark' ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}
