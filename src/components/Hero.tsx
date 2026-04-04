import { Link } from 'react-router-dom'

const Hero = () => {
  return (
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
            Professional Water Purifier, Solar & CCTV installation and support services for Agriculture, Factories & Homes
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
  )
}

export default Hero
