import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Zap, Brain, BarChart3, Lock, ArrowRight, CheckCircle, Eye, Target } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Trust Assessment',
    desc: 'Deep learning models trained on millions of phishing, fraud, and legitimate messages classify threat level in under 3 seconds.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Eye,
    title: 'Fraud Detection',
    desc: 'Pattern recognition identifies social engineering tactics, impersonation attempts, and credential harvesting schemes.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: BarChart3,
    title: 'Risk Analysis',
    desc: 'Multidimensional risk scoring breaks down sender credibility, content anomalies, and behavioral red flags.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Lock,
    title: 'Security Recommendations',
    desc: 'Actionable guidance tailored to each threat type — from what not to click to how to verify legitimate senders.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
]

const howItWorks = [
  {
    step: '01',
    icon: Zap,
    title: 'Submit Message',
    desc: 'Paste any text message, email, or SMS into the analyzer. Or upload a screenshot for image-based analysis.',
  },
  {
    step: '02',
    icon: Brain,
    title: 'AI Analysis',
    desc: 'Our model scans for phishing patterns, urgency tactics, suspicious requests, and behavioral anomalies.',
  },
  {
    step: '03',
    icon: Target,
    title: 'Receive Trust Score',
    desc: 'Get a 0–100 trust score, risk level classification, and specific findings with security recommendations.',
  },
]

const stats = [
  { label: 'Messages Analyzed', value: '1.2K+' },
  { label: 'Threats Caught', value: '318' },
  { label: 'Avg Accuracy', value: '94%' },
  { label: 'Avg Analysis Time', value: '<3s' },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 grid-bg">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full" style={{background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)'}} />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            AI-Powered Security Platform — v1.0
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
            Trust Nothing.
            <br />
            <span className="text-gradient">Verify Everything.</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            TrustShield AI analyzes messages for phishing, fraud, and social engineering threats — 
            delivering a trust verdict in seconds so you never fall for a scam again.
          </p>

          {/* Tagline */}
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-10">
            Analyze. Verify. Trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/analyzer" className="btn-primary flex items-center gap-2 text-base px-8 py-4">
              <Zap className="w-5 h-5" />
              Start Analysis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard" className="btn-ghost flex items-center gap-2 text-base">
              <BarChart3 className="w-5 h-5" />
              View Dashboard
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
            {['No account required', 'Instant results', 'Privacy-first design'].map(item => (
              <div key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">Platform Capabilities</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Built for the Threat Landscape
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Four integrated intelligence modules work together to deliver comprehensive message trust assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <div key={i} className={`glass-card-hover p-7 border ${feat.border} group`}>
                  <div className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${feat.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">Simple Process</p>
            <h2 className="text-4xl font-black text-white mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From submission to verdict in under 5 seconds. No signup, no waiting, no complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />

            {howItWorks.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="relative glass-card p-7 text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-500 rounded-full text-xs font-mono font-bold text-white">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5 mt-2">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/analyzer" className="btn-primary inline-flex items-center gap-2">
              Try It Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 text-center relative overflow-hidden border border-blue-500/20" style={{boxShadow: '0 0 40px rgba(59,130,246,0.1)'}}>
            <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)'}} />
            <div className="relative">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-5" />
              <h2 className="text-3xl font-black text-white mb-4">
                Is your next message safe?
              </h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Don't guess. Get an AI verdict in seconds. Paste any suspicious message and know exactly what you're dealing with.
              </p>
              <Link to="/analyzer" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
                <Zap className="w-5 h-5" />
                Analyze a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
