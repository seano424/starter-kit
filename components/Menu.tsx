import { AnimatePresence, m } from 'framer-motion'
import useShowMobileNav from 'hooks/useShowMobile'

export default function Menu() {
  const [isMenuOpen] = useShowMobileNav()

  return (
    <AnimatePresence exitBeforeEnter>
      {isMenuOpen && (
        <m.div
          key="modal"
          initial={{ opacity: 0, x: -200 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          exit={{
            opacity: 0,
            x: -400,
            transition: {
              duration: 0.6,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          className="fixed top-20 z-50 flex min-h-screen w-10/12 items-start justify-center bg-light/90 filter backdrop-blur-sm dark:bg-dark/90 md:w-1/2 lg:hidden"
        >
          hello world
        </m.div>
      )}
    </AnimatePresence>
  )
}
