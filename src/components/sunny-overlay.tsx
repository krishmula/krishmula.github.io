"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const S = "#0d1520"

export function SunnyOverlay() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null

    return (
        <svg
            aria-hidden="true"
            className={`tree-shadow-svg${resolvedTheme === "dark" ? " tree-shadow-svg--hidden" : ""}`}
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                {/* Soft blur for trunks */}
                <filter id="shadow-soft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>

                {/* Displacement + blur for fronds — leaf-edge rustling */}
                <filter id="shadow-rustle" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.04 0.03"
                        numOctaves="3"
                        seed="5"
                        result="noise"
                    >
                        <animate
                            attributeName="baseFrequency"
                            values="0.040 0.030;0.044 0.034;0.037 0.027;0.042 0.031;0.040 0.030"
                            dur="10s"
                            repeatCount="indefinite"
                            calcMode="spline"
                            keyTimes="0;0.25;0.5;0.75;1"
                            keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95"
                        />
                    </feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="4"
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="displaced"
                    />
                    <feGaussianBlur in="displaced" stdDeviation="4" />
                </filter>
            </defs>

            {/* ─── Palm 1 — Tall, right side ─── */}
            <g className="tree-sway-1">
                {/* Trunk — gentle curve leaning slightly left */}
                <g filter="url(#shadow-soft)">
                    <path
                        d="M1380,900 Q1370,750 1355,620 Q1340,500 1310,400 Q1290,330 1270,280"
                        fill="none" stroke={S} strokeWidth="18" strokeLinecap="round"
                    />
                </g>
                {/* Fronds — long arcing leaves radiating from crown */}
                <g filter="url(#shadow-rustle)">
                    {/* Frond drooping right */}
                    <path d="M1270,280 Q1350,240 1450,300 Q1500,330 1540,380"
                        fill="none" stroke={S} strokeWidth="5" strokeLinecap="round" />
                    <path d="M1270,280 Q1370,220 1480,250 Q1530,270 1570,310"
                        fill="none" stroke={S} strokeWidth="5" strokeLinecap="round" />
                    <path d="M1270,280 Q1380,200 1500,200 Q1560,200 1600,220"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    {/* Frond drooping left */}
                    <path d="M1270,280 Q1200,230 1120,260 Q1070,280 1030,320"
                        fill="none" stroke={S} strokeWidth="5" strokeLinecap="round" />
                    <path d="M1270,280 Q1180,210 1080,220 Q1020,230 970,260"
                        fill="none" stroke={S} strokeWidth="5" strokeLinecap="round" />
                    <path d="M1270,280 Q1190,190 1090,170 Q1030,160 960,170"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    {/* Frond going up */}
                    <path d="M1270,280 Q1260,220 1230,160 Q1210,120 1200,80"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    <path d="M1270,280 Q1290,210 1320,150 Q1340,110 1360,70"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    {/* Frond going up-right */}
                    <path d="M1270,280 Q1340,200 1420,150 Q1470,120 1520,100"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    {/* Frond going up-left */}
                    <path d="M1270,280 Q1210,200 1140,140 Q1090,110 1040,90"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />

                    {/* Leaflets along each frond — short angled strokes */}
                    {/* Right-drooping frond leaflets */}
                    <path d="M1350,250 L1370,230 M1400,260 L1425,240 M1450,280 L1480,260 M1490,310 L1520,290"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M1350,260 L1365,285 M1400,275 L1420,300 M1450,300 L1475,325 M1500,330 L1525,355"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    {/* Left-drooping frond leaflets */}
                    <path d="M1200,245 L1180,225 M1160,255 L1135,235 M1120,270 L1090,255 M1070,295 L1045,280"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M1200,255 L1185,280 M1160,268 L1140,290 M1120,285 L1095,310 M1075,305 L1050,330"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    {/* Upward frond leaflets */}
                    <path d="M1245,220 L1220,210 M1235,180 L1210,165 M1220,140 L1195,120"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M1255,220 L1275,205 M1250,180 L1270,160 M1240,140 L1255,118"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M1295,220 L1315,210 M1310,180 L1335,165 M1325,140 L1350,120"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M1285,225 L1270,210 M1295,185 L1278,168 M1310,145 L1298,125"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                </g>
            </g>

            {/* ─── Palm 2 — Medium, left side, leans right ─── */}
            <g className="tree-sway-2">
                <g filter="url(#shadow-soft)">
                    <path
                        d="M150,900 Q165,720 190,560 Q210,440 240,360 Q260,300 280,260"
                        fill="none" stroke={S} strokeWidth="15" strokeLinecap="round"
                    />
                </g>
                <g filter="url(#shadow-rustle)">
                    {/* Fronds drooping right */}
                    <path d="M280,260 Q360,230 440,270 Q490,300 530,350"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    <path d="M280,260 Q380,210 470,220 Q520,230 570,260"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    <path d="M280,260 Q370,190 470,175 Q530,170 580,180"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    {/* Fronds drooping left */}
                    <path d="M280,260 Q210,220 140,250 Q100,270 60,310"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    <path d="M280,260 Q190,200 100,210 Q50,220 10,250"
                        fill="none" stroke={S} strokeWidth="4" strokeLinecap="round" />
                    {/* Fronds up */}
                    <path d="M280,260 Q275,190 250,130 Q235,90 220,55"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M280,260 Q295,190 320,130 Q340,90 360,55"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    {/* Frond up-right */}
                    <path d="M280,260 Q340,190 410,140 Q450,115 500,95"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />

                    {/* Leaflets */}
                    <path d="M340,240 L360,220 M400,250 L425,230 M450,275 L475,258 M500,310 L525,295"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M340,250 L355,275 M400,265 L418,290 M450,290 L470,315"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M210,235 L190,218 M160,248 L135,232 M110,265 L85,252"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M215,245 L200,268 M165,258 L148,280 M115,278 L98,300"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M265,200 L242,190 M258,160 L235,148 M248,120 L228,105"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M290,200 L310,188 M300,160 L322,145 M312,120 L335,102"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                </g>
            </g>

            {/* ─── Palm 3 — Small, entering from top-center ─── */}
            <g className="tree-sway-3">
                <g filter="url(#shadow-soft)">
                    <path
                        d="M700,0 Q710,50 720,110 Q728,150 735,180"
                        fill="none" stroke={S} strokeWidth="12" strokeLinecap="round"
                    />
                </g>
                <g filter="url(#shadow-rustle)">
                    {/* Fronds fanning out */}
                    <path d="M735,180 Q790,160 850,190 Q885,210 910,240"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M735,180 Q800,140 870,140 Q910,145 950,160"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M735,180 Q680,150 620,170 Q580,185 545,215"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M735,180 Q665,135 600,125 Q555,120 510,130"
                        fill="none" stroke={S} strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M735,180 Q750,130 760,80 Q765,50 770,20"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M735,180 Q720,130 700,80 Q690,50 680,15"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M735,180 Q790,120 840,80 Q870,55 900,35"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />
                    <path d="M735,180 Q680,115 620,75 Q580,52 540,35"
                        fill="none" stroke={S} strokeWidth="3" strokeLinecap="round" />

                    {/* Leaflets */}
                    <path d="M790,155 L810,138 M840,160 L862,145 M880,195 L905,180"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M790,168 L805,188 M840,178 L860,198 M880,210 L900,232"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M680,158 L658,142 M635,162 L610,148 M585,180 L560,168"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M682,168 L668,188 M638,175 L622,195 M590,195 L572,215"
                        fill="none" stroke={S} strokeWidth="2.5" strokeLinecap="round" />
                </g>
            </g>
        </svg>
    )
}
