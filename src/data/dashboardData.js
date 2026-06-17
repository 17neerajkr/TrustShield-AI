export const statsData = {
  total_analyses: 1245,
  trusted_messages: 923,
  suspicious_messages: 322,
  avg_trust_score: 78,
  analyses_today: 47,
  threats_blocked: 318,
}

export const pieData = [
  { name: 'Trusted', value: 923, color: '#22C55E' },
  { name: 'Suspicious', value: 322, color: '#EF4444' },
  { name: 'Uncertain', value: 89, color: '#F59E0B' },
]

export const riskBarData = [
  { risk: 'Low', count: 756, fill: '#22C55E' },
  { risk: 'Medium', count: 312, fill: '#F59E0B' },
  { risk: 'High', count: 177, fill: '#EF4444' },
]

export const trendData = [
  { day: 'Mon', trusted: 42, suspicious: 18 },
  { day: 'Tue', trusted: 55, suspicious: 22 },
  { day: 'Wed', trusted: 38, suspicious: 29 },
  { day: 'Thu', trusted: 61, suspicious: 14 },
  { day: 'Fri', trusted: 49, suspicious: 31 },
  { day: 'Sat', trusted: 33, suspicious: 12 },
  { day: 'Sun', trusted: 28, suspicious: 9 },
]

export const recentAnalyses = [
  { id: 1, type: 'Text', prediction: 'Trusted', score: 91, time: '2 min ago', risk: 'Low' },
  { id: 2, type: 'Image', prediction: 'Suspicious', score: 12, time: '15 min ago', risk: 'High' },
  { id: 3, type: 'Text', prediction: 'Uncertain', score: 54, time: '1 hr ago', risk: 'Medium' },
  { id: 4, type: 'Text', prediction: 'Trusted', score: 88, time: '2 hr ago', risk: 'Low' },
  { id: 5, type: 'Image', prediction: 'Suspicious', score: 9, time: '3 hr ago', risk: 'High' },
]
