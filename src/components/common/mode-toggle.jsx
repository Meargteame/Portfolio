import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="w-3.5 h-3.5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 absolute" />
      <Moon className="w-3.5 h-3.5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 absolute" />
    </button>
  )
}
