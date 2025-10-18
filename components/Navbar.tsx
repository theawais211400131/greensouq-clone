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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-green-600 to-emerald-700 shadow-lg border-b border-green-500' 
          : 'bg-gradient-to-r from-green-600 to-emerald-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <Link 
              href="/" 
              className="font-bold text-2xl flex items-center gap-2 group transition-all duration-300 hover:scale-105"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                <span className="text-white text-lg">🌿</span>
              </div>
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent hidden sm:block">
                GreenSouq
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
              >
                <span className="group-hover:scale-110 transition-transform">🏠</span>
                Home
              </Link>

              <Link 
                href="/product" 
                className="font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
              >
                <span className="group-hover:scale-110 transition-transform">🛍️</span>
                Products
              </Link>

              {session ? (
                <>
                  <Link 
                    href="/favorites" 
                    className="font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">⭐</span>
                    Favorites
                  </Link>

                  <div className="flex items-center gap-4 ml-2">
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                      <span className="text-sm font-medium max-w-24 truncate">
                        {session.user?.name || session.user?.email?.split('@')[0]}
                      </span>
                    </div>

                    <button
                      onClick={() => signOut()}
                      className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group border-2 border-transparent hover:border-green-200"
                    >
                      <span className="group-hover:scale-110 transition-transform">🚪</span>
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <Link 
                    href="/login" 
                    className="font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">🔑</span>
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="bg-gradient-to-r from-white to-green-100 text-green-700 px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group border-2 border-transparent hover:border-white/50"
                  >
                    <span className="group-hover:scale-110 transition-transform">✨</span>
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`} />
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-green-600/95 to-emerald-700/95 backdrop-blur-lg border-t border-green-500/50">
            {/* Mobile Navigation Links */}
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-medium group"
              onClick={handleLinkClick}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">🏠</span>
              Home
            </Link>

            <Link 
              href="/product" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-medium group"
              onClick={handleLinkClick}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">🛍️</span>
              Products
            </Link>

            {session ? (
              <>
                <Link 
                  href="/favorites" 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-medium group"
                  onClick={handleLinkClick}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">⭐</span>
                  Favorites
                </Link>

                {/* User Info Mobile */}
                <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">
                        {session.user?.name || session.user?.email?.split('@')[0]}
                      </p>
                      <p className="text-green-100 text-xs truncate">
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
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-green-700 font-semibold hover:bg-green-50 transition-all duration-300 group border-2 border-transparent hover:border-green-200"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">🚪</span>
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Button Mobile */}
                <Link 
                  href="/login" 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-medium group"
                  onClick={handleLinkClick}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">🔑</span>
                  Login
                </Link>

                {/* Register Button Mobile */}
                <Link
                  href="/register"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-white to-green-100 text-green-700 font-semibold hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-white/50"
                  onClick={handleLinkClick}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">✨</span>
                  Register
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
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        /* Prevent body scroll when mobile menu is open */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}