"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-5 h-5" /> // Placeholder to prevent layout shift
    }

    const isSunny = theme !== 'dark'

    return (
        <button
            onClick={() => setTheme(isSunny ? 'dark' : 'light')}
            className="relative w-5 h-5 focus:outline-none group"
            aria-label={isSunny ? 'Switch to evening mode' : 'Switch to sunny mode'}
        >
            {/* Sun — visible in sunny (light) mode */}
            <Sun className="absolute top-0 h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0 text-foreground group-hover:text-tertiary" />
            {/* Moon — visible in evening (dark) mode */}
            <Moon className="absolute top-0 h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100 text-foreground group-hover:text-tertiary" />
            <span className="sr-only">{isSunny ? 'Switch to evening mode' : 'Switch to sunny mode'}</span>
        </button>
    )
}
