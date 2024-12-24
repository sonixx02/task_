import React from 'react'

const services = [
  {
    title: "Video Consultation",
    description: "Connect with doctors from the comfort of your home",
    icon: "🎥"
  },
  {
    title: "Clinic Visit",
    description: "Book in-person appointments with top specialists",
    icon: "🏥"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock medical assistance and guidance",
    icon: "⏰"
  }
]

function FeaturedServices() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-500">Choose how you want to connect with our doctors</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg text-3xl">
                      {service.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedServices