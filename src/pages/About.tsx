const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About PowerOn Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for water purification, solar energy, security, and power backup solutions in Tamilnadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              PowerOn Solutions was established with a clear mission: to provide comprehensive installation and support services for essential systems that homes, farms, and factories depend on daily.
            </p>
            <p className="text-gray-600 mb-4">
              Specializing in RO Water Purifiers, Solar Systems, CCTV Security, UPS Systems, and Battery Solutions, we serve the Salem and Rasipuram regions of Tamilnadu with professional installation and reliable maintenance services.
            </p>
            <p className="text-gray-600">
              Our commitment to quality service and customer satisfaction has made us a trusted name in the industry, helping countless customers secure their water supply, energy needs, and safety requirements.
            </p>
          </div>
          <div className="bg-gradient-to-br from-logoGreen to-primary-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💧</span>
                <span>RO Water Purifier</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">☀️</span>
                <span>Solar Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📹</span>
                <span>CCTV Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span>UPS Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔋</span>
                <span>Battery Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏠</span>
                <span>All Sectors</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-logoGreen bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Solutions</h3>
              <p className="text-gray-600">
                Complete water purification, solar, and security solutions for residential properties
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-logoGreen bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agriculture Solutions</h3>
              <p className="text-gray-600">
                Specialized systems for farming and agricultural operations
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-logoGreen bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Factory Solutions</h3>
              <p className="text-gray-600">
                Industrial-grade systems for factories and commercial facilities
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-logoGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Service</h3>
              <p className="text-gray-600 text-sm">
                Professional installation and maintenance with attention to detail
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-logoGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock assistance for all your service needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-logoGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our top priority in every project
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-logoGreen bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-logoGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Solutions</h3>
              <p className="text-gray-600 text-sm">
                Trained professionals delivering reliable system installations
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Serving Salem and Rasipuram regions with professional installation and support services
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-logoGreen">📞</span>
              <span className="text-gray-700">9080098006</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-logoGreen">📍</span>
              <span className="text-gray-700">Salem & Rasipuram, Tamilnadu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
