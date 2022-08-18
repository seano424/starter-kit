import { Dispatch, SetStateAction } from 'react'
import { useTheme } from 'next-themes'
import { Squash as Hamburger } from 'hamburger-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'
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
  const { theme, setTheme } = useTheme()

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
      <div className="lg:w-1/4">
        <button aria-label="Toggle Mobile Menu" className="lg:hidden">
          <Hamburger
            label="Show Menu"
            rounded
            color={theme === 'light' ? 'black' : 'white'}
            size={24}
            toggled={state.isMobileNavOpen}
            toggle={handleMobileNav}
          />
        </button>
      </div>

      <button aria-label="Button to change color theme" onClick={handleTheme}>
        <AnimatePresence initial={false}>
          <div className="flex ">
            <m.div
              key={`theme-${theme}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {theme === 'light' ? (
                <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
              ) : (
                <SunIcon className="w-7 transition-opacity delay-75 duration-500 ease-linear" />
              )}
            </m.div>
          </div>
        </AnimatePresence>
      </button>
    </nav>
  )
}
