import React from 'react'
import { FAQs, HeroSection, HowItWorks, MeetTheTeam, Testimonials, WhatIsInfluenceIQ, WhyChooseUs } from './Layout/AboutLayout'

export const About = () => {
  return (
    <div>
      <HeroSection />
      <WhatIsInfluenceIQ />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <MeetTheTeam />
      <FAQs />
    </div>
  )
}
