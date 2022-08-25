import { Squash } from 'hamburger-react'
import useShowMobileNav from 'hooks/useShowMobile'

const MenuButton = () => {
  const [showMobileNav, setShowMobileNav] = useShowMobileNav()

  return (
    <button aria-label="Toggle Mobile Menu">
      <Squash
        label="Show Menu"
        rounded
        color="white"
        size={24}
        toggled={showMobileNav}
        toggle={setShowMobileNav}
      />
    </button>
  )
}

export default MenuButton
