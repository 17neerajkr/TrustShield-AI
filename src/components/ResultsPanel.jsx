import React from 'react'
import { CheckCircle, AlertTriangle, HelpCircle, Shield, ChevronRight, Clock, FileText } from 'lucide-react'
import TrustScoreCircle from './TrustScoreCircle'

const riskConfig = {
  Low: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  Medium: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  High: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
}

const predictionConfig = {
  Trusted: {
    icon: CheckCircle,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/40',
    glow: 'glow-green',
    label: 'Message is Trusted',
    desc: 'This message shows no significant threat indicators.',
  },
  Suspicious: {
    icon: AlertTriangle,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/40',
    glow: 'glow-red',
    label: 'Message is Suspicious',
    desc: 'Multiple threat indicators detected. Exercise extreme caution.',
  },
  Uncertain: {
    icon: HelpCircle,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/40',
    glow: '',
    label: 'Verdict is Uncertain',
    desc: 'Unable to reach a clear conclusion. Proceed with caution.',
  },
}

export default function ResultsPanel({ result, onReset }) {
  const config = predictionConfig[result.prediction] || predictionConfig.Uncertain
  const Icon = config.icon
  const risk = riskConfig[result.risk_level] || riskConfig.Medium

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header verdict */}
      <div className={`glass-card p-6 border ${config.border} ${config.glow}`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-6 h-6 ${config.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className={`font-bold text-xl ${config.color}`}>{config.label}</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${risk.color} ${risk.bg} ${risk.border}`}>
                {result.risk_level} Risk
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-1">{config.desc}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(result.analyzed_at).toLocaleTimeString()}</span>
              {result.char_count && <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{result.char_count} characters</span>}
              {result.flags?.length > 0 && (
                <div className="flex gap-1">
                  {result.flags.map(flag => (
                    <span key={flag} className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 font-mono text-xs">{flag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Score + Confidence grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="glass-card p-6 flex flex-col items-center gap-2">
          <TrustScoreCircle score={result.trust_score} prediction={result.prediction} />
        </div>

        <div className="glass-card p-6 space-y-5">
          {/* Confidence */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm">AI Confidence</span>
              <span className="text-white font-bold font-mono">{result.confidence}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000"
                style={{ width: `${result.confidence}%` }}
              />
            </div>
          </div>

          {/* Trust score bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm">Trust Level</span>
              <span className="text-white font-bold font-mono">{result.trust_score}/100</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  result.prediction === 'Trusted' ? 'bg-green-500' :
                  result.prediction === 'Suspicious' ? 'bg-red-500' : 'bg-amber-500'
                }`}
                style={{ width: `${result.trust_score}%` }}
              />
            </div>
          </div>

          {/* Risk meter */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm">Risk Assessment</span>
              <span className={`font-semibold text-sm ${risk.color}`}>{result.risk_level}</span>
            </div>
            <div className="flex gap-1">
              {['Low', 'Medium', 'High'].map(level => (
                <div
                  key={level}
                  className={`flex-1 h-2 rounded-full ${
                    result.risk_level === level
                      ? level === 'Low' ? 'bg-green-500' : level === 'Medium' ? 'bg-amber-500' : 'bg-red-500'
                      : 'bg-white/5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="glass-card p-6">
        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-400" />
          Analysis Findings
        </h4>
        <div className="space-y-2">
          {result.explanation.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-0.5 ${config.color}`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="glass-card p-6">
        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-blue-400" />
          Security Recommendations
        </h4>
        <div className="space-y-2">
          {result.recommendations.map((rec, i) => (
            <div key={i} className={`flex items-start gap-2.5 text-sm px-3 py-2 rounded-lg ${
              result.prediction === 'Suspicious' ? 'bg-red-500/5 border border-red-500/15' : 'bg-green-500/5 border border-green-500/15'
            }`}>
              <span className={`font-mono text-xs mt-0.5 flex-shrink-0 ${result.prediction === 'Suspicious' ? 'text-red-400' : 'text-green-400'}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className="text-slate-300">{rec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full py-3 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-xl font-semibold transition-all duration-200 hover:border-blue-400"
      >
        Analyze Another Message
      </button>
    </div>
  )
}
