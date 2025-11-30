'use client'

import React from 'react'

export default function HeroSVG() {
  return (
    <svg
      viewBox="0 0 400 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Code Editor Window */}
      <g transform="translate(50, 100)">
        {/* Window frame */}
        <rect
          x="0"
          y="0"
          width="300"
          height="400"
          rx="8"
          fill="rgba(0, 0, 0, 0.6)"
          stroke="#f43f5e"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Title bar */}
        <rect
          x="0"
          y="0"
          width="300"
          height="30"
          rx="8"
          fill="rgba(244, 63, 94, 0.2)"
        />

        {/* Window controls */}
        <circle cx="15" cy="15" r="5" fill="#f43f5e" opacity="0.6" />
        <circle cx="35" cy="15" r="5" fill="#ec4899" opacity="0.6" />
        <circle cx="55" cy="15" r="5" fill="#fda4af" opacity="0.6" />

        {/* Code lines */}
        <g transform="translate(20, 50)">
          {/* Line 1 */}
          <text x="0" y="0" fill="#f43f5e" fontSize="14" fontFamily="monospace" opacity="0.8">
            <tspan fill="#ec4899">const</tspan>
            <tspan fill="#ffffff"> developer = </tspan>
            <tspan fill="#fda4af">&#123;</tspan>
          </text>

          {/* Line 2 */}
          <text x="0" y="25" fill="#ffffff" fontSize="14" fontFamily="monospace" opacity="0.7">
            <tspan x="20">name: </tspan>
            <tspan fill="#f43f5e">&apos;Huzaif&apos;</tspan>
          </text>

          {/* Line 3 */}
          <text x="0" y="50" fill="#ffffff" fontSize="14" fontFamily="monospace" opacity="0.7">
            <tspan x="20">role: </tspan>
            <tspan fill="#f43f5e">&apos;Full-Stack Dev&apos;</tspan>
          </text>

          {/* Line 4 */}
          <text x="0" y="75" fill="#ffffff" fontSize="14" fontFamily="monospace" opacity="0.7">
            <tspan x="20">skills: [</tspan>
            <tspan fill="#ec4899">&apos;React&apos;</tspan>
            <tspan fill="#ffffff">, </tspan>
            <tspan fill="#ec4899">&apos;Next.js&apos;</tspan>
            <tspan fill="#ffffff">]</tspan>
          </text>

          {/* Line 5 */}
          <text x="0" y="100" fill="#fda4af" fontSize="14" fontFamily="monospace" opacity="0.8">
            <tspan>&#125;</tspan>
          </text>

          {/* Cursor blinking */}
          <rect
            x="140"
            y="95"
            width="2"
            height="18"
            fill="#f43f5e"
            opacity="1"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* Terminal prompt */}
        <g transform="translate(20, 200)">
          <text x="0" y="0" fill="#f43f5e" fontSize="12" fontFamily="monospace" opacity="0.8">
            $ npm run dev
          </text>
          <text x="0" y="20" fill="#ec4899" fontSize="12" fontFamily="monospace" opacity="0.7">
            ✓ Ready in 2.3s
          </text>
          <text x="0" y="40" fill="#ffffff" fontSize="12" fontFamily="monospace" opacity="0.6">
            ➜ Local: http://localhost:3000
          </text>
        </g>

        {/* Code brackets decoration */}
        <g transform="translate(250, 150)">
          <path
            d="M 0,0 L -15,20 L 0,40"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 30,0 L 45,20 L 30,40"
            fill="none"
            stroke="#ec4899"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Floating code particles */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={20 + i * 35}
            cy={350 + (i % 3) * 20}
            r="3"
            fill="#f43f5e"
            opacity="0.4"
            filter="url(#glow)"
          >
            <animate
              attributeName="cy"
              values={`${350 + (i % 3) * 20};${340 + (i % 3) * 20};${350 + (i % 3) * 20}`}
              dur={`${2 + i * 0.2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur={`${2 + i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Background glow effect */}
      <ellipse
        cx="200"
        cy="300"
        rx="180"
        ry="250"
        fill="url(#codeGrad)"
        opacity="0.3"
      >
        <animate
          attributeName="opacity"
          values="0.2;0.4;0.2"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  )
}
