import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'

const Home = React.lazy(() => import('./pages/Home'))
const Analyzer = React.lazy(() => import('./pages/Analyzer'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const About = React.lazy(() => import('./pages/About'))

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0F172A] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analyzer" element={<Analyzer />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
