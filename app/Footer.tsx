export default function Footer() {
  return (
    <footer className="bg-[#EFF7EE] text-gray-800 py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Follow Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Follow us</h3>
            <div className="flex space-x-3">
              {/* Professional Social Media Icons */}
              <a href="#" className="bg-gray-800 hover:bg-gray-900 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md">
                <span className="text-white font-semibold text-sm">f</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-900 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md">
                <span className="text-white font-semibold text-sm">𝕏</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-900 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md">
                <span className="text-white font-semibold text-xs">in</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-900 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md">
                <span className="text-white text-lg font-bold">○</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-900 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md">
                <span className="text-white font-semibold text-sm">d</span>
              </a>
            </div>
          </div>

          {/* Find It Fast */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Find It Fast</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Latest Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Shipping charges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Hot Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Hot Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Your Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm font-medium">
                <span className="block text-gray-500 text-xs mb-1">Mobile</span>
                +92313-6471686
              </p>
              <p className="text-gray-600 text-sm font-medium">
                <span className="block text-gray-500 text-xs mb-1">Email</span>
                awais.tech2114@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 <span className="text-gray-900 font-semibold">M.Awais</span>, Powered by Next Js
          </p>
        </div>
      </div>
    </footer>
  );
}