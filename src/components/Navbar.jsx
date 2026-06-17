import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/analyzer', label: 'Analyzer' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0F172A]/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{boxShadow: '0 0 15px rgba(59,130,246,0.5)'}}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0F172A] animate-pulse" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight leading-none">TrustShield</span>
              <span className="text-blue-400 font-bold text-lg tracking-tight leading-none"> AI</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/analyzer" className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105" style={{boxShadow: '0 0 15px rgba(59,130,246,0.4)'}}>
              <Zap className="w-4 h-4" />
              Analyze Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 bg-[#0F172A]/98 backdrop-blur-xl border-b border-blue-500/20 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/analyzer" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-lg mt-2">
            <Zap className="w-4 h-4" />
            Analyze Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
