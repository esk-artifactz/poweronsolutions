import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-logoGreen rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-logoYellow rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-logoGreen to-logoYellow bg-clip-text text-transparent leading-tight">
                    Power ON
                  </span>
                  <span className="text-sm font-semibold text-logoGreen leading-tight">
                    SOLUTIONS
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-logoGreen bg-green-50 border-b-2 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-logoGreen bg-green-50 border-b-2 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-logoGreen bg-green-50 border-b-2 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-logoGreen bg-green-50 border-b-2 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') 
                  ? 'text-logoGreen bg-green-50 border-l-4 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen hover:bg-gray-100'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-logoGreen bg-green-50 border-l-4 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen hover:bg-gray-100'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-logoGreen bg-green-50 border-l-4 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen hover:bg-gray-100'
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-logoGreen bg-green-50 border-l-4 border-logoGreen' 
                  : 'text-gray-700 hover:text-logoGreen hover:bg-gray-100'
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
