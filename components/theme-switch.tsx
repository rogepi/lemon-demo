'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { IconMoon, IconSun } from './icons'

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
      className={`${theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-200'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        aria-hidden="true"
        className={`${
          theme === 'dark'
            ? 'translate-x-9 bg-zinc-400'
            : 'translate-x-0 bg-zinc-900'
        }
            pointer-events-none flex h-[34px] w-[34px] items-center justify-center 
            rounded-full  shadow-lg ring-0 
            transition duration-200 ease-in-out`}
      >
        {theme === 'dark' ? <IconSun /> : <IconMoon />}
      </span>
    </Switch>
  )
}
