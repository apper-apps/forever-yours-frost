import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from '@/components/pages/HomePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100 relative overflow-hidden">
        {/* Enhanced romantic background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 via-pink-200/20 to-purple-200/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,182,193,0.1),transparent_50%)] animate-pulse" />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App