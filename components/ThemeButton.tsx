import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { AnimatePresence, m } from 'framer-motion'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    setIcon(() =>
      theme === 'dark' ? (
        <SunIcon className="w-7 transition-opacity delay-75 duration-500 ease-linear" />
      ) : (
        <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
      )
    )
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button aria-label="Button to change color theme" onClick={handleTheme}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <div className="flex ">
          <m.div
            key={`theme-${theme}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
          >
            {icon}
          </m.div>
        </div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeButton
