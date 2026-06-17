import React from 'react'
import { Link } from 'react-router-dom'
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from 'recharts'
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Activity, ArrowUpRight, Zap } from 'lucide-react'
import { statsData, pieData, riskBarData, trendData, recentAnalyses } from '../data/dashboardData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 shadow-2xl">
        {label && <p className="text-slate-400 text-xs mb-1">{label}</p>}
        {payload.map((p, i) => (
          <p key={i} className="text-sm font-semibold" style={{ color: p.color }}>{p.name}: {p.value}</p>
        ))}
      </div>
    )
  }
  return null
}

export default function Dashboard() {
  const trustRate = Math.round((statsData.trusted_messages / statsData.total_analyses) * 100)

  const statCards = [
    { label: 'Total Analyses', value: statsData.total_analyses.toLocaleString(), icon: Activity, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', change: '+47 today' },
    { label: 'Trusted Messages', value: statsData.trusted_messages.toLocaleString(), icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', change: `${trustRate}% of total` },
    { label: 'Suspicious Messages', value: statsData.suspicious_messages.toLocaleString(), icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', change: `${100 - trustRate}% of total` },
    { label: 'Avg Trust Score', value: `${statsData.avg_trust_score}%`, icon: TrendingUp, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', change: '+3% this week' },
  ]

  const predColor = { Trusted: 'text-green-400', Suspicious: 'text-red-400', Uncertain: 'text-amber-400' }
  const riskBadge = {
    Low: 'bg-green-500/10 border-green-500/30 text-green-400',
    Medium: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    High: 'bg-red-500/10 border-red-500/30 text-red-400',
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="pt-8 pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-mono uppercase tracking-wider">System Operational</span>
            </div>
            <h1 className="text-4xl font-black text-white">Analytics Dashboard</h1>
            <p className="text-slate-400 mt-1">Platform intelligence overview — updated in real-time</p>
          </div>
          <Link to="/analyzer" className="btn-primary flex items-center gap-2 self-start sm:self-auto">
            <Zap className="w-4 h-4" />
            New Analysis
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div key={i} className={`glass-card p-5 border ${card.border}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600" />
                </div>
                <div className={`text-2xl sm:text-3xl font-black mb-1 ${card.color}`}>{card.value}</div>
                <div className="text-slate-500 text-xs mb-1">{card.label}</div>
                <div className="text-slate-600 text-xs font-mono">{card.change}</div>
              </div>
            )
          })}
        </div>

        {/* Charts row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Pie */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold mb-6">Trust Distribution</h3>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {pieData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                      <span className="text-slate-400 text-sm">{d.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-semibold text-sm">{d.value}</span>
                      <span className="text-slate-500 text-xs ml-1">({Math.round(d.value / statsData.total_analyses * 100)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar - Risk */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold mb-6">Risk Level Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={riskBarData} barCategoryGap="35%">
                <XAxis dataKey="risk" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {riskBarData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line chart - trend */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-white font-bold mb-6">Weekly Activity Trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="day" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#64748B', fontSize: '12px' }} />
              <Line type="monotone" dataKey="trusted" stroke="#22C55E" strokeWidth={2} dot={{ fill: '#22C55E', r: 3 }} name="Trusted" />
              <Line type="monotone" dataKey="suspicious" stroke="#EF4444" strokeWidth={2} dot={{ fill: '#EF4444', r: 3 }} name="Suspicious" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent analyses */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold">Recent Analyses</h3>
            <span className="text-slate-500 text-xs font-mono">LIVE FEED</span>
          </div>
          <div className="space-y-2">
            {recentAnalyses.map(item => (
              <div key={item.id} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/3 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${predColor[item.prediction] || 'text-white'}`}>{item.prediction}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs border ${riskBadge[item.risk] || ''}`}>{item.risk}</span>
                    </div>
                    <span className="text-slate-500 text-xs">{item.type} Analysis — {item.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono font-bold text-sm">{item.score}</div>
                  <div className="text-slate-500 text-xs">score</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
