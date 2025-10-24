"use client";
import { useState, useEffect } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [message]);

  async function fetchFavorites() {
    try {
      const res = await fetch("/api/favorites");
      const data = await res.json();
      setFavorites(data.favorites || []);
    } catch (error) {
      setMessage("❌ Failed to load favorites");
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function addFavorite(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    
    setLoading(true);
    setMessage("");
    
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (res.ok) {
        setText("");
        setMessage("✅ Song added to favorites!");
        fetchFavorites();
      } else {
        setMessage("❌ Failed to add song");
      }
    } catch (error) {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  async function removeFavorite(id: string) {
    try {
      const res = await fetch(`/api/favorites?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessage("🗑️ Song removed from favorites!");
        fetchFavorites();
      } else {
        setMessage("❌ Failed to remove song");
      }
    } catch (error) {
      setMessage("❌ Network error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow">
            <span className="text-4xl text-white">🎵</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-3">
            Your Favorite Songs
          </h1>
          <p className="text-gray-600 text-lg">Curate your perfect playlist</p>
        </div>

        {/* Add Song Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl shadow-green-200/50 p-6 border border-green-100 mb-8 transform transition-all duration-500 hover:shadow-3xl hover:shadow-green-300/30">
          <form onSubmit={addFavorite} className="flex gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="🎤 Enter song name or artist..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 hover:bg-white/80 text-gray-700 placeholder-gray-500"
                required
                disabled={loading}
                maxLength={100}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg flex items-center gap-2 group"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Adding...
                </>
              ) : (
                <>
                  <span className="group-hover:scale-110 transition-transform">➕</span>
                  Add Song
                </>
              )}
            </button>
          </form>
        </div>

        {/* Message Display - Auto-hides after 3 seconds */}
        {message && (
          <div className={`mb-6 p-4 rounded-xl text-center font-medium transition-all duration-500 animate-fade-in ${
            message.includes("✅") 
              ? "bg-green-50 text-green-700 border border-green-200" 
              : message.includes("🗑️")
              ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {message}
          </div>
        )}

        {/* Favorites List */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl shadow-green-200/50 p-6 border border-green-100 transform transition-all duration-500 hover:shadow-3xl hover:shadow-green-300/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-green-600">📋</span>
              Your Playlist
              <span className="text-sm font-normal text-gray-500 bg-green-100 px-2 py-1 rounded-full">
                {favorites.length} {favorites.length === 1 ? 'song' : 'songs'}
              </span>
            </h2>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">🎵</span>
              </div>
              <p className="text-gray-500 text-lg mb-2">No favorites yet!</p>
              <p className="text-gray-400 text-sm">Start adding your favorite songs above</p>
            </div>
          ) : (
            <div className="space-y-3">
              {favorites.map((favorite, index) => (
                <div
                  key={favorite.id}
                  className="group bg-white border border-green-100 rounded-xl p-4 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:border-green-300 hover:bg-green-50/50 transform hover:-translate-y-0.5 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-lg">{favorite.text}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <span>⭐</span>
                        Added {new Date(favorite.createdAt || Date.now()).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFavorite(favorite.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300 transform hover:scale-110 ml-4"
                    title="Remove from favorites"
                  >
                    <span className="text-xl">🗑️</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        {favorites.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-xl p-4 text-center border border-green-100">
              <div className="text-2xl font-bold text-green-600">{favorites.length}</div>
              <div className="text-sm text-gray-600">Total Songs</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center border border-green-100">
              <div className="text-2xl font-bold text-green-600">
                {favorites.length * 3}
              </div>
              <div className="text-sm text-gray-600">Avg. Minutes</div>
            </div>
            <div className="bg-white/50 rounded-xl p-4 text-center border border-green-100">
              <div className="text-2xl font-bold text-green-600">🎯</div>
              <div className="text-sm text-gray-600">Playlist</div>
            </div>
          </div>
        )}
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-300/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-teal-300/15 rounded-full blur-lg animate-float-slow"></div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
