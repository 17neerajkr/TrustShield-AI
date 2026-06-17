import React, { useEffect, useState } from 'react'
import { Shield, Brain, Cpu, CheckCircle } from 'lucide-react'

const steps = [
  { icon: Shield, label: 'Initializing security scan...' },
  { icon: Brain, label: 'Running AI threat model...' },
  { icon: Cpu, label: 'Processing behavioral signals...' },
  { icon: CheckCircle, label: 'Compiling trust report...' },
]

export default function AnalysisLoader() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < steps.length - 1 ? prev + 1 : prev))
    }, 550)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card p-10 text-center space-y-8">
      {/* Spinning rings */}
      <div className="relative w-24 h-24 mx-auto">
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin border-t-blue-500" style={{animationDuration: '1.2s'}} />
        <div className="absolute inset-2 rounded-full border-2 border-blue-400/10 animate-spin border-t-blue-400/50" style={{animationDuration: '1.8s', animationDirection: 'reverse'}} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="w-10 h-10 text-blue-400" />
        </div>
        <div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)'}} />
      </div>

      <div>
        <h3 className="text-white font-bold text-xl mb-2">AI Analysis in Progress</h3>
        <p className="text-slate-400 text-sm">Scanning for threat indicators and trust signals</p>
      </div>

      {/* Steps */}
      <div className="space-y-2.5 text-left max-w-xs mx-auto">
        {steps.map((s, i) => {
          const Icon = s.icon
          const isActive = i === step
          const isDone = i < step
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-500 ${
                isActive ? 'bg-blue-500/10 border border-blue-500/30' :
                isDone ? 'opacity-60' : 'opacity-20'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-400 animate-pulse' : isDone ? 'text-green-400' : 'text-slate-500'}`} />
              <span className={`text-sm font-mono ${isActive ? 'text-blue-300' : isDone ? 'text-slate-400' : 'text-slate-600'}`}>
                {s.label}
              </span>
              {isDone && (
                <span className="ml-auto text-green-400 text-xs">✓</span>
              )}
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
