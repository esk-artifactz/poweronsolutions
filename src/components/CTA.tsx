import { Link } from 'react-router-dom'

interface CTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

const CTA = ({
  title = 'Ready to Get Started?',
  description = "Let's discuss how we can help transform your business",
  buttonText = 'Contact Us Today',
  buttonLink = '/contact',
}: CTAProps) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link
          to={buttonLink}
          className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}

export default CTA
