import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className="relative bg-primary-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Your Health, Our Priority
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with the best healthcare professionals for personalized care and expert medical advice.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/find-doctors">
              <Button size="lg">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection