import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-logoGreen to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-logoGreen rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-logoYellow rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-logoYellow bg-clip-text text-transparent leading-tight">
                    Power ON
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                    SOLUTIONS
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Professional RO Water Purifier, Solar, CCTV, UPS & Battery installation and support services for Agriculture, Factories & Homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-logoGreen hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-logoGreen px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for water purification, solar energy, security, and power backup systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RO Water Purifier</h3>
              <p className="text-gray-600">
                Advanced reverse osmosis water purification systems for pure, safe drinking water in homes, farms, and factories
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solar Systems</h3>
              <p className="text-gray-600">
                Complete solar panel installation and energy solutions for residential, agricultural, and industrial applications
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📹</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CCTV Security</h3>
              <p className="text-gray-600">
                Professional surveillance and security camera systems with 24/7 monitoring for all property types
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UPS Systems</h3>
              <p className="text-gray-600">
                Uninterruptible power supply systems to ensure continuous operation during power outages
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Battery Systems</h3>
              <p className="text-gray-600">
                Energy storage solutions and battery backup systems for reliable power management
              </p>
            </div>

            {/* Sectors */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Sectors</h3>
              <p className="text-gray-600">
                Serving Home, Agriculture, and Factory sectors with customized solutions and expert installation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PowerOn Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional installation and reliable support for water purification, solar power, and security systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-logoGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Installation</h3>
              <p className="text-gray-600">
                Expert installation services for all systems by certified technicians with years of experience
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-logoGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock maintenance and support services to ensure your systems run smoothly
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-logoGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Sectors Covered</h3>
              <p className="text-gray-600">
                Serving agriculture, industrial factories, and residential properties with customized solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Request a personalized quotation for your water purification, solar, security, or power backup needs
          </p>
          <Link
            to="/services"
            className="inline-block bg-logoGreen text-white hover:bg-primary-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Request Quotation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
