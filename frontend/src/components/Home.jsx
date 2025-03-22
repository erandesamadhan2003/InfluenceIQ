import React from 'react'
import { CTASection, HeroSection, HowItWorks, KeyFeatures, Testimonials, TrendingInfluencers } from './Layout/HomeLayout'

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <TrendingInfluencers />
      <Testimonials />
      <CTASection />
    </div>
  )
}
