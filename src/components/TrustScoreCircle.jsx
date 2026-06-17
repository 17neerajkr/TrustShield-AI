import React, { useEffect, useState } from 'react'

export default function TrustScoreCircle({ score, prediction }) {
  const [animatedScore, setAnimatedScore] = useState(0)

  const size = 160
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    let start = 0
    const end = score
    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedScore(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [score])

  const offset = circumference - (animatedScore / 100) * circumference

  const color = prediction === 'Trusted'
    ? '#22C55E'
    : prediction === 'Suspicious'
    ? '#EF4444'
    : '#F59E0B'

  const glowColor = prediction === 'Trusted'
    ? 'rgba(34, 197, 94, 0.4)'
    : prediction === 'Suspicious'
    ? 'rgba(239, 68, 68, 0.4)'
    : 'rgba(245, 158, 11, 0.4)'

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ filter: `drop-shadow(0 0 12px ${glowColor})` }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="circle-progress"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white font-black text-4xl leading-none" style={{ color }}>
            {animatedScore}
          </span>
          <span className="text-slate-400 text-xs font-mono mt-1">TRUST SCORE</span>
        </div>
      </div>
      <span className="text-slate-400 text-xs text-center">out of 100</span>
    </div>
  )
}
