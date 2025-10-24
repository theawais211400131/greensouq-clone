"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-emerald-800 via-green-700 to-teal-800 shadow-2xl shadow-green-900/30 backdrop-blur-lg border-b border-emerald-400/30' 
          : 'bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand - Now visible on mobile too */}
            <Link 
              href="/" 
              className="font-bold text-2xl flex items-center gap-2 group transition-all duration-500 hover:scale-105"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg group-hover:bg-white/40 transition-all duration-500 shadow-lg group-hover:shadow-xl border border-white/20 group-hover:border-white/30">
                <span className="text-white text-lg group-hover:scale-110 transition-transform">🌿</span>
              </div>
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent font-extrabold tracking-tight">
                GreenSouq
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                href="/" 
                className="font-semibold px-4 py-2.5 rounded-xl transition-all duration-500 hover:bg-white/15 hover:scale-105 flex items-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">🏠</span>
                <span className="relative z-10">Home</span>
              </Link>

              <Link 
                href="/product" 
                className="font-semibold px-4 py-2.5 rounded-xl transition-all duration-500 hover:bg-white/15 hover:scale-105 flex items-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">🛍️</span>
                <span className="relative z-10">Products</span>
              </Link>

              {session ? (
                <>
                  <Link 
                    href="/favorites" 
                    className="font-semibold px-4 py-2.5 rounded-xl transition-all duration-500 hover:bg-white/15 hover:scale-105 flex items-center gap-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">⭐</span>
                    <span className="relative z-10">Favorites</span>
                  </Link>

                  <div className="flex items-center gap-4 ml-2 pl-4 border-l border-white/20">
                    <div className="flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 rounded-2xl border border-white/20 backdrop-blur-lg hover:border-white/30 transition-all duration-500 group hover:scale-105">
                      <div className="w-8 h-8 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center backdrop-blur-lg group-hover:scale-110 transition-transform duration-300 shadow-inner">
                        <span className="text-sm">👤</span>
                      </div>
                      <span className="text-sm font-semibold max-w-28 truncate bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                        {session.user?.name || session.user?.email?.split('@')[0]}
                      </span>
                    </div>

                    <button
                      onClick={() => signOut()}
                      className="bg-gradient-to-br from-white to-green-100 text-green-800 px-5 py-2.5 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3 group border-2 border-white/50 hover:border-white relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-white/30 to-green-100/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10">🚪</span>
                      <span className="relative z-10">Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4 pl-4 border-l border-white/20">
                  <Link 
                    href="/login" 
                    className="font-semibold px-5 py-2.5 rounded-2xl transition-all duration-500 hover:bg-white/15 hover:scale-105 flex items-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10">🔑</span>
                    <span className="relative z-10">Login</span>
                  </Link>

                  <Link
                    href="/register"
                    className="bg-gradient-to-br from-white to-green-100 text-green-800 px-6 py-2.5 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3 group border-2 border-white/50 hover:border-white relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-white/30 to-green-100/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10">✨</span>
                    <span className="relative z-10">Register</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-gradient-to-br from-white/15 to-white/5 p-3 rounded-2xl hover:bg-white/20 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-lg border border-white/20 hover:border-white/30 group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-500 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5 bg-gradient-to-r from-white to-green-200' : '-translate-y-1 bg-gradient-to-r from-white to-green-100'
                }`} />
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100 bg-gradient-to-r from-white to-green-100'
                }`} />
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-500 ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5 bg-gradient-to-r from-white to-green-200' : 'translate-y-1 bg-gradient-to-r from-white to-green-100'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-3 bg-gradient-to-b from-emerald-800/95 via-green-700/95 to-teal-800/95 backdrop-blur-xl border-t border-emerald-400/30 shadow-2xl">
            {/* Mobile Navigation Links */}
            <Link 
              href="/" 
              className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-500 text-white font-semibold group border border-white/10 hover:border-white/20"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-lg">🏠</span>
              </div>
              <span>Home</span>
            </Link>

            <Link 
              href="/product" 
              className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-500 text-white font-semibold group border border-white/10 hover:border-white/20"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-lg">🛍️</span>
              </div>
              <span>Products</span>
            </Link>

            {session ? (
              <>
                <Link 
                  href="/favorites" 
                  className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-500 text-white font-semibold group border border-white/10 hover:border-white/20"
                  onClick={handleLinkClick}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-lg">⭐</span>
                  </div>
                  <span>Favorites</span>
                </Link>

                {/* User Info Mobile */}
                <div className="px-4 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/25 to-white/15 rounded-2xl flex items-center justify-center backdrop-blur-lg shadow-inner">
                      <span className="text-base">👤</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-base truncate bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                        {session.user?.name || session.user?.email?.split('@')[0]}
                      </p>
                      <p className="text-green-200 text-sm truncate font-medium">
                        {session.user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Logout Button Mobile */}
                <button
                  onClick={() => {
                    handleLinkClick();
                    signOut();
                  }}
                  className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-br from-white to-green-100 text-green-800 font-bold hover:shadow-2xl transition-all duration-500 group border-2 border-white/50 hover:border-white"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-lg">🚪</span>
                  </div>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                {/* Login Button Mobile */}
                <Link 
                  href="/login" 
                  className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-500 text-white font-semibold group border border-white/10 hover:border-white/20"
                  onClick={handleLinkClick}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-lg">🔑</span>
                  </div>
                  <span>Login</span>
                </Link>

                {/* Register Button Mobile */}
                <Link
                  href="/register"
                  className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-gradient-to-br from-white to-green-100 text-green-800 font-bold hover:shadow-2xl transition-all duration-500 group border-2 border-white/50 hover:border-white"
                  onClick={handleLinkClick}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-lg">✨</span>
                  </div>
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden behind fixed navbar */}
      <div className="h-16" />

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-black/60 via-emerald-900/40 to-teal-900/40 z-40 md:hidden backdrop-blur-lg transition-all duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        /* Smooth scrolling for the entire app */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent body scroll when mobile menu is open */
        body {
          overflow-x: hidden;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #10b981, #059669);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ffffff, #d1fae5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ffffff, #a7f3d0);
        }
      `}</style>
    </>
  );
}
