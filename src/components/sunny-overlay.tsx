"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function SunnyOverlay() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null

    const isLight = resolvedTheme !== "dark"

    return (
        <div
            aria-hidden="true"
            className="leaves-overlay"
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 2,
                opacity: isLight ? 1 : 0,
                transition: "opacity 1.8s ease-in-out",
                mixBlendMode: "multiply",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                src="/leaves.mp4"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}
