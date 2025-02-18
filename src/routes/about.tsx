import { createFileRoute } from '@tanstack/react-router'
import { Users, Ticket, Star, CalendarCheck, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-eventr-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-eventr-gray-900 to-eventr-gray-800">
        <div className="absolute inset-0 bg-black/60">
          <img 
            src="/concert-crowd.jpg" 
            alt="Concert crowd" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-gothic">
            About Eventr
          </h1>
          <p className="text-lg md:text-xl text-eventr-gray-200 max-w-2xl mx-auto">
            Your Gateway to Unforgettable Experiences
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black mb-6">
              Who We Are
            </h2>
            <p className="text-black leading-relaxed">
              At Eventr, we're passionate about connecting people with extraordinary experiences. 
              Founded in 2024, we've become India's leading platform for discovering and booking 
              events of all types - from thrilling concerts to captivating theater performances.
            </p>
            <p className="text-black leading-relaxed">
              Our platform serves millions of event-goers monthly, partnering with thousands of 
              organizers to bring you the best selection of events across the country.
            </p>
          </div>
          
          <div className="bg-eventr-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Users className="h-8 w-8 text-secondary mx-auto mb-4" />
                <span className="text-2xl font-bold text-black">5M+</span>
                <p className="text-black">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Ticket className="h-8 w-8 text-secondary mx-auto mb-4" />
                <span className="text-2xl font-bold text-black">50K+</span>
                <p className="text-black">Events Listed</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Star className="h-8 w-8 text-secondary mx-auto mb-4" />
                <span className="text-2xl font-bold text-black">4.9/5</span>
                <p className="text-black">Customer Rating</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <CalendarCheck className="h-8 w-8 text-secondary mx-auto mb-4" />
                <span className="text-2xl font-bold text-black">100+</span>
                <p className="text-black">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16">
          <div className="bg-secondary rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg max-w-3xl leading-relaxed">
              To revolutionize the way people experience entertainment by creating seamless connections 
              between event organizers and audiences, while delivering exceptional service and 
              unforgettable moments.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-black">Innovation</h3>
            <p className="text-black">
              Continuously evolving our platform to bring you the latest features and best user experience.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-black">Integrity</h3>
            <p className="text-black">
              Transparent transactions and honest communication with all our partners and customers.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-black">Passion</h3>
            <p className="text-black">
              Driven by our love for entertainment and commitment to creating memorable experiences.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Ready to Explore?</h2>
          <a 
            href="/explore"
            className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-medium
                     hover:bg-secondary-dark transition-colors inline-flex items-center gap-2"
          >
            Discover Events Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}