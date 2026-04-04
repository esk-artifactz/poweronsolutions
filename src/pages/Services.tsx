import { useState } from 'react'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showQuotationForm, setShowQuotationForm] = useState(false)

  const categories = [
    {
      id: 'home',
      title: 'Home Solutions',
      description: 'Complete water purification, solar, and security solutions for residential properties',
      icon: '🏠',
      services: [
        { name: 'RO Water Purifier', image: '/ro-system.svg' },
        { name: 'Solar Systems', image: '/solar-systems.svg' },
        { name: 'CCTV Security', image: '/cctv-security.svg' },
        { name: 'UPS System', image: '/ups-system.svg' },
        { name: 'Battery System', image: '/battery-system.svg' }
      ]
    },
    {
      id: 'agriculture',
      title: 'Agriculture Solutions',
      description: 'Specialized systems for farming and agricultural operations',
      icon: '🚜',
      services: [
        { name: 'RO Water Purifier', image: '/ro-system.svg' },
        { name: 'Solar Systems', image: '/solar-systems.svg' },
        { name: 'CCTV Security', image: '/cctv-security.svg' },
        { name: 'UPS System', image: '/ups-system.svg' },
        { name: 'Battery System', image: '/battery-system.svg' }
      ]
    },
    {
      id: 'factory',
      title: 'Factory Solutions',
      description: 'Industrial-grade systems for factories and commercial facilities',
      icon: '🏭',
      services: [
        { name: 'RO Water Purifier', image: '/ro-system.svg' },
        { name: 'Solar Systems', image: '/solar-systems.svg' },
        { name: 'CCTV Security', image: '/cctv-security.svg' },
        { name: 'UPS System', image: '/ups-system.svg' },
        { name: 'Battery System', image: '/battery-system.svg' }
      ]
    }
  ]

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    )
  }

  const handleQuotationRequest = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setShowQuotationForm(true)
    setSelectedServices([])
  }

  const submitQuotation = () => {
    const category = categories.find(c => c.id === selectedCategory)
    console.log('Quotation Request:', {
      category: category?.title,
      services: selectedServices,
      timestamp: new Date().toISOString()
    })
    alert(`Quotation request submitted for ${category?.title}!\nServices: ${selectedServices.join(', ')}\n\nWe will contact you soon.`)
    setShowQuotationForm(false)
    setSelectedServices([])
    setSelectedCategory('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your sector and select services for a personalized quotation
          </p>
        </div>

        {!showQuotationForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Available Services:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {category.services.map((service) => (
                      <div key={service.name} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <img src={service.image} alt={service.name} className="w-8 h-8 mb-1" />
                        <span className="text-xs text-gray-700 text-center">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleQuotationRequest(category.id)}
                  className="w-full bg-logoGreen text-white hover:bg-primary-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Request Quotation
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Request Quotation - {categories.find(c => c.id === selectedCategory)?.title}
            </h2>
            
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-3">Select Services:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {categories.find(c => c.id === selectedCategory)?.services.map((service) => (
                  <label key={service.name} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.name)}
                      onChange={() => toggleService(service.name)}
                      className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                    />
                    <img src={service.image} alt={service.name} className="w-8 h-8" />
                    <span className="text-gray-700 font-medium text-sm">{service.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Contact Information:
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <textarea
                placeholder="Additional Requirements (Optional)"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={submitQuotation}
                disabled={selectedServices.length === 0}
                className="flex-1 bg-logoGreen text-white hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Quotation Request
              </button>
              <button
                onClick={() => setShowQuotationForm(false)}
                className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services
