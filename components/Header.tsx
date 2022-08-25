import MenuButton from './MenuButton'
import ThemeButton from './ThemeButton'

export default function Header() {
  return (
    <nav className="container flex items-center justify-between">
      <MenuButton />
      <ThemeButton />
    </nav>
  )
}
