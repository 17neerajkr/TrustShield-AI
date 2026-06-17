import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Code2, Brain, Eye, Smartphone, Mail, Globe, ArrowRight, Layers, Cpu } from 'lucide-react'

const techStack = [
  { name: 'React.js', desc: 'Component-based UI with lazy loading and Suspense', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling with glassmorphism effects', icon: Layers, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { name: 'Machine Learning', desc: 'NLP models for threat pattern recognition and classification', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { name: 'OCR Technology', desc: 'Image-to-text extraction for screenshot-based analysis', icon: Eye, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { name: 'Flask API', desc: 'Python REST API backend — future integration ready', icon: Cpu, color: 'text-green-400', bg: 'bg-green-500/10' },
]

const useCases = [
  { icon: Mail, title: 'Email Scam Detection', desc: 'Identify phishing emails, impersonation attempts, and CEO fraud before you click anything.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Smartphone, title: 'SMS Fraud Identification', desc: 'Catch smishing attacks, fake delivery notifications, and bank impersonation texts.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Globe, title: 'Social Media Verification', desc: 'Verify suspicious DMs, fake giveaway posts, and account impersonation scams.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Eye, title: 'Screenshot Threat Analysis', desc: 'Upload screenshots of suspicious conversations for OCR-powered analysis.', color: 'text-green-400', bg: 'bg-green-500/10' },
]

const team = [
  { role: 'AI & ML Architecture', initial: 'A', color: 'bg-blue-500' },
  { role: 'Frontend Development', initial: 'R', color: 'bg-purple-500' },
  { role: 'Security Research', initial: 'K', color: 'bg-cyan-500' },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="pt-12 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono mb-8">
            <Shield className="w-4 h-4" />
            Final Year Project & Hackathon Showcase
          </div>
          <h1 className="text-5xl font-black text-white mb-6">
            About <span className="text-gradient">TrustShield AI</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A next-generation cybersecurity platform built to solve one of the most pervasive problems in digital communication — knowing who and what to trust.
          </p>
        </div>

        {/* Mission */}
        <div className="glass-card p-10 mb-8 border border-blue-500/20 relative overflow-hidden" style={{boxShadow: '0 0 40px rgba(59,130,246,0.06)'}}>
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at top left, rgba(59,130,246,0.06) 0%, transparent 60%)'}} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">Mission Statement</span>
            </div>
            <blockquote className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
              "To empower individuals with AI-driven trust assessment tools that identify deceptive communications before harm occurs."
            </blockquote>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Every day, billions of messages traverse the digital world — many designed to deceive, manipulate, and defraud. TrustShield AI puts the power of institutional-grade threat detection in the hands of everyday users, creating a safer communication ecosystem for everyone.
            </p>
          </div>
        </div>

        {/* Stats context */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { value: '3.4B', label: 'Phishing emails per day globally' },
            { value: '$57B', label: 'Lost to email scams in 2023' },
            { value: '94%', label: 'Of attacks start with a message' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-5 text-center border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">{s.value}</div>
              <div className="text-slate-500 text-xs leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, i) => {
              const Icon = tech.icon
              return (
                <div key={i} className="glass-card-hover p-5">
                  <div className={`w-10 h-10 rounded-xl ${tech.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${tech.color}`} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc, i) => {
              const Icon = uc.icon
              return (
                <div key={i} className="glass-card p-6 flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${uc.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${uc.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{uc.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Future roadmap */}
        <div className="glass-card p-8 mb-8 border border-blue-500/10">
          <h2 className="text-2xl font-black text-white mb-6">Roadmap</h2>
          <div className="space-y-3">
            {[
              { phase: 'v1.0', label: 'Text analysis, mock AI results, dashboard analytics', done: true },
              { phase: 'v1.1', label: 'OCR image analysis via Tesseract.js integration', done: false },
              { phase: 'v1.2', label: 'Flask API backend with real ML model (BERT/DistilBERT)', done: false },
              { phase: 'v2.0', label: 'Browser extension, email client plugins, mobile app', done: false },
            ].map((r, i) => (
              <div key={i} className={`flex items-start gap-3 px-4 py-3 rounded-lg ${r.done ? 'bg-green-500/5 border border-green-500/15' : 'bg-white/3'}`}>
                <span className={`text-xs font-mono font-bold mt-0.5 flex-shrink-0 ${r.done ? 'text-green-400' : 'text-slate-500'}`}>{r.phase}</span>
                <span className={`text-sm ${r.done ? 'text-slate-300' : 'text-slate-500'}`}>{r.label}</span>
                {r.done && <span className="ml-auto text-green-400 text-xs font-mono flex-shrink-0">LIVE</span>}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-10 text-center border border-blue-500/20">
          <Shield className="w-10 h-10 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Ready to analyze a message?</h2>
          <p className="text-slate-400 mb-6 text-sm">Put TrustShield AI to the test with any message you're unsure about.</p>
          <Link to="/analyzer" className="btn-primary inline-flex items-center gap-2">
            Open Analyzer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
