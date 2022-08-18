import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'
import { scrollTo } from 'lib/helpers'
import { navLinks } from '../lib/links'

interface Props {
  logo?: string
  title?: string
  state: {
    isMobileNavOpen: boolean
  }
  setState: Dispatch<SetStateAction<{ isMobileNavOpen: boolean }>>
}

export default function Header(props: Props) {
  const { state, setState } = props
  const [navState, setNavState] = useState({
    color: 'white',
    icon: null,
  })
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setNavState(() => ({
      color: theme === 'dark' ? 'white' : 'black',
      icon:
        theme === 'dark' ? (
          <SunIcon className="w-7 transition-opacity delay-75 duration-500 ease-linear" />
        ) : (
          <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
        ),
    }))
  }, [theme])

  const handleMobileNav = () => {
    setState((prevState) => ({
      ...prevState,
      isMobileNavOpen: !prevState.isMobileNavOpen,
    }))
  }

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="px-base container z-50 flex h-20 w-full items-center justify-between ">
      <ul className="lg:w-1/4">
        <li id="hamburger" className="lg:hidden">
          <Hamburger
            label="Show Menu"
            rounded
            color={navState.color}
            size={24}
            toggled={state.isMobileNavOpen}
            toggle={handleMobileNav}
          />
        </li>
      </ul>
      <ul className="hidden items-center justify-center gap-12 lg:flex lg:w-1/2 xl:gap-20">
        {navLinks.map((link) => (
          <li
            className="transform transition-all duration-700 dark:hover:scale-110"
            key={link.title}
          >
            <button className="a" onClick={() => scrollTo(link.url)}>
              {link.title}
            </button>
          </li>
        ))}
      </ul>
      <ul
        id="themeButton"
        className="flex items-center justify-end gap-8 text-2xl font-bold uppercase lg:w-1/4"
      >
        <li className="flex h-10 w-10 items-center justify-center">
          <button
            aria-label="Button to change color theme"
            onClick={handleTheme}
          >
            <AnimatePresence initial={false}>
              <div className="flex ">
                <m.div
                  key={`theme-${theme}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {navState.icon}
                </m.div>
              </div>
            </AnimatePresence>
          </button>
        </li>
      </ul>
    </nav>
  )
}
