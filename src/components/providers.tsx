import { ThemeProvider } from "@/components/theme/provider"
import { NavProvider } from "@/context/nav"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NavProvider>
        {children}
      </NavProvider>
    </ThemeProvider>
  )
}