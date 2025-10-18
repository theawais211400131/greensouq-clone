"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 shadow-lg border-b border-green-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link 
          href="/" 
          className="font-bold text-2xl flex items-center gap-2 group transition-all duration-300 hover:scale-105"
        >
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
            <span className="text-white text-lg">🌿</span>
          </div>
          <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            GreenSouq
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Home Link */}
          <Link 
            href="/" 
            className="font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
          >
            <span className="group-hover:scale-110 transition-transform">🏠</span>
            Home
          </Link>

          {/* Products Link */}
          <Link 
            href="/product" 
            className="font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
          >
            <span className="group-hover:scale-110 transition-transform">🛍️</span>
            Products
          </Link>

          {session ? (
            <>
              {/* Favorites Link */}
              <Link 
                href="/favorites" 
                className="font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
              >
                <span className="group-hover:scale-110 transition-transform">⭐</span>
                Favorites
              </Link>

              {/* User Info */}
              <div className="flex items-center gap-4 ml-2">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                  <span className="text-sm font-medium">
                    {session.user?.name || session.user?.email?.split('@')[0]}
                  </span>
                </div>

              {/* Logout Button */}
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
              {/* Login Link */}
              <Link 
                href="/login" 
                className="font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-1 group"
              >
                <span className="group-hover:scale-110 transition-transform">🔑</span>
                Login
              </Link>

              {/* Register Button */}
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
      </div>

      {/* Mobile menu button (for future responsive design) */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}