import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from './Footer'

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper