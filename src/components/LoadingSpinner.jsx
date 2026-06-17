import React from 'react'
import { Shield } from 'lucide-react'

export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-blue-500/20 animate-spin border-t-blue-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      <p className="text-slate-400 text-sm font-mono">{message}</p>
    </div>
  )
}
